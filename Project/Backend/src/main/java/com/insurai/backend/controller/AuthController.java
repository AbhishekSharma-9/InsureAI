package com.insurai.backend.controller;

import com.insurai.backend.dto.AuthResponse;
import com.insurai.backend.dto.LoginRequest;
import com.insurai.backend.dto.RegisterRequest;
import com.insurai.backend.model.User;
import com.insurai.backend.repository.UserRepository;
import com.insurai.backend.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtTokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        User user = userRepository.findByUsername(loginRequest.getUsername()).get();
        String role = user.getRole().replace("ROLE_", "");
        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new AuthResponse(jwt, role));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {

        // --- THIS IS THE NEW, SMARTER CHECK ---
        if (userRepository.findByUsername(registerRequest.getUsername()).isPresent()) {
            // We return a user-friendly error
            return ResponseEntity
                    .badRequest()
                    .body("Error: Username is already taken!");
        }

        // You can also add a check for the email
        if (userRepository.findByEmail(registerRequest.getEmail()).isPresent()) {
            return ResponseEntity
                    .badRequest()
                    .body("Error: Email is already in use!");
        }
        // --- END OF NEW CHECKS ---


        // If checks pass, create new user's account
        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setRole("ROLE_" + registerRequest.getAccountType().toUpperCase());

        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully!");
    }
}
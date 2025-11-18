package com.insurai.backend.controller;

import com.insurai.backend.dto.AppointmentRequest;
import com.insurai.backend.model.Appointment;
import com.insurai.backend.model.User;
import com.insurai.backend.repository.AppointmentRepository;
import com.insurai.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/user") // All endpoints here are for logged-in users
@CrossOrigin(origins = "http://localhost:5173") // Allow React app
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/appointments")
    public ResponseEntity<?> scheduleAppointment(@RequestBody AppointmentRequest request, Principal principal) {

        // 1. Get the username of the logged-in user from the token
        String username = principal.getName();

        // 2. Find that user in the database
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));

        // 3. Create a new Appointment object
        Appointment newAppointment = new Appointment();
        newAppointment.setUserId(user.getId()); // Set the user's ID
        newAppointment.setAgentId(request.getAgentId());
        newAppointment.setAppointmentTime(request.getAppointmentTime());
        newAppointment.setReason(request.getReason());

        // 4. Save the appointment to the database
        appointmentRepository.save(newAppointment);

        return ResponseEntity.ok("Appointment scheduled successfully!");
    }
}
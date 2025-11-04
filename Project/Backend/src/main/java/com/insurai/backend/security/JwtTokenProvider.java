package com.insurai.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys; // <-- Import the Keys class
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct; // <-- Import PostConstruct
import javax.crypto.SecretKey; // <-- Import SecretKey
import java.util.Base64; // <-- Import Base64 if needed (optional for logging)
import java.util.Date;

@Component
public class JwtTokenProvider {

    // --- NEW: Define a SecretKey variable ---
    private SecretKey jwtSecretKey;

    // --- Remove or comment out the old @Value annotation for jwtSecret ---
    // @Value("${app.jwtSecret}")
    // private String jwtSecret;

    @Value("${app.jwtExpirationInMs}")
    private int jwtExpirationInMs;

    // --- NEW: Generate the key AFTER the bean is created ---
    @PostConstruct
    protected void init() {
        // This creates a secure key suitable for HS512
        this.jwtSecretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);

        // Optional: Print the Base64 encoded key to the console if you want to see it
        // You could potentially store this encoded string in application.properties later
        // System.out.println("Generated JWT Secret Key (Base64): " + Base64.getEncoder().encodeToString(this.jwtSecretKey.getEncoded()));
    }

    public String generateToken(Authentication authentication) {
        org.springframework.security.core.userdetails.User principal = (org.springframework.security.core.userdetails.User) authentication.getPrincipal();
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);

        return Jwts.builder()
                .setSubject(principal.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                // --- Use the new jwtSecretKey variable ---
                .signWith(jwtSecretKey, SignatureAlgorithm.HS512)
                .compact();
    }

    public String getUsernameFromJWT(String token) {
        Claims claims = Jwts.parserBuilder()
                // --- Use the new jwtSecretKey variable ---
                .setSigningKey(jwtSecretKey)
                .build()
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    public boolean validateToken(String authToken) {
        try {
            Jwts.parserBuilder()
                    // --- Use the new jwtSecretKey variable ---
                    .setSigningKey(jwtSecretKey)
                    .build()
                    .parseClaimsJws(authToken);
            return true;
        } catch (Exception ex) {
            // Log exception details here (e.g., SignatureException, MalformedJwtException, etc.)
            System.out.println("Invalid JWT token: " + ex.getMessage());
        }
        return false;
    }

    // --- NEW: Add a getter for the key (needed for JwtAuthenticationFilter) ---
    public SecretKey getJwtSecretKey() {
        return jwtSecretKey;
    }
}

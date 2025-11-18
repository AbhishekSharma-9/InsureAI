package com.insurai.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "appointments")
@Data
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId; // Stores the ID of the user who booked

    @Column(nullable = false)
    private Long agentId;

    @Column(nullable = false)
    private LocalDateTime appointmentTime;

    @Lob // Large Object, for longer text
    private String reason;

    private String status; // e.g., "SCHEDULED", "COMPLETED", "CANCELLED"

    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        if (status == null) {
            status = "SCHEDULED";
        }
    }
}
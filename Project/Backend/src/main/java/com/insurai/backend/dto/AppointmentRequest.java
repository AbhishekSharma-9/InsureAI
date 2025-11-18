package com.insurai.backend.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class AppointmentRequest {
    private Long agentId;
    private LocalDateTime appointmentTime; // React sends an ISO string, Spring converts it
    private String reason;
}
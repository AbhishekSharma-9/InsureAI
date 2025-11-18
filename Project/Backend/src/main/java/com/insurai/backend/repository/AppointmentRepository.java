package com.insurai.backend.repository;

import com.insurai.backend.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    // We can add functions here later, e.g.:
    // List<Appointment> findByUserId(Long userId);
    // List<Appointment> findByAgentId(Long agentId);
}
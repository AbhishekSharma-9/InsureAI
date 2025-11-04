package com.insurai.backend.repository;

import com.insurai.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    // --- ADD THIS NEW LINE ---
    Optional<User> findByEmail(String email);
}

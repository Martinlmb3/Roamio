package com.roamio.api.user.repository;

import com.roamio.api.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    User findByIdUser(Long id);
}

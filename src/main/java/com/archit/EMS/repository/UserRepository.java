package com.archit.EMS.repository;

import com.archit.EMS.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
//    boolean existsByEmail(String email);
//    User findByEmail()
    Optional<User> findByEmail(String email);

//    Optional<User> findByName(String username);


}

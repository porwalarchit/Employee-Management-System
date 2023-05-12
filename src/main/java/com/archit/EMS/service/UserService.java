package com.archit.EMS.service;

import com.archit.EMS.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> findAll();

    boolean isEmailExists(String email);

    User save(User theUser);

    Optional<User> findUserByEmail(String email);

}

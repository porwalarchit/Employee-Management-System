package com.archit.EMS.service;

import com.archit.EMS.entity.User;

import java.util.List;

public interface UserService {
    List<User> findAll();

    boolean isEmailExists(String email);

    User save(User theUser);

    User findByEmail(String email);

}

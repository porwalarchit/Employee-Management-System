package com.archit.EMS.service;

import com.archit.EMS.entity.User;

import java.util.List;

public interface UserService {
    List<User> findAllUsers();

    User saveUser(User theUser);

    User findUserByEmail(String email);

}

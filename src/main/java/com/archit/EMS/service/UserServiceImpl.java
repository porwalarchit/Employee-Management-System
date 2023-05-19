package com.archit.EMS.service;

import com.archit.EMS.repository.UserRepository;
import com.archit.EMS.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User saveUser(User theUser) {
        return userRepository.save(theUser);
    }

    @Override
    public User findUserByEmail(String email){
        return userRepository.findByEmail(email).get();
    }
//    @Override
//    public Optional<User> findUserByEmail(String email) {
//        return userRepository.findByEmail(email);
//    }

}

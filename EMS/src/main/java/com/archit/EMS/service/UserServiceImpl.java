package com.archit.EMS.service;

import com.archit.EMS.dao.UserRepository;
import com.archit.EMS.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    public UserServiceImpl(){}

    @Autowired
    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

//    @Override
//    public User findUser(String email) {
//        Optional<User> res = userRepository.findOne(email);

//        userRepository.existsByEmail()
//        User theUser = null;
//        if(result.isPresent()){
//            theUser = result.get();
//        }
//        else{
//            throw new RuntimeException("Did not find employee id- " + theId);
//        }
//        return theUser;
//    }

    public boolean isEmailExists(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public User save(User theUser) {
        return userRepository.save(theUser);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByUsername(email);
    }

}

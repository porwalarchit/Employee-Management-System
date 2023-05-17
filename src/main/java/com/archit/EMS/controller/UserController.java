package com.archit.EMS.controller;

import com.archit.EMS.entity.User;
import com.archit.EMS.repository.UserRepository;
import com.archit.EMS.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/auth")
    public ResponseEntity<String> sayHello(){
        return ResponseEntity.ok("Hello from secured endpoint.");
    }

    @PostMapping("/test")
    public String savHello(){
        return "Hello World!!";
    }

    @PostMapping("/user")
    public User saveUser(@RequestBody User theUser){
        System.out.println(theUser);

        User newUser =  userService.saveUser(theUser);
        return newUser;
    }
//    @PostMapping("/signup")
//    public User addUser(@RequestBody User theUser){
////        System.out.println(theUser.getEmail());
//        String dbUserEmail = theUser.getEmail();
////        System.out.println(userService.isEmailExists(dbUserEmail));
//
//        if(userService.isEmailExists(dbUserEmail)){
//            String s = "User already exists";
//            throw new UserAlreadyExistsException("User already exists, try login first!!");
//        }
//
//
//    }

//    @PostMapping("/login")
//    public String userLogin(@RequestBody UserCredentials userCredentials){
//        System.out.println(userService.isEmailExists(userCredentials.getEmail()));
//        if(userService.isEmailExists(userCredentials.getEmail())){
//            User user = userService.findUserByEmail(userCredentials.getEmail());
//            System.out.println(user.getPassword().equals(userCredentials.getPassword()));
//            if (user != null && (user.getPassword().equals(userCredentials.getPassword())) ) {
//                return "Login successful";
//            } else {
//                return "Invalid username or password";
//            }
//        }
//        throw new UserNotExists("User Not found!!");
//    }
}

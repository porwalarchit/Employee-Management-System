package com.archit.EMS.rest;

import com.archit.EMS.dao.UserRepository;
import com.archit.EMS.entity.User;
import com.archit.EMS.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class UserRestController {
    private UserService userService;

    @Autowired
    private UserRestController(UserService theUserService){
        userService = theUserService;
    }

    @GetMapping("/users")
    public List<User> User(){
        return userService.findAll();
    }

    @PostMapping("/signup")
    public User addUser(@RequestBody User theUser){
//        System.out.println(theUser.getEmail());
        String dbUserEmail = theUser.getEmail();
//        System.out.println(userService.isEmailExists(dbUserEmail));

        if(userService.isEmailExists(dbUserEmail)){
            String s = "User already exists";
            throw new UserAlreadyExistsException("User already exists, try login first!!");
        }

        User newUser =  userService.save(theUser);
        return newUser;
    }

    @PostMapping("/login")
    public String userLogin(@RequestBody UserCredentials userCredentials){

        System.out.println(userService.isEmailExists(userCredentials.getEmail()));
        if(userService.isEmailExists(userCredentials.getEmail())){
            User user = userService.findUserByEmail(userCredentials.getEmail());
            System.out.println(user.getPassword().equals(userCredentials.getPassword()));
            if (user != null && (user.getPassword().equals(userCredentials.getPassword())) ) {
                return "Login successful";
            } else {
                return "Invalid username or password";
            }
        }
        throw new UserNotExists("User Not found!!");
    }
}

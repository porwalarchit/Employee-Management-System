package com.archit.EMS.controller;

import com.archit.EMS.dto.TokenResponse;
import com.archit.EMS.dto.UserCredentials;
import com.archit.EMS.entity.User;
import com.archit.EMS.repository.UserRepository;
import com.archit.EMS.service.JwtService;
import com.archit.EMS.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/test")
    public String sayHello(){
        return "Hello World!!";
    }

    @PostMapping("/adduser")
//    @PreAuthorize("hasAuthority('SUPERADMIN') or hasAuthority('ADMIN')")
    public User saveUser(@RequestBody User theUser){
//        System.out.println(theUser);
        User user = new User(
                theUser.getFirstName(),
                theUser.getLastName(),
                theUser.getEmail(),
                passwordEncoder.encode(theUser.getPassword()),
                theUser.getRoles()
        );
        User newUser =  userService.saveUser(user);
        return newUser;
    }

    @GetMapping("/findAllUsers")
//    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('SUPERADMIN')")
    public List<User> findAllUsers() {
        return userService.findAllUsers();
    }


//    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/authenticate")
    public ResponseEntity<TokenResponse> authenticateAndGetToken(@RequestBody UserCredentials userCredentials){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userCredentials.getEmail(), userCredentials.getPassword()));
        if (authentication.isAuthenticated()) {
            return new ResponseEntity<TokenResponse>(new TokenResponse(jwtService.generateToken(userCredentials.getEmail())), HttpStatus.OK) ;
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }
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

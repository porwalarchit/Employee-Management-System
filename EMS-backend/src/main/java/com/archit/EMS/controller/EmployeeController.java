package com.archit.EMS.controller;

import com.archit.EMS.dto.TokenResponse;
import com.archit.EMS.dto.EmployeeCredentials;
import com.archit.EMS.entity.Employee;
import com.archit.EMS.service.JwtService;
import com.archit.EMS.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

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

    @PostMapping("/addEmployee")
    public Employee saveEmployee(@RequestBody Employee theEmployee){
        Employee employee = new Employee(
                theEmployee.getFirstName(),
                theEmployee.getLastName(),
                theEmployee.getEmail(),
                passwordEncoder.encode(theEmployee.getPassword()),
                theEmployee.getRoles()
        );
        Employee newEmployee =  employeeService.saveEmployee(employee);
        return newEmployee;
    }

    @GetMapping("/findAllEmployees")
    public List<Employee> findAllEmployees() {
        return employeeService.findAllEmployees();
    }

    @PostMapping("/authenticate")
    public ResponseEntity<TokenResponse> authenticateAndGetToken(@RequestBody EmployeeCredentials employeeCredentials){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(employeeCredentials.getEmail(), employeeCredentials.getPassword()));
        if (authentication.isAuthenticated()) {
            return new ResponseEntity<TokenResponse>(new TokenResponse(jwtService.generateToken(employeeCredentials.getEmail())), HttpStatus.OK) ;
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

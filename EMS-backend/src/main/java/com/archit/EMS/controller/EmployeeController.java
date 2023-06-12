package com.archit.EMS.controller;

import com.archit.EMS.dto.EmployeeEmail;
import com.archit.EMS.dto.TokenResponse;
import com.archit.EMS.dto.EmployeeCredentials;
import com.archit.EMS.entity.Employee;
import com.archit.EMS.service.DepartmentService;
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
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private DepartmentService departmentService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("employee/{id}")
    public Employee findEmployeeById(@PathVariable int id){
        return employeeService.findEmployeeById(id).get();
    }

    @PostMapping("/dashboard")
    public Employee findEmployeeByEmail(@RequestBody EmployeeEmail email){
//        Optional<Employee> tempEmp = employeeService.findEmployeeByEmail(email.getEmail());
//        if(tempEmp.isPresent()){
////            Hibernate.initialize(tempEmp.get().getEmployeeDetails());
//            return tempEmp.get();
//        }
//        throw new EmployeeNotExists("Not Found");
        return employeeService.findEmployeeByEmail(email.getEmail()).get();
    }

    @PostMapping("/addEmployee")
    public Employee saveEmployee(@RequestBody Employee theEmployee){
        String pass = theEmployee.getPassword();
        theEmployee.setPassword(passwordEncoder.encode((pass)));
        theEmployee.setDepartment(departmentService.departmentById(theEmployee.getDepartment().getDeptId()).get());
        return employeeService.saveEmployee(theEmployee);
    }

    @GetMapping("/findAllEmployees")
    public List<Employee> findAllEmployees()  {
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
}

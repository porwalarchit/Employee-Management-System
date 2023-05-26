package com.archit.EMS.controller;

import com.archit.EMS.entity.EmployeeDetails;
import com.archit.EMS.service.EmployeeDetailsService;
import com.archit.EMS.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employeedetails")
public class EmployeeDetailsController {
    @Autowired
    private EmployeeDetailsService employeeDetailsService;

    @Autowired
    private EmployeeService employeeService;

//    public int test(@PathVariable int id){
//        return id;
//    }

    @GetMapping("{id}")
    public Optional<EmployeeDetails> getDetails(@PathVariable int id){
        return employeeDetailsService.getEmployeeDetails(id);
    }

    @PostMapping("/add")
    public EmployeeDetails saveDetails(@RequestBody EmployeeDetails employeeDetails){
        employeeDetails.setEmployee(employeeService.findEmployeeByEmail(employeeDetails.getEmployee().getEmail()).get());
//        System.out.println(employeeDetails);
        return employeeDetailsService.saveDetails(employeeDetails);
    }
}

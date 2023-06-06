package com.archit.EMS.controller;

import com.archit.EMS.entity.Employee;
import com.archit.EMS.entity.EmployeeDetails;
import com.archit.EMS.repository.EmployeeRepository;
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

    @Autowired
    private EmployeeRepository employeeRepository;

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

    @PutMapping("/update")
    public Optional<Employee> updateDetails(@RequestBody Employee employee){
        System.out.println(employeeService.findEmployeeById(employee.getId()));
//        System.out.println(employee);
        //        employee.setEmployeeDetails();
//        System.out.println(employeeDetails.getEmployee().getId());
//        System.out.println(employeeService.findEmployeeById(employeeDetails.getEmployee().getId()));
//        employeeDetails.setEmployee();
//        System.out.println(employeeRepository.findById(employeeDetails.getEmployee().getId()));
//        employeeDetails.setEmployee;
//        employeeDetails.setEmployee(employeeService.findEmployeeByEmail(employeeDetails.getEmployee().getEmail()).get());
//        System.out.println(employeeDetails);
//        return employeeDetailsService.saveDetails(employeeDetails);
//        return employeeDetailsService.saveDetails(employeeDetails);
//        return employeeDetails;
        return employeeService.findEmployeeById(employee.getId());
    }
}

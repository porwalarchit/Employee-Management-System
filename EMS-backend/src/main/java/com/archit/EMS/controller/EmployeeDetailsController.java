package com.archit.EMS.controller;

import com.archit.EMS.dto.EmployeeId;
import com.archit.EMS.entity.Employee;
import com.archit.EMS.entity.EmployeeDetails;
import com.archit.EMS.repository.EmployeeDetailsRepository;
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

    @GetMapping("{id}")
    public EmployeeDetails getDetails(@PathVariable int id){
        return employeeDetailsService.getEmployeeDetails(id).get();
    }

    @PostMapping("/add")
    public EmployeeDetails saveDetails(@RequestBody EmployeeDetails employeeDetails){
        employeeDetails.setEmployee(employeeService.findEmployeeByEmail(employeeDetails.getEmployee().getEmail()).get());
//        System.out.println(employeeDetails);
        return employeeDetailsService.saveDetails(Optional.of(employeeDetails));
    }

    @PutMapping("/update")
    public EmployeeDetails updateDetails(@RequestBody EmployeeDetails employeeDetails){
        Optional<EmployeeDetails> emp1 = employeeDetailsService.getEmployeeDetails(employeeDetails.getEmpMdId());
        emp1.get().setGender(employeeDetails.getGender());
        emp1.get().setDateOfBirth(employeeDetails.getDateOfBirth());
        emp1.get().setContactNumber(employeeDetails.getContactNumber());
        emp1.get().setDesignation(employeeDetails.getDesignation());
        emp1.get().setJoiningDate(employeeDetails.getJoiningDate());
        return employeeDetailsService.saveDetails(emp1);
    }
}

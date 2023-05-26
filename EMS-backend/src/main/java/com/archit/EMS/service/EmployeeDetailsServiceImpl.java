package com.archit.EMS.service;

import com.archit.EMS.entity.EmployeeDetails;
import com.archit.EMS.repository.EmployeeDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeDetailsServiceImpl implements EmployeeDetailsService{
    @Autowired
    EmployeeDetailsRepository employeeDetailsRepository;

    @Override
    public EmployeeDetails saveDetails(EmployeeDetails theEmployeeDetails) {
        return employeeDetailsRepository.save(theEmployeeDetails);
    }

    @Override
    public Optional<EmployeeDetails> getEmployeeDetails(int id) {
        return employeeDetailsRepository.findById(id);
    }
}

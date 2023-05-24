package com.archit.EMS.service;

import com.archit.EMS.repository.EmployeeRepository;
import com.archit.EMS.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> findAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee saveEmployee(Employee theEmployee) {
        return employeeRepository.save(theEmployee);
    }

    @Override
    public Employee findEmployeeByEmail(String email){
        return employeeRepository.findByEmail(email).get();
    }
//    @Override
//    public Optional<User> findUserByEmail(String email) {
//        return userRepository.findByEmail(email);
//    }

}

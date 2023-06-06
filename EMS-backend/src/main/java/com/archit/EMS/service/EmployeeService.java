package com.archit.EMS.service;

import com.archit.EMS.entity.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    List<Employee> findAllEmployees();

    Employee saveEmployee(Employee theEmployee);

    Optional<Employee> findEmployeeByEmail(String email);

    Optional<Employee> findEmployeeById(int id);
}

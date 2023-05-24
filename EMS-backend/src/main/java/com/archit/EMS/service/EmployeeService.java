package com.archit.EMS.service;

import com.archit.EMS.entity.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> findAllEmployees();

    Employee saveEmployee(Employee theEmployee);

    Employee findEmployeeByEmail(String email);

}

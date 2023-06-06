package com.archit.EMS.service;

import com.archit.EMS.entity.EmployeeDetails;

import java.util.Optional;

public interface EmployeeDetailsService {
    EmployeeDetails saveDetails(Optional<EmployeeDetails> theEmployeeDetails);

    Optional<EmployeeDetails> getEmployeeDetails(int id);
}

package com.archit.EMS.service;

import com.archit.EMS.entity.Department;
import org.springframework.stereotype.Service;

import java.util.Optional;

public interface DepartmentService {
    Optional<Department> departmentById(int id);

}

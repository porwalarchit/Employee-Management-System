package com.archit.EMS.service;

import com.archit.EMS.entity.Department;
import com.archit.EMS.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DepartmentServiceImpl implements DepartmentService{

    @Autowired
    DepartmentRepository departmentRepository;
    @Override
    public Optional<Department> departmentById(int id){
        return departmentRepository.findById(id);
    };

}

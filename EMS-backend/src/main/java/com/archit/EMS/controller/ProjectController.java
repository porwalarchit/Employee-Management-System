package com.archit.EMS.controller;

import com.archit.EMS.entity.Employee;
import com.archit.EMS.entity.Project;
import com.archit.EMS.repository.ProjectRepository;
import com.archit.EMS.service.EmployeeService;
import com.archit.EMS.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/project")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("newproject")
    public Project newProject(@RequestBody Project theProject){
//        employeeService.findEmployeeByEmail(theProject.getEmployees().toString());
        List<Employee> newEmpList= new ArrayList<Employee>();
        for (Employee employee : theProject.getEmployees()) {
            // Error Handling of this part is remaining
            newEmpList.add(employeeService.findEmployeeByEmail(employee.getEmail()).get());
        }
        // Use the below code to add one employee at a time in a project.
        // Employee employee = theProject.getEmployees().;
        // String email = theProject.getEmployees().get(0).getEmail();
        theProject.setEmployees(newEmpList);
        return projectService.saveProject(theProject);
    }

    @GetMapping("")
    public List<Project> getProject(){
        return projectService.getProject();
    }
}

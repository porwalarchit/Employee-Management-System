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

    @GetMapping("")
    public List<Project> getProject(){
        return projectService.getProject();
    }

    @PostMapping("newproject")
    public Project newProject(@RequestBody Project theProject){
        List<Employee> newEmpList= new ArrayList<Employee>();
        for (Employee employee : theProject.getEmployees()) {
            // Error Handling of this part is remaining
            newEmpList.add(employeeService.findEmployeeByEmail(employee.getEmail()).get());
        }
        theProject.setEmployees(newEmpList);
        return projectService.saveProject(Optional.of(theProject));
    }

    // Create an PUT endpoint for Updating Project data.
    @PutMapping("addmember")
    public Project updateProject(@RequestBody Project theProject){
//        System.out.println(theProject.getProjectId());
//        System.out.println(projectService.getProjectDetails(theProject.getProjectId()));
        Optional<Project> tempProj = projectService.getProjectDetails(theProject.getProjectId());
//        System.out.println(tempProj);
        tempProj.get().setProjectId(theProject.getProjectId());
        tempProj.get().setProjectName(theProject.getProjectName());
        tempProj.get().setProjectDesc(theProject.getProjectDesc());
        tempProj.get().setStatus(theProject.getStatus());

        List<Employee> newEmpList= new ArrayList<Employee>();
        for (Employee employee : theProject.getEmployees()) {
            // Error Handling of this part is remaining
            newEmpList.add(employeeService.findEmployeeByEmail(employee.getEmail()).get());
        }
        tempProj.get().setEmployees(newEmpList);
//        System.out.println(tempProj);
        return projectService.saveProject(tempProj);
    }
}

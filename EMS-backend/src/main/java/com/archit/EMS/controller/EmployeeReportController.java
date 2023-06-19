package com.archit.EMS.controller;

import com.archit.EMS.entity.EmployeeReport;
import com.archit.EMS.service.EmployeeReportService;
import com.archit.EMS.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/report")
public class EmployeeReportController {
    @Autowired
    private EmployeeReportService employeeReportService;

    @Autowired
    private EmployeeService employeeService;


    @PostMapping("addreport")
    public EmployeeReport addReport(@RequestBody EmployeeReport theEmployeeReport){
        theEmployeeReport.setEmployee(employeeService.findEmployeeByEmail(theEmployeeReport.getEmployee().getEmail()).get());
        return employeeReportService.saveReport(theEmployeeReport);
    }

    @GetMapping("{id}")
    public EmployeeReport getReport(@PathVariable int id){
        return employeeReportService.getEmployeeReport(id).get();
    }

    @GetMapping("/all/{empId}")
    public List<EmployeeReport> getReports(@PathVariable int empId){
        return employeeReportService.getEmployeeReportsByEmpId(empId);
    }
}

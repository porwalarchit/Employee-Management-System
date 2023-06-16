package com.archit.EMS.service;

import com.archit.EMS.entity.EmployeeReport;
import com.archit.EMS.repository.EmployeeReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeReportServiceImpl implements  EmployeeReportService{
    @Autowired
    EmployeeReportRepository employeeReportRepository;

    @Override
    public EmployeeReport saveReport(EmployeeReport theEmployeeReport) {
        return employeeReportRepository.save(theEmployeeReport);
    }

    @Override
    public Optional<EmployeeReport> getEmployeeReport(int id) {
        return employeeReportRepository.findById(id);
    }

    @Override
    public List<EmployeeReport> getEmployeeReportsByEmpId(int empId) {
        return employeeReportRepository.findReportByEmpId(empId);
    }
}

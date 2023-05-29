package com.archit.EMS.service;

import com.archit.EMS.entity.EmployeeReport;

import java.util.Optional;

public interface EmployeeReportService {
    EmployeeReport saveReport(EmployeeReport theEmployeeReport);

    Optional<EmployeeReport> getEmployeeReport(int id);
}

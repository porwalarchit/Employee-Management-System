package com.archit.EMS.repository;

import com.archit.EMS.entity.EmployeeReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeReportRepository extends JpaRepository<EmployeeReport, Integer> {
}

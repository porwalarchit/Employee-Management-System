package com.archit.EMS.repository;

import com.archit.EMS.entity.EmployeeReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeReportRepository extends JpaRepository<EmployeeReport, Integer> {
    @Query("SELECT e FROM EmployeeReport e WHERE e.employee.id=:empId")
    List<EmployeeReport> findReportByEmpId(@Param("empId") int empId);
}

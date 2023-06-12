package com.archit.EMS.repository;

import com.archit.EMS.entity.EmployeeDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeDetailsRepository extends JpaRepository<EmployeeDetails, Integer> {
}

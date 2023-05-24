package com.archit.EMS.repository;

import com.archit.EMS.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
//    boolean existsByEmail(String email);
//    User findByEmail()
    Optional<Employee> findByEmail(String email);

//    Optional<User> findByName(String username);


}

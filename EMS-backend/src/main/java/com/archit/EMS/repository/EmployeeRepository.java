package com.archit.EMS.repository;

import com.archit.EMS.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
//    boolean existsByEmail(String email);
//    User findByEmail()
    Optional<Employee> findByEmail(String email);

//    @Override
//    Optional<Employee> findById(Integer integer);

    //    Optional<User> findByName(String username);


}

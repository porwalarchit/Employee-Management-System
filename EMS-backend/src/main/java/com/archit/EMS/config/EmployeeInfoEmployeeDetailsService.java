package com.archit.EMS.config;

import com.archit.EMS.entity.Employee;
import com.archit.EMS.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class EmployeeInfoEmployeeDetailsService implements UserDetailsService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Employee> userInfo = employeeRepository.findByEmail(email);
        return userInfo.map(EmployeeInfoEmployeeDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("user not found " + email));

    }
}

package com.archit.EMS.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

/**
 * Employee Class represents an employee in the company.
 * It contains basic fields that are related to information about an employee.
 * Contains JPA Mappings:
 * EmployeeDetails - OneToOne
 * Department - OneToOne
 * Project - ManyToMany
 * EmployeeReport - OneToMany
 */

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name="employee")
public class Employee {
    // define fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="first_name")
    @NotBlank(message = "Please enter first name")
    private String firstName;

    @Column(name = "last_name")
    @NotBlank(message = "Please enter last name")
    private String lastName;

    @Column(name = "email",unique = true)
    @NotBlank(message = "Please enter your email")
    @Email(message = "Please provide a valid email address")
    private String email;

    @Column(name = "password")
    @NotBlank(message = "Please enter a valid password")
    private String password;

    @Column(name = "roles")
    private String roles;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "employee", fetch = FetchType.EAGER)
    @JsonIgnoreProperties(value = "employee", allowSetters = true)
    private EmployeeDetails employeeDetails;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "dept_id_fk", referencedColumnName = "dept_id")
    private Department department;

    @ManyToMany(cascade = CascadeType.ALL, mappedBy = "employees", fetch = FetchType.EAGER)
    @JsonIgnoreProperties(value = "employees", allowSetters = true)
    private List<Project> projects;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "employee", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value="employee", allowSetters = true)
    private List<EmployeeReport> employeeReport;
}

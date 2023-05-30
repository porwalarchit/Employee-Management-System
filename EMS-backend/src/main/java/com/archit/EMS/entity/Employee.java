package com.archit.EMS.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

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
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email",unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "roles")
    private String roles;

    @OneToOne(cascade = CascadeType.ALL,mappedBy = "employee")
    private EmployeeDetails employeeDetails;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "dept_id_fk", referencedColumnName = "dept_id")
    private Department department;

    @ManyToMany(cascade = CascadeType.ALL, mappedBy = "employees")
    @JsonIgnoreProperties(value = "employees", allowSetters = true)
    private List<Project> projects;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "employee")
    @JsonIgnoreProperties(value="employee", allowSetters = true)
    private List<EmployeeReport> employeeReport;

//    @OneToOne(cascade = CascadeType.ALL, mappedBy = "employee")
//    private Mentor mentor;
}

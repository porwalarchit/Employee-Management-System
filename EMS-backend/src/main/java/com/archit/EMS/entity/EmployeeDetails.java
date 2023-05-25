package com.archit.EMS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "employee_details")
public class EmployeeDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "emp_md_id")
    private int empMdId;

    @Column(name = "gender")
    private String gender;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "contact_details")
    private String contactNumber;

    @Column(name = "designation")
    private String designation;

    @Column(name = "joining_date")
    private Date joiningDate;

    @Column(name = "salary")
    private int salary;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "emp_id", referencedColumnName = "id")
    private Employee employee;
}

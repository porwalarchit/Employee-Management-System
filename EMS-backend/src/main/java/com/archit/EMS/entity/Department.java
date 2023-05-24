package com.archit.EMS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "department")
class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dept_id")
    private int deptId;

    @Column(name = "dept_name")
    private String deptName;

    @Column(name = "curr_project_id")
    private String currentProjectId;

//    @OneToOne(mappedBy = "department")
//    private Employee employee;

}

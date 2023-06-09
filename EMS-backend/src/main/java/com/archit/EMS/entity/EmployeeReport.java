package com.archit.EMS.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "employee_report")
public class EmployeeReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "report_id")
    private int reportId;

    @Column(name = "reporting_date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private String reportingDate;

    @Column(name = "work_done")
    private String workDone;

    @Column(name = "report_status")
    private String reportStatus;

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnoreProperties(value = {"employeeReport", "projects", "department", "password", "employeeDetails"}, allowSetters = true)
    @JoinColumn(name = "emp_id_fk", referencedColumnName = "id")
    private Employee employee;

    @OneToOne(mappedBy = "employeeReport",cascade = CascadeType.ALL)
    @JsonIgnoreProperties(value = {"employeeReport", "mentor"})
    private MentorFeedback mentorFeedback;
}

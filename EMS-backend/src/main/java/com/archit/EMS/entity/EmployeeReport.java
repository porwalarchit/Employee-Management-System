package com.archit.EMS.entity;

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
    private String reportingDate;

    @Column(name = "work_done")
    private String workDone;

    @Column(name = "report_status")
    private String reportStatus;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "emp_id", referencedColumnName = "id")
    private Employee employee;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "feedback_id", referencedColumnName = "feedback_id")
    private MentorFeedback mentorFeedback;
}

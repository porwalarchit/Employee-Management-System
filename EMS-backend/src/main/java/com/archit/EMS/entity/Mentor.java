package com.archit.EMS.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "mentor")
public class Mentor {
    @Id
    @Column(name = "mentor_id")
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mentorId;

//    @Column(name = "mentor_email")
//    private String mentorEmail;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "emp_id_fk", referencedColumnName = "id")
    @JsonIgnoreProperties(value = {"password", "employeeDetails", "projects", "roles", "department"})
    private Employee employee;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "mentor")
    private List<MentorFeedback> mentorFeedback;
}

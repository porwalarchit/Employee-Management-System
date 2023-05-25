package com.archit.EMS.entity;

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
    private int mentorId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "emp_id", referencedColumnName = "id")
    private Employee employee;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "mentor")
    private List<MentorFeedback> mentorFeedback;
}

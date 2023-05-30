package com.archit.EMS.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="mentor_feedback")
public class MentorFeedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "feedback_id")
    private int feedbackId;

    @Column(name = "feedback")
    private String feedback;

    @Column(name = "flag")
    private Boolean flag;

    @Column(name = "rating")
    private String rating;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="mentor_id_fk", referencedColumnName = "mentor_id")
    @JsonIgnoreProperties(value = {"mentorFeedback"}, allowSetters = true)
    private Mentor mentor;
}

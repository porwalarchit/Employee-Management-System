package com.archit.EMS.repository;

import com.archit.EMS.entity.MentorFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MentorFeedbackRepository extends JpaRepository<MentorFeedback, Integer> {
}

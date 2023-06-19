package com.archit.EMS.service;

import com.archit.EMS.entity.MentorFeedback;
import com.archit.EMS.repository.MentorFeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MentorFeedbackServiceImpl implements MentorFeedbackService{
    @Autowired
    private MentorFeedbackRepository mentorFeedbackRepository;
    @Override
    public Optional<MentorFeedback> getFeedback(int id) {
        return mentorFeedbackRepository.findById(id);
    }

    @Override
    public MentorFeedback saveFeedback(Optional<MentorFeedback> mentorFeedback) {
        return mentorFeedbackRepository.save(mentorFeedback.get());
    }
}

package com.archit.EMS.service;

import com.archit.EMS.entity.MentorFeedback;

import java.util.Optional;

public interface MentorFeedbackService {
    Optional<MentorFeedback> getFeedback(int id);

    MentorFeedback saveFeedback(MentorFeedback mentorFeedback);
}

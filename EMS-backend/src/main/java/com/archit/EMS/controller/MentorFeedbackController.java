package com.archit.EMS.controller;

import com.archit.EMS.entity.MentorFeedback;
import com.archit.EMS.service.MentorFeedbackService;
import com.archit.EMS.service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/mentor/feedback")
public class MentorFeedbackController {
    @Autowired
    private MentorFeedbackService mentorFeedbackService;

    @Autowired
    private MentorService mentorService;

    @PostMapping("")
    public MentorFeedback saveFeedback(@RequestBody MentorFeedback theMentorFeedback){
        theMentorFeedback.setMentor(mentorService.getMentorDetailsById(theMentorFeedback.getMentor().getMentorId()).get());
//        theMentorFeedback.setMentor();
        return theMentorFeedback;
//        return mentorFeedbackService.saveFeedback(theMentorFeedback);
    }

    @GetMapping("{id}")
    public Optional<MentorFeedback> getFeedback(@PathVariable int id){
        return mentorFeedbackService.getFeedback(id);
    }
}

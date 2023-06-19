package com.archit.EMS.controller;

import com.archit.EMS.entity.EmployeeReport;
import com.archit.EMS.entity.MentorFeedback;
import com.archit.EMS.service.EmployeeReportService;
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

    @Autowired
    private EmployeeReportService employeeReportService;

    @GetMapping("{id}")
    public  MentorFeedback getFeedback(@PathVariable int id){
        return mentorFeedbackService.getFeedback(id).get();
    }

    @PostMapping("")
    public MentorFeedback saveFeedback(@RequestBody MentorFeedback theMentorFeedback){
        theMentorFeedback.setMentor(mentorService.getMentorDetailsById(theMentorFeedback.getMentor().getMentorId()).get());
        EmployeeReport emp = employeeReportService.getEmployeeReport(theMentorFeedback.getEmployeeReport().getReportId()).get();
        if(theMentorFeedback.getFlag()){
            emp.setReportStatus("Rejected");
        }
        else{
            emp.setReportStatus("Accepted");
        }
        theMentorFeedback.setEmployeeReport(emp);
        return mentorFeedbackService.saveFeedback(Optional.of(theMentorFeedback));
    }

    @PutMapping("")
    public MentorFeedback updateFeedback(@RequestBody MentorFeedback theMentorFeedback){
        Optional<MentorFeedback> tempFeedback = mentorFeedbackService.getFeedback(theMentorFeedback.getFeedbackId());

        tempFeedback.get().setFeedbackId(theMentorFeedback.getFeedbackId());
        tempFeedback.get().setFeedback(theMentorFeedback.getFeedback());
        tempFeedback.get().setFlag(theMentorFeedback.getFlag());
        tempFeedback.get().setMentor(mentorService.getMentorDetailsById(theMentorFeedback.getMentor().getMentorId()).get());

        EmployeeReport emp = employeeReportService.getEmployeeReport(theMentorFeedback.getEmployeeReport().getReportId()).get();
        if(theMentorFeedback.getFlag()){
            emp.setReportStatus("Rejected");
        }
        else{
            emp.setReportStatus("Accepted");
        }
        tempFeedback.get().setEmployeeReport(emp);
        return mentorFeedbackService.saveFeedback(tempFeedback);
    }
}

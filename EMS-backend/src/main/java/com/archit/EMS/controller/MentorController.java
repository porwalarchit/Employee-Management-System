package com.archit.EMS.controller;

import com.archit.EMS.entity.Mentor;
import com.archit.EMS.service.EmployeeService;
import com.archit.EMS.service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/mentor")
public class MentorController {
    @Autowired
    private MentorService mentorService;

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("")
    public Mentor addMentorDetails(@RequestBody Mentor theMentor){
        theMentor.setEmployee(employeeService.findEmployeeByEmail(theMentor.getEmployee().getEmail()).get());
        return mentorService.saveMentorDetails(theMentor);
    }

    @GetMapping("")
    public Mentor getMentorDetails(@RequestBody Mentor theMentor){
//        System.out.println("Mentor: " + theMentor);
//        System.out.println("Mentor ID: " + theMentor.getMentorId());
        return mentorService.getMentorDetailsById(theMentor.getMentorId()).get();
    }
}

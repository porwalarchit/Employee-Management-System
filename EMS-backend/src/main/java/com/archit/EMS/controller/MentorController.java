package com.archit.EMS.controller;

import com.archit.EMS.entity.Mentor;
import com.archit.EMS.exceptions.exception.EmployeeNotExists;
import com.archit.EMS.service.EmployeeService;
import com.archit.EMS.service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("{id}")
    public ResponseEntity<Object> getMentorDetails(@PathVariable int id) {
        Optional<Mentor> mentorDetails = mentorService.getMentorDetailsById(id);

        if (mentorDetails.isPresent()) {
            Mentor mentor = mentorDetails.get();
            return ResponseEntity.ok(mentor);
        } else {
            throw new EmployeeNotExists("No Mentee Found");
        }
    }
}

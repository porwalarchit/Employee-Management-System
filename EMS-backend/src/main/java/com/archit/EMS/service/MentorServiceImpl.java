package com.archit.EMS.service;

import com.archit.EMS.entity.Mentor;
import com.archit.EMS.repository.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MentorServiceImpl implements MentorService{
    @Autowired
    private MentorRepository mentorRepository;

    @Override
    public Mentor saveMentorDetails(Mentor theMentor) {
        return mentorRepository.save(theMentor);
    }

    @Override
    public Optional<Mentor> getMentorDetailsById(int id) {
        return mentorRepository.findById(id);
    }
}

package com.archit.EMS.service;

import com.archit.EMS.entity.Mentor;

import java.util.Optional;

public interface MentorService {
    Mentor saveMentorDetails(Mentor theMentor);

    Optional<Mentor> getMentorDetailsById(int id);
}

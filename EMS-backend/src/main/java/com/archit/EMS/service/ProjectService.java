package com.archit.EMS.service;

import com.archit.EMS.entity.Project;

import java.util.List;
import java.util.Optional;

public interface ProjectService {
    Project saveProject(Optional<Project> theProject);

    List<Project> getProject();

    Optional<Project> getProjectDetails(int id);
}

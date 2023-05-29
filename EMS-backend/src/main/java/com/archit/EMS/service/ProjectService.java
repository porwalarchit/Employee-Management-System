package com.archit.EMS.service;

import com.archit.EMS.entity.Project;

import java.util.List;

public interface ProjectService {
    Project saveProject(Project theProject);

    List<Project> getProject();
}

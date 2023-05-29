package com.archit.EMS.service;

import com.archit.EMS.entity.Project;
import com.archit.EMS.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService{
    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public Project saveProject(Project theProject) {
        return projectRepository.save(theProject);
    }

    @Override
    public List<Project> getProject() {
        return projectRepository.findAll();
    }
}

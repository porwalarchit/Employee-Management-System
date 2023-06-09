package com.archit.EMS.service;

import com.archit.EMS.entity.Project;
import com.archit.EMS.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService{
    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public Project saveProject(Optional<Project> theProject) {
        return projectRepository.save(theProject.get());
    }

    @Override
    public List<Project> getProject() {
        return projectRepository.findAll();
    }

    @Override
    public Optional<Project> getProjectDetails(int id) {
        return projectRepository.findById(id);
    }
}

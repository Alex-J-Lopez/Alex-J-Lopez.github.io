"use client";
import React, { useEffect, useState } from 'react';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/content.json');
                const data = await response.json();
                setProjects(data.projects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h2>{project.projectTitle}</h2>
                        <p>{project.problemStatement}</p>
                        <a href={`/projects/${index}`}>More Details</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsPage;
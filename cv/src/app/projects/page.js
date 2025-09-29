"use client"
import React, { useEffect, useState } from 'react';
import ProjectPreview from '../../components/projectPreview';

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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Project Catalog</h1>
            <p className="text-lg mb-8">Welcome to my project catalog! Here, you'll find a collection of projects I've worked on in the past. Feel free to explore each one in more depth by clicking on the "More Details" link.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectPreview key={index} title={project.projectTitle} problemStatement={project.problemStatement} href={`/projects/${index}`} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
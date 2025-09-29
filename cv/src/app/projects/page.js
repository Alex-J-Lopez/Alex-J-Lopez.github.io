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
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="bg-white/5 p-8 rounded-xl shadow-md">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Project Catalog</h1>
                    <p className="text-lg text-slate-200 mb-8">Welcome to my project catalog! Here, you'll find a collection of projects I've worked on in the past. Feel free to explore each one in more depth by clicking on the "More Details" link.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <ProjectPreview key={index} title={project.projectTitle} problemStatement={project.problemStatement} href={`/projects/${index}`} image={project.featuredImage}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
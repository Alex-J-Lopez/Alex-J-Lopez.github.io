"use client";
import React from 'react';
import content from '../../../../public/content.json';
import StepCard from '@/components/personalProjects/StepCard';

const ProjectDetails = ({ params }) => {
    const { id } = React.use(params);

    // Ensure the project ID is valid
    const project = content.projects[id];

    if (!project) {
        return <div className="p-6 text-center">Project not found</div>;
    }

    return (
        <main className="px-4 py-8 max-w-5xl mx-auto">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">{project.projectTitle}</h1>
            </header>

            <section className="mb-6 space-y-4">
                <p className="text-lg"><strong>Problem Statement:</strong> {project.problemStatement}</p>
                <p className="text-lg"><strong>Solution:</strong> {project.solution}</p>
                <div>
                    <p className="mt-2 font-semibold">Skills Used:</p>
                    <ul className="mt-1 flex flex-wrap gap-2">
                        {project.skillsUsed.map((skill, index) => (
                            <li key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">{skill}</li>
                        ))}
                    </ul>
                </div>
                {project.projectSourceCodeLink && (
                    <p className="mt-2">
                        <a className="inline-block mt-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700" href={project.projectSourceCodeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                    </p>
                )}
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Development Process</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {project.developmentProcess.map((step, index) => (
                        <StepCard key={index} step={step} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ProjectDetails;
"use client";
import React from 'react';
import content from '../../../../public/content.json';

const ProjectDetails = ({ params }) => {
    const { id } = params;

    // Ensure the project ID is valid
    const project = content.projects[id];

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.projectTitle}</h1>
            <p><strong>Problem Statement:</strong> {project.problemStatement}</p>
            <p><strong>Solution:</strong> {project.solution}</p>
            <p><strong>Skills Used:</strong></p>
            <ul>
                {project.skillsUsed.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <p><a href={project.projectSourceCodeLink} target="_blank" rel="noopener noreferrer">Source Code</a></p>

            <h2>Development Process</h2>
            {project.developmentProcess.map((step, index) => (
                <div key={index}>
                    <h3>{step.stepName}</h3>
                    <div>
                        {step.images.map((image, imgIndex) => (
                            <img key={imgIndex} src={image} alt="Project Step" style={{ maxWidth: '100%' }} />
                        ))}
                    </div>
                    <p>{step.stepDescription}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectDetails;
import React from 'react';
import content from '../../../../public/content.json';
import ProjectDetailsClient from './ProjectDetailsClient';

export function generateStaticParams() {
    return content.projects.map((_, index) => ({
        id: index.toString(),
    }));
}

const ProjectDetails = ({ params }) => {
    const { id } = params;

    // Ensure the project ID is valid
    const project = content.projects[id];

    if (!project) {
        return <div className="p-6 text-center">Project not found</div>;
    }

    return <ProjectDetailsClient project={project} />;
};

export default ProjectDetails;
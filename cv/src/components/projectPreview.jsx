import React from 'react';
import Link from 'next/link';

const ProjectPreview = ({ title, problemStatement, href }) => {
    return (
        <div className="border rounded-lg p-4 bg-white dark:bg-[var(--accent)] shadow-sm">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-white mb-4">{problemStatement}</p>
            <Link href={href}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">More Details</button>
            </Link>
        </div>
    );
};

export default ProjectPreview;

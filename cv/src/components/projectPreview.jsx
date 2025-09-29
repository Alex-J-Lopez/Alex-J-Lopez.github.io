import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectPreview = ({ title, problemStatement, href, image }) => {
    return (
        <article className="bg-white/5 hover:bg-white/6 transition-transform hover:-translate-y-1 transform rounded-2xl overflow-hidden shadow-sm">
            {image ? (
                <div className="relative h-44 w-full">
                    <Image src={image} alt={title} fill className="object-cover" />
                </div>
            ) : (
                <div className="h-44 w-full bg-gradient-to-br from-rose-700 via-rose-600 to-rose-500" />
            )}

            <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-50 mb-2">{title}</h3>
                <p className="text-slate-200 text-sm mb-4 line-clamp-3">{problemStatement}</p>

                <div className="flex items-center justify-between">
                    <Link href={href} className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-3 py-2 rounded-md shadow">View Project</Link>
                </div>
            </div>
        </article>
    );
};

export default ProjectPreview;

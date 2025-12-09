'use client'
import React, { useState } from 'react';
import StepCard from '@/components/personalProjects/StepCard';
import MediaModal from '@/components/personalProjects/MediaModal';

export default function ProjectDetailsClient({ project }) {
    const [modalState, setModalState] = useState({ isOpen: false, mediaItems: [], currentIndex: 0 });

    const openModal = (mediaItems, index) => {
        setModalState({ isOpen: true, mediaItems, currentIndex: index });
    };

    const closeModal = () => {
        setModalState(prev => ({ ...prev, isOpen: false }));
    };

    const handleModalNavigate = (direction) => {
        setModalState(prev => {
            if (direction === 'prev') {
                return { ...prev, currentIndex: (prev.currentIndex - 1 + prev.mediaItems.length) % prev.mediaItems.length };
            } else if (direction === 'next') {
                return { ...prev, currentIndex: (prev.currentIndex + 1) % prev.mediaItems.length };
            } else if (typeof direction === 'number') {
                return { ...prev, currentIndex: direction };
            }
            return prev;
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <main className="bg-white/5 p-8 rounded-xl shadow-md">
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-slate-50">{project.projectTitle}</h1>
                    </header>

                    <section className="mb-6 space-y-4 text-slate-200">
                        <p className="text-lg"><strong className="text-slate-100">Problem Statement:</strong> {project.problemStatement}</p>
                        <p className="text-lg"><strong className="text-slate-100">Solution:</strong> {project.solution}</p>
                        <div>
                            <p className="mt-2 font-semibold">Skills Used:</p>
                            <ul className="mt-1 flex flex-wrap gap-2">
                                {project.skillsUsed.map((skill, index) => (
                                    <li key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4 flex gap-2">
                            {project.projectSourceCodeLink && (
                                <a className="inline-block px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-500" href={project.projectSourceCodeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                            )}
                            {project.projectWebsiteLink && (
                                <a className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500" href={project.projectWebsiteLink} target="_blank" rel="noopener noreferrer">Visit Project</a>
                            )}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-50">Development Process</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {project.developmentProcess.map((step, index) => (
                                <StepCard key={index} step={step} onOpenModal={openModal} />
                            ))}
                        </div>
                    </section>
                </main>
            </div>

            <MediaModal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                mediaItems={modalState.mediaItems}
                currentIndex={modalState.currentIndex}
                onNavigate={handleModalNavigate}
            />
        </div>
    );
}

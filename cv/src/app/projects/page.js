"use client"
import { useState, useMemo } from 'react';
import ProjectPreview from '../../components/personalProjects/projectPreview';
import content from '../../../public/content.json';


const ProjectsPage = () => {
    const projects = (content && content.projects) || [];
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    
    // Extract all unique skills from all projects
    const allSkills = useMemo(() => {
        const skillsSet = new Set();
        projects.forEach(project => {
            project.skillsUsed?.forEach(skill => skillsSet.add(skill));
        });
        return Array.from(skillsSet).sort();
    }, [projects]);

    // Filter projects based on selected filters
    const filteredProjects = useMemo(() => {
        if (selectedFilters.length === 0) return projects;
        
        return projects.filter(project => 
            selectedFilters.every(filter => 
                project.skillsUsed?.includes(filter)
            )
        );
    }, [projects, selectedFilters]);

    const toggleFilter = (skill) => {
        setSelectedFilters(prev => 
            prev.includes(skill) 
                ? prev.filter(s => s !== skill)
                : [...prev, skill]
        );
    };

    const clearFilters = () => {
        setSelectedFilters([]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="bg-white/5 p-8 rounded-xl shadow-md">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Project Catalog</h1>
                    <p className="text-lg text-slate-200 mb-8">Welcome to my project catalog! Here, you'll find a collection of projects I've worked on in the past. Feel free to explore each one in more depth by clicking on the "View Project" buttons.</p>

                    {/* Filter Section */}
                    <div className="mb-8">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/15 rounded-lg transition-colors mb-4"
                        >
                            <div className="flex items-center gap-3">
                                <h2 className="text-xl font-semibold text-slate-100">Filter</h2>
                                {selectedFilters.length > 0 && (
                                    <span className="px-2 py-1 bg-rose-600 text-white text-xs rounded-full">
                                        {selectedFilters.length}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-3">
                                {selectedFilters.length > 0 && (
                                    <span
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            clearFilters();
                                        }}
                                        className="text-sm text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
                                    >
                                        Clear all
                                    </span>
                                )}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                        
                        {isFilterOpen && (
                            <div className="bg-white/5 p-4 rounded-lg mb-4">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {allSkills.map(skill => (
                                        <button
                                            key={skill}
                                            onClick={() => toggleFilter(skill)}
                                            className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                                                selectedFilters.includes(skill)
                                                    ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-400'
                                                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                                            }`}
                                        >
                                            {skill}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <p className="text-sm text-slate-400">
                            Showing {filteredProjects.length} of {projects.length} project{projects.length !== 1 ? 's' : ''}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <ProjectPreview 
                                key={index} 
                                title={project.projectTitle} 
                                problemStatement={project.problemStatement} 
                                href={`/projects/${projects.indexOf(project)}`} 
                                image={project.featuredImage}
                            />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-lg text-slate-300 mb-2">No projects match your filters</p>
                            <p className="text-sm text-slate-400 mb-4">Try selecting different technologies or clearing your filters</p>
                            <button
                                onClick={clearFilters}
                                className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-500 transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
"use client";
import Link from 'next/link';
import content from '../../public/content.json';
import ProjectPreview from '@/components/personalProjects/projectPreview';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [projectIndex, setProjectIndex] = useState(5);
  // useEffect(() => {
  //   let tempIndex = 0;
  //   do {
  //     tempIndex = Math.floor(Math.random() * content.projects.length);
  //   } while (tempIndex === 5); //Avoid project 5 which is the project describing the development of this website.
  //   setProjectIndex(tempIndex);
  // }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text column */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Hi — I’m Alex Lopez.</h1>
            <p className="text-lg text-slate-200 mb-6">
              I am a software engineer who builds polished full stack solutions. Browse my work below or get in touch.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="inline-block bg-rose-600 hover:bg-rose-500 text-white px-5 py-3 rounded-md shadow">Biography</Link>
              <Link href="/projects" className="inline-block border border-slate-400 text-slate-200 px-5 py-3 rounded-md hover:bg-white/5">Projects</Link>
              <a href="/about#resume" rel="noreferrer" className="inline-block border border-slate-400 text-slate-200 px-5 py-3 rounded-md hover:bg-white/5">Resume</a>
            </div>
          </div>

          {/* Image column */}
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-gray-200" style={{ aspectRatio: '3 / 2' }}>
              <img src="/media/PersonalImages/Headshots/Selfie.jpg" alt="Portrait of Alexander Lopez" className="object-cover w-full h-full absolute inset-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Featured Project</h2>
        {content.projects && content.projects.length > 0 && (
          <ProjectPreview key={projectIndex} title={content.projects[projectIndex].projectTitle} problemStatement={content.projects[projectIndex].problemStatement} href={`/projects/${projectIndex}`} image={content.projects[projectIndex].featuredImage} />
        )}
      </div>
    </div>
  );
}

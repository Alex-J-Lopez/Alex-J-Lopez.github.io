"use client";
import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-slate-900/60 backdrop-blur-md shadow-sm border-b border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <nav className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-slate-50 font-extrabold text-lg">Alexander Lopez</Link>
                    </div>

                    {/* desktop links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((l) => (
                            <Link key={l.href} href={l.href} className="text-slate-100 hover:text-white font-medium">
                                {l.label}
                            </Link>
                        ))}

                        <a href="/about#resume" rel="noreferrer" className="ml-2 inline-flex items-center bg-rose-600 hover:bg-rose-500 text-white px-3 py-2 rounded-md shadow">Resume</a>
                    </div>

                    {/* mobile toggle */}
                    <div className="md:hidden">
                        <button
                            aria-label="Toggle navigation"
                            onClick={() => setOpen(!open)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:bg-white/5"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            {/* mobile menu panel */}
            {open && (
                <div className="md:hidden">
                    <div className="max-w-6xl mx-auto px-6 pb-4">
                        <div className="bg-white/5 rounded-lg p-4 shadow">
                            <div className="flex flex-col gap-3">
                                {navLinks.map((l) => (
                                    <Link key={l.href} href={l.href} className="text-slate-100 py-2 px-3 rounded hover:bg-white/5" onClick={() => setOpen(false)}>
                                        {l.label}
                                    </Link>
                                ))}
                                <a href="/Media/ResumeLopezaj2023.pdf" target="_blank" rel="noreferrer" className="inline-block mt-2 bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded">Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default NavBar;
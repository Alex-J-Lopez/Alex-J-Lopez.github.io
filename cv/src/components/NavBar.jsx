"use client";
import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <>
            <nav className="bg-[var(--primary)] p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-bold text-xl">Alexander Lopez</div>
                    <div className="space-x-4">
                        <Link href="/" className="text-gray-300 hover:text-[var(--secondary)]">Home</Link>
                        <Link href="/about" className="text-gray-300 hover:text-[var(--secondary)]">About Me</Link>
                        <Link href="/projects" className="text-gray-300 hover:text-[var(--secondary)]">Projects</Link>
                        <Link href="/contact" className="text-gray-300 hover:text-[var(--secondary)]">Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
"use client"
import React, { useState } from "react";

function isVideo(src) {
    const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv'];
    return videoExtensions.some(ext => src.toLowerCase().endsWith(ext));
}

export default function ImageCarousel({ images = [], onOpenModal }) {
    const [imgIndex, setImgIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const nextImage = () => setImgIndex((i) => (i + 1) % images.length);
    const prevImage = () => setImgIndex((i) => (i - 1 + images.length) % images.length);

    const handleOpenModal = () => {
        if (onOpenModal) {
            onOpenModal(images, imgIndex);
        }
    };

    const currentMedia = images[imgIndex];
    const isCurrentVideo = isVideo(currentMedia);

    return (
        <>
            <div className="relative w-full">
                <div className="w-full flex items-center justify-center overflow-hidden rounded-lg bg-slate-800">
                    {isCurrentVideo ? (
                        <div className="relative w-full">
                            <video
                                src={currentMedia}
                                className="mx-auto w-auto max-h-56 sm:max-h-64 md:max-h-44 lg:max-h-56 object-contain"
                                preload="metadata"
                            >
                                Your browser does not support the video tag.
                            </video>
                            {/* Play Button Overlay */}
                            <button
                                onClick={handleOpenModal}
                                aria-label="Play video in fullscreen"
                                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                            >
                                <div className="bg-rose-600/90 hover:bg-rose-500 text-white p-4 rounded-full shadow-lg transition-all group-hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    ) : (
                        <div className="relative w-full group">
                            {/* use native img to respect intrinsic height; constrain with max-height so tall images shrink to fit */}
                            <img src={currentMedia} alt={`Step image ${imgIndex + 1}`} className="mx-auto w-auto max-h-56 sm:max-h-64 md:max-h-44 lg:max-h-56 object-contain" />
                            {/* Magnifying Glass Button Overlay */}
                            <button
                                onClick={handleOpenModal}
                                aria-label="View image in fullscreen"
                                className="absolute top-3 right-3 bg-rose-600/80 hover:bg-rose-500 text-white p-2 rounded-full shadow-lg transition-all md:opacity-0 md:group-hover:opacity-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

            {images.length > 1 && (
                <>
                    <button onClick={prevImage} aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/50 shadow-lg">
                        <span className="text-2xl">‹</span>
                    </button>
                    <button onClick={nextImage} aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/50 shadow-lg">
                        <span className="text-2xl">›</span>
                    </button>

                    <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setImgIndex(i)}
                                className={`w-2 h-2 rounded-full ${i === imgIndex ? 'bg-white shadow-md ring-1 ring-black/60' : 'bg-black/40 ring-1 ring-white/10'}`}
                                aria-label={`Show image ${i+1}`}
                            />
                        ))}
                    </div>
                </>
            )}
            </div>
        </>
    );
}
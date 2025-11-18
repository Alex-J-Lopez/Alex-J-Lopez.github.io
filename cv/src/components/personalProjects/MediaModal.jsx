"use client"
import React, { useEffect, useRef } from "react";

function isVideo(src) {
    const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv'];
    return videoExtensions.some(ext => src.toLowerCase().endsWith(ext));
}

export default function MediaModal({ isOpen, onClose, mediaItems = [], currentIndex, onNavigate }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft') {
                onNavigate('prev');
            } else if (e.key === 'ArrowRight') {
                onNavigate('next');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose, onNavigate]);

    useEffect(() => {
        // Autoplay video when modal opens or index changes
        if (isOpen && videoRef.current && isVideo(mediaItems[currentIndex])) {
            videoRef.current.play().catch(() => {
                // Autoplay might be blocked by browser, user can still click play
            });
        }
    }, [isOpen, currentIndex, mediaItems]);

    if (!isOpen || !mediaItems || mediaItems.length === 0) return null;

    const currentMedia = mediaItems[currentIndex];
    const isCurrentVideo = isVideo(currentMedia);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={handleBackdropClick}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 bg-rose-600/80 hover:bg-rose-500 text-white p-3 rounded-full shadow-lg transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Media Container */}
            <div className="relative max-w-7xl max-h-[90vh] w-full mx-4 flex items-center justify-center">
                {isCurrentVideo ? (
                    <video
                        ref={videoRef}
                        src={currentMedia}
                        controls
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                    >
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={currentMedia}
                        alt={`Media ${currentIndex + 1}`}
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                    />
                )}
            </div>

            {/* Navigation Arrows */}
            {mediaItems.length > 1 && (
                <>
                    <button
                        onClick={() => onNavigate('prev')}
                        aria-label="Previous media"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-rose-600/80 hover:bg-rose-500 text-white p-4 rounded-full shadow-lg transition-colors"
                    >
                        <span className="text-3xl font-bold">‹</span>
                    </button>
                    <button
                        onClick={() => onNavigate('next')}
                        aria-label="Next media"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-rose-600/80 hover:bg-rose-500 text-white p-4 rounded-full shadow-lg transition-colors"
                    >
                        <span className="text-3xl font-bold">›</span>
                    </button>
                </>
            )}

            {/* Dot Indicators */}
            {mediaItems.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {mediaItems.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => onNavigate(i)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                i === currentIndex 
                                    ? 'bg-rose-500 shadow-md ring-2 ring-rose-300' 
                                    : 'bg-white/40 hover:bg-white/60 ring-1 ring-white/20'
                            }`}
                            aria-label={`Show media ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

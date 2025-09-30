"use client"
import React, { useState } from "react";

export default function ImageCarousel({ images = [] }) {
    const [imgIndex, setImgIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const nextImage = () => setImgIndex((i) => (i + 1) % images.length);
    const prevImage = () => setImgIndex((i) => (i - 1 + images.length) % images.length);

    return (
        <div className="relative w-full">
            <div className="w-full flex items-center justify-center overflow-hidden rounded-lg bg-slate-800">
                {/* use native img to respect intrinsic height; constrain with max-height so tall images shrink to fit */}
                <img src={images[imgIndex]} alt={`Step image ${imgIndex + 1}`} className="mx-auto w-auto max-h-56 sm:max-h-64 md:max-h-44 lg:max-h-56 object-contain" />
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
    );
}
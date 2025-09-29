"use client"
import React, { useState } from "react";

export default function ImageCarousel({ images }) {
    const [imgIndex, setImgIndex] = useState(0);
    
    const nextImage = () => {
        setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    const prevImage = () => {
        setImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    if (images.length === 0) {
        return (<></>);
    }

    return (
        <div className="relative flex-grow mb-3">
            <img src={images[imgIndex]} alt={`Image ${imgIndex + 1}`} className="w-full object-cover rounded" />
            {images.length > 1 && (
                <>
                    <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75">
                        ‹
                    </button>
                    <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75">
                        ›
                    </button>
                </>
            )}
        </div>
    );
}
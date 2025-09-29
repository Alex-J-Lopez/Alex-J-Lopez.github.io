"use client"
import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";

const StepCard = ({ index, step }) => {
    
    
    return (
        <article key={index} className="border rounded-lg p-4 bg-white dark:bg-[var(--accent)] shadow-sm flex flex-col">
            <h3 className="font-bold text-xl mb-2">{step.stepName}</h3>
            <ImageCarousel images={step.images} />
            <p className="text-sm leading-relaxed">{step.stepDescription}</p>
        </article>
    );
};

export default StepCard;
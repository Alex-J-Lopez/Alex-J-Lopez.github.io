"use client"
import React from "react";
import ImageCarousel from "./ImageCarousel";

const StepCard = ({ index, step, onOpenModal }) => {
    return (
        <article key={index} className="bg-white/5 hover:bg-white/6 transition-transform hover:-translate-y-1 transform rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div className="p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-bold text-lg text-slate-50">{step.stepName}</h3>
                    {typeof index === 'number' && (
                        <div className="text-xs text-white/70 bg-white/3 px-2 py-1 rounded-md">Step {index + 1}</div>
                    )}
                </div>

                <div className="mb-3">
                    <ImageCarousel images={step.images} onOpenModal={onOpenModal} />
                </div>

                <p className="text-sm text-slate-200 leading-relaxed">{step.stepDescription}</p>
            </div>
        </article>
    );
};

export default StepCard;
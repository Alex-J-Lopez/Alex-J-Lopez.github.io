import React from "react";

const StepCard = ({ index, step }) => {
    return (
        <article key={index} className="border rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm">
            <h3 className="font-bold text-xl mb-2">{step.stepName}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
                {step.images.map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt={`${step.stepName} image ${imgIndex + 1}`} className="w-full sm:w-1/2 object-cover rounded" />
                ))}
            </div>
            <p className="text-sm leading-relaxed">{step.stepDescription}</p>
        </article>
    );
};

export default StepCard;

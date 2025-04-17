"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    EnhancedDialog as Dialog,
    EnhancedDialogContent as DialogContent,
    EnhancedDialogHeader as DialogHeader,
    EnhancedDialogTitle as DialogTitle,
    EnhancedDialogTrigger as DialogTrigger,
} from "@/components/ui/enhanced-dialog";

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    type: string;
    description: string;
}

const experienceData: ExperienceItem[] = [
    {
        title: "Co-Founder & CTO, Treeneq",
        company: "Apple",
        period: "2024 - On site",
        type: "Full time",
        description:
            "Leading product strategy and execution for Apple Design team. Collaborating with cross-functional teams to deliver exceptional user experiences.",
    },
    {
        title: "Full Stack Blockchain Dev",
        company: "Apple",
        period: "2023 - Hybrid",
        type: "Part time",
        description:
            "Designed user interfaces and experiences for Apple products. Worked closely with engineering and marketing teams to ensure design excellence.",
    },
    {
        title: "Blockchain Developer",
        company: "Apple",
        period: "2022 - Remote",
        type: "Full time",
        description:
            "Created user interfaces and experiences for Apple applications. Conducted user research and usability testing to inform design decisions.",
    },
];

const Experience = () => {
    return (
        <Card className="card-hover square-card">
            <CardHeader>
                <CardTitle>
                    <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-medium shadow-sm">
                        My Experience
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="mt-1 relative">
                    <div className="absolute top-0 left-0 h-12 w-full bg-gradient-to-b from-[#f9f9f7] to-transparent z-10 pointer-events-none"></div>
                    <div className="timeline-line"></div>
                    {experienceData.map((item, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <div
                                    className={`timeline-item cursor-pointer ${
                                        index === 3
                                            ? "before:bg-gray-300 before:opacity-30"
                                            : "before:bg-black"
                                    }`}
                                >
                                    <h3
                                        className={`font-medium ${
                                            index === 3
                                                ? "text-gray-300 opacity-50"
                                                : "text-black"
                                        }`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {item.period} · {item.type}
                                    </p>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>{item.title}</DialogTitle>
                                </DialogHeader>
                                <div className="mt-4 space-y-4">
                                    <p className="text-sm text-gray-500">
                                        {item.period} • {item.type}
                                    </p>
                                    <p className="mt-4">{item.description}</p>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default Experience;

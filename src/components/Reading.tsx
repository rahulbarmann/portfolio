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

interface Achievement {
    title: string;
    organization: string;
    imageUrl: string;
    date: string;
    description: string;
}

const achievements: Achievement[] = [
    {
        title: "Design Excellence Award",
        organization: "UX Design Association",
        imageUrl: "https://picsum.photos/id/36/300/300",
        date: "2023",
        description:
            "Recognized for outstanding contribution to user experience design in the e-commerce sector, demonstrating exceptional creativity and innovation in solving complex user problems.",
    },
    {
        title: "Tech Innovator of the Year",
        organization: "TechCrunch",
        imageUrl: "https://picsum.photos/id/48/300/300",
        date: "2022",
        description:
            "Selected as one of the top innovators in technology for pioneering work in AI-driven interface design and accessibility improvements.",
    },
    {
        title: "Google Developer Certification",
        organization: "Google",
        imageUrl: "https://picsum.photos/id/96/300/300",
        date: "2021",
        description:
            "Advanced certification in mobile application development and progressive web applications, with specialization in performance optimization.",
    },
];

const Accomplishments = () => {
    const featuredAchievement = achievements[0];

    return (
        <Card className="card-hover square-card">
            <CardHeader>
                <CardTitle>
                    <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-medium shadow-sm">
                        My Accomplishments
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="cursor-pointer mt-2">
                            <div className="flex justify-center">
                                <div className="w-28 h-28 rounded-md overflow-hidden bg-gray-200 shadow-md">
                                    <img
                                        src={featuredAchievement.imageUrl}
                                        alt={featuredAchievement.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="font-medium">
                                    {featuredAchievement.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {featuredAchievement.organization} •{" "}
                                    {featuredAchievement.date}
                                </p>
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>My Accomplishments</DialogTitle>
                        </DialogHeader>
                        <div className="mt-6 space-y-6">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 pb-4 border-b last:border-0 last:pb-0"
                                >
                                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0 shadow-md border-2 border-white">
                                        <img
                                            src={achievement.imageUrl}
                                            alt={achievement.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {achievement.organization} •{" "}
                                            {achievement.date}
                                        </p>
                                        <p className="text-xs text-gray-600 mt-1">
                                            {achievement.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
};

export default Accomplishments;

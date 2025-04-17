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

interface Project {
    id: number;
    title: string;
    tech: string;
    imageUrl: string;
    description: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "omni.predict",
        tech: "Next.js, TypeScript",
        imageUrl: "https://picsum.photos/id/0/300/300",
        description:
            "A decentralized cross-chain prediction market platform that allows users to participate in forecasts across multiple blockchains using Circle CCTP and Chainlink Functions for market resolutions. The platform ensures user privacy through end-to-end encrypted inputs using Fully Homomorphic Encryption (FHE), enabling private, secure predictions without revealing user choices—even to the network itself.",
    },
    {
        id: 2,
        title: "CookFi",
        tech: "React, D3.js",
        imageUrl: "https://picsum.photos/id/180/300/300",
        description:
            "An Autonomous Trading AI agent using Eliza OS as the Agent Framework, Cookie.fun for external data about market sentiment, Moralis for token informations, and Lit Protocol for agent transactions and attestations.",
    },
    {
        id: 3,
        title: "Bodhi",
        tech: "Python, TensorFlow",
        imageUrl: "https://picsum.photos/id/24/300/300",
        description:
            "An onchain AI economy, currenty tokenizing AI interactions on the Blockchain",
    },
    {
        id: 4,
        title: "Spell Forge",
        tech: "Python, TensorFlow",
        imageUrl: "https://picsum.photos/id/24/300/300",
        description:
            "A PvP game dueling platform.Built our own Micro Rollup using Stackr Labs MRU SDK, also integrated websokets for the game environement of PvP duels",
    },
    {
        id: 5,
        title: "Hubble",
        tech: "Python, TensorFlow",
        imageUrl: "https://picsum.photos/id/24/300/300",
        description:
            "A social AI content hub for people to generate, share and collaborate using our own in-house Studio connected with all the popular LLMs out there",
    },
];

const Projects = () => {
    return (
        <Card className="card-hover square-card">
            <CardHeader>
                <CardTitle>
                    <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-medium shadow-sm">
                        My Projects
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="cursor-pointer">
                            <div className="flex gap-2 mt-2 justify-center relative">
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className={`w-24 h-24 rounded-xl overflow-hidden bg-gray-200 shadow-md ${
                                            index === 1
                                                ? "transform -translate-y-2 rotate-3"
                                                : index === 0
                                                ? "transform -rotate-3"
                                                : "transform translate-y-1"
                                        }`}
                                        style={{
                                            zIndex: 3 - index,
                                            position: "relative",
                                            left:
                                                index === 0
                                                    ? "-5px"
                                                    : index === 2
                                                    ? "5px"
                                                    : "0px",
                                        }}
                                    >
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="font-medium">
                                    Featured Projects
                                </h3>
                                <p className="text-sm text-portfolio-orange flex items-center justify-center gap-1 mt-1">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3 3h7v7H3V3z"
                                            stroke="#ff6b00"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 3h7v7h-7V3z"
                                            stroke="#ff6b00"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 14h7v7h-7v-7z"
                                            stroke="#ff6b00"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M3 14h7v7H3v-7z"
                                            stroke="#ff6b00"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    View All Projects
                                </p>
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>My Projects</DialogTitle>
                        </DialogHeader>
                        <div className="mt-6 grid grid-cols-1 gap-6">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200 shadow-md border-2 border-white">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {project.tech}
                                        </p>
                                        <p className="text-xs text-gray-600 mt-1">
                                            {project.description}
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

export default Projects;

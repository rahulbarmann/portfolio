"use client";

import React from "react";
import Image from "next/image";
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
    imageUrl: string;
    description: string;
    githubUrl?: string;
    liveUrl?: string;
    techStack?: {
        frontend?: string[];
        backend?: string[];
        database?: string[];
        devops?: string[];
        other?: string[];
    };
    tech?: string; // For backward compatibility
}

const projects: Project[] = [
    {
        id: 1,
        title: "omni.predict",
        imageUrl: "/project1.jpg",
        description:
            "Privacy-preserving decentralized cross‑chain prediction market leveraging Circle CCTP, Chainlink Functions, and FHE for confidential forecasts and automated resolution.",
        githubUrl: "https://github.com/username/omni-predict",
        liveUrl: "https://omni-predict.vercel.app",
        techStack: {
            frontend: ["Next.js", "TypeScript", "TailwindCSS", "shadcn/ui"],
            backend: ["Node.js", "Express", "Solidity"],
            database: ["MongoDB", "IPFS"],
            devops: ["Vercel", "GitHub Actions"],
            other: ["Circle CCTP", "FHE", "Chainlink Functions"],
        },
    },
    {
        id: 2,
        title: "CookFi",
        imageUrl: "/project2.jpg",
        description:
            "An autonomous trading AI built on Eliza OS, leveraging Cookie.fun for sentiment data, Moralis for token info, and Lit Protocol for secure transactions and attestations.",
        githubUrl: "https://github.com/username/cookfi",
        liveUrl: "https://cookfi.vercel.app",
        techStack: {
            frontend: ["React", "D3.js", "Chakra UI"],
            backend: ["Node.js", "Express"],
            database: ["PostgreSQL"],
            devops: ["AWS"],
            other: ["Moralis", "Lit Protocol", "Eliza OS"],
        },
    },
    {
        id: 3,
        title: "Bodhi",
        imageUrl: "/project3.jpg",
        description:
            "An onchain AI economy, currenty tokenizing AI interactions on the Blockchain",
        githubUrl: "https://github.com/username/bodhi",
        liveUrl: "https://bodhi-ai.vercel.app",
        techStack: {
            frontend: ["Vue.js", "Nuxt.js"],
            backend: ["Python", "FastAPI", "TensorFlow"],
            database: ["MongoDB"],
            devops: ["Google Cloud"],
            other: ["Blockchain", "Smart Contracts"],
        },
    },
    {
        id: 4,
        title: "Spell Forge",
        imageUrl: "/project1.jpg",
        description:
            "A PvP game dueling platform. Built our own Micro Rollup using Stackr Labs MRU SDK, also integrated websockets for the game environment of PvP duels",
        githubUrl: "https://github.com/username/spell-forge",
        liveUrl: "https://spellforge.game",
        techStack: {
            frontend: ["React", "Three.js", "WebGL"],
            backend: ["Node.js", "WebSockets"],
            database: ["DynamoDB"],
            devops: ["AWS GameLift"],
            other: ["Stackr Labs MRU SDK", "Game Physics"],
        },
    },
    {
        id: 5,
        title: "Hubble",
        imageUrl: "/project2.jpg",
        description:
            "A social AI content hub for people to generate, share and collaborate using our own in-house Studio connected with all the popular LLMs out there",
        githubUrl: "https://github.com/username/hubble",
        liveUrl: "https://hubble-ai.app",
        techStack: {
            frontend: ["Next.js", "TypeScript", "Radix UI"],
            backend: ["Python", "FastAPI", "LangChain"],
            database: ["Supabase", "Vector DB"],
            devops: ["Vercel"],
            other: ["OpenAI", "Anthropic", "Mistral AI"],
        },
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] =
        React.useState<Project | null>(null);

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
                                {projects.slice(0, 3).map((project, index) => (
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
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            width={96}
                                            height={96}
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
                    <DialogContent className="sm:max-w-3xl">
                        <DialogHeader>
                            <DialogTitle>My Projects</DialogTitle>
                        </DialogHeader>

                        {selectedProject ? (
                            <div className="mt-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="text-sm text-gray-500 flex items-center gap-1 hover:text-black transition-colors"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19 12H5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 19l-7-7 7-7"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Back to all projects
                                    </button>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-md border-2 border-white">
                                            <Image
                                                src={selectedProject.imageUrl}
                                                alt={selectedProject.title}
                                                className="w-full h-full object-cover"
                                                width={300}
                                                height={300}
                                            />
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <h2 className="text-2xl font-bold mb-2">
                                                {selectedProject.title}
                                            </h2>
                                            <p className="text-gray-700 mb-4">
                                                {selectedProject.description}
                                            </p>

                                            <div className="flex gap-3 mb-6">
                                                {selectedProject.githubUrl && (
                                                    <a
                                                        href={
                                                            selectedProject.githubUrl
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-4 py-2 bg-black text-white rounded-full text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors"
                                                    >
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        GitHub
                                                    </a>
                                                )}
                                                {selectedProject.liveUrl && (
                                                    <a
                                                        href={
                                                            selectedProject.liveUrl
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-full text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors"
                                                    >
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M15 3h6v6"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M10 14L21 3"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {selectedProject.techStack && (
                                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                            <h3 className="text-lg font-semibold mb-4">
                                                Tech Stack
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {selectedProject.techStack
                                                    .frontend && (
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-500 mb-2">
                                                            Frontend
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {selectedProject.techStack.frontend.map(
                                                                (tech) => (
                                                                    <span
                                                                        key={
                                                                            tech
                                                                        }
                                                                        className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                                                                    >
                                                                        {tech}
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                {selectedProject.techStack
                                                    .backend && (
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-500 mb-2">
                                                            Backend
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {selectedProject.techStack.backend.map(
                                                                (tech) => (
                                                                    <span
                                                                        key={
                                                                            tech
                                                                        }
                                                                        className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                                                                    >
                                                                        {tech}
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                {selectedProject.techStack
                                                    .database && (
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-500 mb-2">
                                                            Database
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {selectedProject.techStack.database.map(
                                                                (tech) => (
                                                                    <span
                                                                        key={
                                                                            tech
                                                                        }
                                                                        className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                                                                    >
                                                                        {tech}
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                {selectedProject.techStack
                                                    .devops && (
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-500 mb-2">
                                                            DevOps
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {selectedProject.techStack.devops.map(
                                                                (tech) => (
                                                                    <span
                                                                        key={
                                                                            tech
                                                                        }
                                                                        className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                                                                    >
                                                                        {tech}
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {selectedProject.techStack
                                                .other && (
                                                <div className="mt-6">
                                                    <h4 className="text-sm font-medium text-gray-500 mb-2">
                                                        Other Technologies
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {selectedProject.techStack.other.map(
                                                            (tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {selectedProject.tech &&
                                        !selectedProject.techStack && (
                                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                                <h3 className="text-lg font-semibold mb-4">
                                                    Tech Stack
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedProject.tech
                                                        .split(", ")
                                                        .map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                </div>
                                            </div>
                                        )}
                                </div>
                            </div>
                        ) : (
                            <div className="mt-6 grid grid-cols-1 gap-6">
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all cursor-pointer border border-transparent hover:border-gray-100"
                                        onClick={() =>
                                            setSelectedProject(project)
                                        }
                                    >
                                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200 shadow-md border-2 border-white flex-shrink-0">
                                            <Image
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mb-2">
                                                {project.tech &&
                                                !project.techStack ? (
                                                    project.tech
                                                ) : project.techStack ? (
                                                    <>
                                                        {project.techStack.frontend
                                                            ?.slice(0, 2)
                                                            .join(", ")}
                                                        {project.techStack
                                                            .backend &&
                                                        project.techStack
                                                            .frontend?.length
                                                            ? ", "
                                                            : ""}
                                                        {project.techStack.backend
                                                            ?.slice(0, 1)
                                                            .join(", ")}
                                                        {(project.techStack
                                                            .frontend?.length ||
                                                            0) +
                                                            (project.techStack
                                                                .backend
                                                                ?.length || 0) >
                                                        3
                                                            ? "..."
                                                            : ""}
                                                    </>
                                                ) : (
                                                    "Various technologies"
                                                )}
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                {project.description.length >
                                                100
                                                    ? `${project.description.substring(
                                                          0,
                                                          100
                                                      )}...`
                                                    : project.description}
                                            </p>
                                        </div>
                                        <div className="ml-auto flex-shrink-0">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 18l6-6-6-6"
                                                    stroke="#d1d1d1"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
};

export default Projects;

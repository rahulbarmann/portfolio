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

interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: React.ReactNode;
    color: string;
}

const socialLinks: SocialLink[] = [
    {
        id: "github",
        name: "GitHub",
        url: "https://github.com/alexcarter",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
        ),
        color: "text-gray-800",
    },
    {
        id: "twitter",
        name: "Twitter",
        url: "https://twitter.com/alexcarter",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
        ),
        color: "text-blue-400",
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        url: "https://linkedin.com/in/alexcarter",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
        color: "text-blue-700",
    },
    {
        id: "dribbble",
        name: "Dribbble",
        url: "https://dribbble.com/alexcarter",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
            </svg>
        ),
        color: "text-pink-500",
    },
];

const Connect = () => {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>
                    <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-medium shadow-sm">
                        Connect with me
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="cursor-pointer mt-1">
                            <div className="grid grid-cols-2 gap-3">
                                {socialLinks.map((link) => (
                                    <div
                                        key={link.id}
                                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <div className={`${link.color}`}>
                                            {link.icon}
                                        </div>
                                        <span className="text-sm font-medium">
                                            {link.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Connect with me</DialogTitle>
                        </DialogHeader>
                        <div className="mt-6">
                            <p className="text-sm text-gray-600 mb-4">
                                Feel free to connect with me on any of these
                                platforms. I&apos;m always open to discussing
                                new projects, creative ideas, or opportunities
                                to be part of your vision.
                            </p>
                            <div className="space-y-5 mt-6">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-gray-100"
                                    >
                                        <div className={`${link.color}`}>
                                            {link.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-medium">
                                                {link.name}
                                            </h3>
                                            <p className="text-xs text-gray-500">
                                                {link.url}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
};

export default Connect;

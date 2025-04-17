"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="pt-8 pb-12 bg-background">
            <div className="container-center">
                <div className="flex flex-col items-start gap-8">
                    {/* Header with name and profile image */}
                    <div className="flex items-center gap-4">
                        <h1 className="text-5xl font-bold">Hi, I&apos;m</h1>
                        <div className="w-24 h-24 rounded-3xl overflow-hidden border-3 border-white shadow-md relative">
                            <Image
                                src="/3.jpg"
                                alt="Alex Carter"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <h1 className="text-5xl font-bold">Rahul Barman!</h1>
                    </div>

                    {/* Job title section */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-5xl text-gray-300 font-medium">
                                I&apos;m the
                            </span>
                            <span className="text-5xl font-medium">
                                Tech Lead
                            </span>
                            <span className="text-5xl text-gray-300 font-medium">
                                at
                            </span>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-5xl font-medium text-portfolio-orange">
                                Treenteq.
                            </span>
                            <div className="inline-flex items-center gap-2 rounded-full border-3 border-white bg-transparent px-4 py-2 shadow-sm mr-4">
                                <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                                <span className="text-sm font-medium">
                                    Open to work
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Call to action section */}
                    <div className="flex items-center gap-6 mt-4">
                        <Button
                            variant="default"
                            className="bg-black text-white rounded-full px-8 py-3 h-auto text-base font-medium"
                        >
                            Book a call
                        </Button>

                        <p className="text-gray-600 text-lg">
                            Feel free to explore my portfolio and reach out
                            <br />
                            —I&apos;d love to connect!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

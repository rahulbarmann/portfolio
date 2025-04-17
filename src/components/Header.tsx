"use client";

import React from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
    return (
        <header className="pt-6 pb-2 bg-[#f8f8f8]">
            <div className="container-center flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center">
                        <Image
                            src="/tri-round-thick.svg"
                            alt="Logo"
                            width={34}
                            height={34}
                            priority
                        />
                    </div>
                    <span className="w-2 h-2 rounded-full bg-portfolio-orange"></span>
                    <a
                        href="mailto:hey@alexcarter.com"
                        className="text-base font-medium text-gray-700 tracking-tight hover:underline transition-all"
                    >
                        itsrahulbarman1@gmail.com
                    </a>
                </div>

                <Sheet>
                    <SheetTrigger asChild>
                        <button className="p-2.5 rounded-full bg-white shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                            <Image
                                src="/menu-adjusted.svg"
                                alt="Menu"
                                width={24}
                                height={24}
                                priority
                            />
                        </button>
                    </SheetTrigger>
                    <SheetContent className="rounded-l-3xl border-l-0 shadow-lg">
                        <nav className="flex flex-col gap-4 mt-8">
                            <a href="#" className="text-xl font-medium">
                                Home
                            </a>
                            <a
                                href="#experience"
                                className="text-xl font-medium"
                            >
                                Experience
                            </a>
                            <a href="#work" className="text-xl font-medium">
                                How I Work
                            </a>
                            <a href="#contact" className="text-xl font-medium">
                                Contact
                            </a>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Header;

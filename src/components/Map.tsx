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

const Map = () => {
    return (
        <Card className="card-hover square-card">
            <CardHeader>
                <CardTitle>
                    <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-medium shadow-sm">
                        Map
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden">
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="cursor-pointer">
                            <div className="relative h-[180px] w-full bg-gray-200 overflow-hidden rounded-2xl">
                                <img
                                    src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-73.5673,45.5017,12,0/600x200?access_token=pk.eyJ1IjoiZXhhbXBsZXVzZXIiLCJhIjoiY2xnNXRweDl1MHVsNDNwbXk4NHljeGdvdyJ9.xOtBgGiJ-ygBgL8gknTfnw"
                                    alt="Map of Montreal"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 paper-texture bg-opacity-95">
                                    <h2 className="text-xl font-bold text-center tracking-[0.25em]">
                                        MONTREAL
                                    </h2>
                                    <p className="text-xs text-center text-gray-500 tracking-[0.15em]">
                                        CANADA
                                    </p>
                                    <p className="text-[10px] text-center text-gray-400 mt-1">
                                        45.5017° N, 73.5673° W
                                    </p>
                                </div>
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Montreal, Canada</DialogTitle>
                        </DialogHeader>
                        <div className="mt-6">
                            <div className="h-[300px] w-full bg-gray-200 overflow-hidden rounded-2xl shadow-md border-2 border-white">
                                <img
                                    src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-73.5673,45.5017,12,0/600x300?access_token=pk.eyJ1IjoiZXhhbXBsZXVzZXIiLCJhIjoiY2xnNXRweDl1MHVsNDNwbXk4NHljeGdvdyJ9.xOtBgGiJ-ygBgL8gknTfnw"
                                    alt="Map of Montreal"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-6">
                                <p>
                                    Montreal is a vibrant city in Quebec,
                                    Canada, known for its rich history, diverse
                                    culture, and beautiful architecture.
                                    It&apos;s where I currently live and work.
                                </p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
};

export default Map;

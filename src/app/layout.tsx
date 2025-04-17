import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Alex Carter | Product Lead",
    description: "Portfolio of Alex Carter, Product Lead at Apple Design",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-[#f8f8f8]">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8f8f8]`}
            >
                {children}
            </body>
        </html>
    );
}

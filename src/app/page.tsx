import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/MusicPlaylist";
import Accomplishments from "@/components/Reading";
import Map from "@/components/Map";
import Connect from "@/components/WorkProcess";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#f8f8f8]">
            <Header />

            <main>
                <Hero />

                <section className="py-6 bg-[#f8f8f8]" id="cards">
                    <div className="container-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <Experience />
                            <Projects />
                            <Accomplishments />
                        </div>
                    </div>
                </section>

                <section className="py-3 bg-[#f8f8f8]">
                    <div className="container-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="md:col-span-1">
                                <Map />
                            </div>
                            <div className="md:col-span-2">
                                <Connect />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-8 mt-12 border-t bg-[#f8f8f8]">
                <div className="container-center">
                    <div className="text-center text-sm text-gray-500">
                        <p>
                            © {new Date().getFullYear()} Alex Carter. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

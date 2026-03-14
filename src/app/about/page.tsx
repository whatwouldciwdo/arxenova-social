import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutStats from "@/components/AboutStats";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "About Us | Arxenova-Social — Our Story & Mission",
    description: "Learn about Arxenova-Social, a creative digital agency passionate about building brands, crafting compelling content, and delivering measurable social media results.",
    keywords: ["about Arxenova", "social media agency team", "creative agency story", "digital marketing Indonesia", "brand strategy agency"],
    openGraph: {
        title: "About Us | Arxenova-Social — Our Story & Mission",
        description: "Meet the creative minds behind Arxenova-Social and discover our mission to drive brand growth through bold digital strategies.",
        type: "website",
    },
};

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <AboutHero />
            <AboutStats />
            <Testimonial />
            <Team />
            <Contact />
            <Footer />
        </main>
    );
}

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
    alternates: {
        canonical: "https://arxenovasocial.com/about",
    },
    openGraph: {
        title: "About Us | Arxenova-Social — Our Story & Mission",
        description: "Meet the creative minds behind Arxenova-Social and discover our mission to drive brand growth through bold digital strategies.",
        type: "website",
        url: "https://arxenovasocial.com/about",
        images: [
            {
                url: "https://arxenovasocial.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "About Arxenova-Social — Creative Social Media Agency",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Arxenova-Social — Our Story & Mission",
        description: "Meet the creative minds behind Arxenova-Social and discover our mission to drive brand growth through bold digital strategies.",
        images: ["https://arxenovasocial.com/og-image.png"],
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

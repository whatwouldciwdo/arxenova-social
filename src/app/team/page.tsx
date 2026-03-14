import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TeamGrid from "@/components/TeamGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Our Team | Arxenova-Social — The Creatives Behind the Work",
    description: "Meet the talented strategists, designers, and developers at Arxenova-Social who are dedicated to growing your brand and maximizing your digital impact.",
    keywords: ["Arxenova team", "social media experts", "creative team", "digital marketing professionals", "agency members"],
    openGraph: {
        title: "Our Team | Arxenova-Social — The Creatives Behind the Work",
        description: "Get to know the passionate team at Arxenova-Social — where creativity meets data-driven strategy.",
        type: "website",
    },
};

export default function TeamPage() {
    return (
        <main>
            <Navbar />
            <TeamGrid />
            <Contact />
            <Footer />
        </main>
    );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TeamGrid from "@/components/TeamGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Our Team | Arxenova-Social — The Creatives Behind the Work",
    description: "Meet the talented strategists, designers, and developers at Arxenova-Social who are dedicated to growing your brand and maximizing your digital impact.",
    keywords: ["Arxenova team", "social media experts", "creative team", "digital marketing professionals", "agency members"],
    alternates: {
        canonical: "https://arxenovasocial.com/team",
    },
    openGraph: {
        title: "Our Team | Arxenova-Social — The Creatives Behind the Work",
        description: "Get to know the passionate team at Arxenova-Social — where creativity meets data-driven strategy.",
        type: "website",
        url: "https://arxenovasocial.com/team",
        images: [
            {
                url: "https://arxenovasocial.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Arxenova-Social Team — The Creatives Behind the Work",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Team | Arxenova-Social — The Creatives Behind the Work",
        description: "Get to know the passionate team at Arxenova-Social — where creativity meets data-driven strategy.",
        images: ["https://arxenovasocial.com/og-image.png"],
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

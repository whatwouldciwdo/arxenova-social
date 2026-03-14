import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogGrid from "@/components/BlogGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Blog | Arxenova-Social — Digital Marketing & Design Insights",
    description: "Explore Arxenova-Social's blog for expert insights on digital marketing, social media strategy, SEO, branding, UI/UX design, and creative content production.",
    keywords: ["digital marketing blog", "social media tips", "SEO guide", "branding insights", "content strategy", "Arxenova blog"],
    openGraph: {
        title: "Blog | Arxenova-Social — Digital Marketing & Design Insights",
        description: "Expert articles on social media strategy, SEO, branding, and digital growth from the Arxenova-Social team.",
        type: "website",
    },
};

export default function BlogPage() {
    return (
        <main>
            <Navbar />
            <BlogGrid />
            <Contact />
            <Footer />
        </main>
    );
}

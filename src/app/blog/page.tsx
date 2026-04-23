import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogGrid from "@/components/BlogGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Blog | Arxenova-Social — Digital Marketing & Design Insights",
    description: "Explore Arxenova-Social's blog for expert insights on digital marketing, social media strategy, SEO, branding, UI/UX design, and creative content production.",
    keywords: ["digital marketing blog", "social media tips", "SEO guide", "branding insights", "content strategy", "Arxenova blog"],
    alternates: {
        canonical: "https://arxenovasocial.com/blog",
    },
    openGraph: {
        title: "Blog | Arxenova-Social — Digital Marketing & Design Insights",
        description: "Expert articles on social media strategy, SEO, branding, and digital growth from the Arxenova-Social team.",
        type: "website",
        url: "https://arxenovasocial.com/blog",
        images: [
            {
                url: "https://arxenovasocial.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Arxenova-Social Blog — Digital Marketing & Design Insights",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Arxenova-Social — Digital Marketing & Design Insights",
        description: "Expert articles on social media strategy, SEO, branding, and digital growth from the Arxenova-Social team.",
        images: ["https://arxenovasocial.com/og-image.png"],
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

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Contact Us | Arxenova-Social — Let's Work Together",
    description: "Get in touch with Arxenova-Social. Whether you need a new brand identity, social media strategy, or a stunning website — our team is ready to bring your vision to life.",
    keywords: ["contact Arxenova", "hire social media agency", "digital marketing consultation", "get in touch", "agency contact"],
    alternates: {
        canonical: "https://arxenovasocial.com/contact",
    },
    openGraph: {
        title: "Contact Us | Arxenova-Social — Let's Work Together",
        description: "Ready to grow your brand? Contact Arxenova-Social today and let's start crafting your digital success story.",
        type: "website",
        url: "https://arxenovasocial.com/contact",
        images: [
            {
                url: "https://arxenovasocial.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Contact Arxenova-Social — Let's Work Together",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | Arxenova-Social — Let's Work Together",
        description: "Ready to grow your brand? Contact Arxenova-Social today and let's start crafting your digital success story.",
        images: ["https://arxenovasocial.com/og-image.png"],
    },
};

export default function ContactUsPage() {
    return (
        <main>
            <Navbar />
            <ContactHero />
            <ContactForm />
            <Footer />
        </main>
    );
}

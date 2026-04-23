import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TermsContent from "@/components/TermsContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Terms & Conditions | Arxenova-Social",
    description: "Read the Terms and Conditions governing your use of Arxenova-Social's website, services, and digital products. Understand your rights and responsibilities.",
    keywords: ["terms and conditions", "Arxenova legal", "service agreement", "website terms", "privacy policy"],
    alternates: {
        canonical: "https://arxenovasocial.com/terms",
    },
    openGraph: {
        title: "Terms & Conditions | Arxenova-Social",
        description: "Review the Terms & Conditions for using Arxenova-Social's website and services.",
        type: "website",
        url: "https://arxenovasocial.com/terms",
        images: [
            {
                url: "https://arxenovasocial.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Arxenova-Social Terms & Conditions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms & Conditions | Arxenova-Social",
        description: "Review the Terms & Conditions for using Arxenova-Social's website and services.",
        images: ["https://arxenovasocial.com/og-image.png"],
    },
};

export default function TermsPage() {
    return (
        <main>
            <Navbar />
            <TermsContent />
            <Footer />
        </main>
    );
}

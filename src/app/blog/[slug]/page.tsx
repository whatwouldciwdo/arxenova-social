import type { Metadata } from "next";
import { blogMeta } from "./blogMeta";
import BlogDetailClient from "./BlogDetailClient";

export async function generateStaticParams() {
    return Object.keys(blogMeta).map((slug) => ({ slug }));
}

const keywordMap: Record<string, string[]> = {
    "jasa-website-cilegon-serang-banten": [
        "jasa website Cilegon", "jasa pembuatan website Serang", "jasa website Banten",
        "website company profile", "digital agency Cilegon", "jasa website profesional Banten",
        "pembuatan website murah Banten", "Arxenova-Social"
    ],
    "digital-marketing-cilegon-serang-banten": [
        "jasa digital marketing Cilegon", "digital marketing Serang Banten",
        "agency digital marketing Banten", "SEO lokal Banten", "Google Ads Cilegon",
        "social media marketing Banten", "Arxenova-Social"
    ],
    "website-company-profile-profesional": [
        "website company profile profesional", "manfaat website company profile",
        "jasa website company profile", "website bisnis profesional Indonesia",
        "pentingnya website untuk bisnis", "Arxenova-Social"
    ],
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogMeta[slug];

    if (!post) {
        return {
            title: "Blog Post Not Found | Arxenova-Social",
            description: "This blog post could not be found.",
        };
    }

    const keywords = keywordMap[slug] ?? ["Arxenova blog", post.title, "digital marketing", "social media", "SEO"];

    return {
        title: `${post.title} | Arxenova-Social Blog`,
        description: post.description,
        keywords,
        alternates: {
            canonical: `https://arxenovasocial.com/blog/${slug}`,
        },
        openGraph: {
            title: `${post.title} | Arxenova-Social Blog`,
            description: post.description,
            type: "article",
            url: `https://arxenovasocial.com/blog/${slug}`,
            images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${post.title} | Arxenova-Social Blog`,
            description: post.description,
            images: [post.heroImage || "https://arxenovasocial.com/og-image.png"],
        },
    };
}

export default function BlogDetailPage() {
    return <BlogDetailClient />;
}

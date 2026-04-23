import type { Metadata } from "next";
import BlogDetailClient, { blogData } from "./BlogDetailClient";

export async function generateStaticParams() {
    return Object.keys(blogData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogData[slug as keyof typeof blogData];

    if (!post) {
        return {
            title: "Blog Post Not Found | Arxenova-Social",
            description: "This blog post could not be found.",
        };
    }

    return {
        title: `${post.title} | Arxenova-Social Blog`,
        description: post.description,
        keywords: ["Arxenova blog", post.title, "digital marketing", "social media", "SEO"],
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

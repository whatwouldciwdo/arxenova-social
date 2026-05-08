import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://arxenovasocial.com";

    const blogSlugs = [
        "jasa-website-cilegon-serang-banten",
        "digital-marketing-cilegon-serang-banten",
        "website-company-profile-profesional",
        "ultimate-guide-modern-seo",
        "how-to-create-svg-ready-icon-symbols-in-sketch",
    ];

    const portfolioSlugs = [
        "otobi-auto-detailing",
        "berdikari-raya-services",
        "putra-jayantara-ananta",
        "pln-indonesia-power",
    ];

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/team`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ];

    const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const portfolioPages: MetadataRoute.Sitemap = portfolioSlugs.map((slug) => ({
        url: `${baseUrl}/portfolio/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...blogPages, ...portfolioPages];
}

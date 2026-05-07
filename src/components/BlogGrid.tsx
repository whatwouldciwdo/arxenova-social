"use client";

import Link from "next/link";
import "./BlogGrid.css";

const blogPosts = [
    {
        id: 1,
        title: "Jasa Pembuatan Website Profesional di Cilegon, Serang & Banten — Panduan Lengkap 2025",
        slug: "jasa-website-cilegon-serang-banten",
        date: "Mei 7, 2025",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 2,
        title: "Jasa Digital Marketing Terbaik di Cilegon, Serang & Banten: Strategi Efektif untuk Bisnis Lokal 2025",
        slug: "digital-marketing-cilegon-serang-banten",
        date: "Mei 7, 2025",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 3,
        title: "5 Alasan Bisnis Anda Wajib Punya Website Company Profile Profesional di 2025",
        slug: "website-company-profile-profesional",
        date: "Mei 7, 2025",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 4,
        title: "The Ultimate Guide to Modern SEO and Web Growth",
        slug: "ultimate-guide-modern-seo",
        date: "March 13, 2026",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 5,
        title: "How to create SVG-ready icon symbols in Sketch",
        slug: "how-to-create-svg-ready-icon-symbols-in-sketch",
        date: "March 13, 2026",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200"
    }
];


export default function BlogGrid() {
    return (
        <section className="blog-page-grid section">
            <div className="container">

                
                <div className="blog-page__header">
                    <div className="blog-page__title-col">
                        <h1>Blog</h1>
                    </div>
                    <div className="blog-page__desc-col">
                        <p>
                            Latest articles and resources curated by<br />our community
                        </p>
                    </div>
                </div>

                
                <div className="blog-page__posts">
                    {blogPosts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.id} className="blog-page__post-card">
                            <article>
                                <div 
                                    className="blog-page__post-image" 
                                    style={{ backgroundImage: `url(${post.image})` }}
                                >
                                    
                                </div>
                                <div className="blog-page__post-info">
                                    <time className="blog-page__post-date">{post.date}</time>
                                    <h2>{post.title}</h2>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                
                <div className="blog-page__pagination">
                    <button className="blog-page__next-btn">Next page</button>
                </div>

            </div>
        </section>
    );
}

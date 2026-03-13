"use client";

import Link from "next/link";
import "./BlogGrid.css";

const blogPosts = [
    {
        id: 1,
        title: "How to create SVG-ready icon symbols in Sketch",
        slug: "how-to-create-svg-ready-icon-symbols-in-sketch",
        date: "March 13, 2026",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: 2,
        title: "The Ultimate Guide to Modern SEO and Web Growth",
        slug: "ultimate-guide-modern-seo",
        date: "March 13, 2026",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
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

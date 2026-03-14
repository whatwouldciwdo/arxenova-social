"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./BlogDetail.css";


export const blogData = {
    "how-to-create-svg-ready-icon-symbols-in-sketch": {
        title: "How to create SVG-ready icon symbols in Sketch",
        date: "Mar 13, 2026",
        author: "Arxenova-Social",
        heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
        description: "Learn how to design and export clean, scalable SVG icon symbols in Sketch. A practical guide for UI/UX designers and developers.",
        content: (
            <>
                <div className="blog-detail__content-split">
                    <div className="content-col">
                        <p>
                            Arxenova-Social, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
                        </p>
                        <p>
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.
                        </p>
                    </div>
                    <div className="content-col">
                        <p>
                            Arxenova-Social, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
                        </p>
                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.
                        </p>
                    </div>
                </div>

                <div className="blog-detail__inline-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200')" }}></div>

                <div className="blog-detail__content-single">
                    <h2>Keep your everyday on trend</h2>
                    <p>
                        Arxenova-Social, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more
                        capable. Podcasting operational — change management inside of workflows. Completely synergize.
                    </p>
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a
                        complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of
                        human happiness. No one rejects, dislikes, or avoids pleasure itself
                    </p>
                </div>

                <div className="blog-detail__quote-block">
                    <svg className="quote-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                    </svg>
                    <blockquote>
                        Arxenova-Social, everyone in my team works towards the samegoal. This enabled<br />
                        our teams to ship new ideas and feel more capable. Podcasting<br />
                        operational
                    </blockquote>
                    <cite>— Yuka Anta</cite>
                </div>

                <div className="blog-detail__content-single mb-large">
                    <p>
                        Arxenova-Social, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more
                        capable. Podcasting operational — change management inside of workflows. Completely synergize.
                    </p>
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a
                        complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of
                        human happiness. No one rejects, dislikes, or avoids pleasure itself
                    </p>
                </div>
            </>
        )
    },
    "ultimate-guide-modern-seo": {
        title: "The Ultimate Guide to Modern SEO and Web Growth",
        date: "Mar 13, 2026",
        author: "Arxenova-Social",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        description: "A comprehensive guide to mastering modern SEO — covering Core Web Vitals, technical SEO, content strategy, and data-driven growth tactics.",
        content: (
            <>
                <div className="blog-detail__content-split">
                    <div className="content-col">
                        <p>
                            In today's hyper-competitive digital landscape, relying solely on beautiful web design is no longer enough to guarantee business success. The foundation of sustainable digital growth lies in mastering Search Engine Optimization (SEO). At Arxenova-Social, we integrate SEO into the very core of our web development cycle, ensuring that every site we build not only looks stunning but also ranks prominently.
                        </p>
                        <p>
                            Modern SEO has evolved far beyond basic keyword stuffing. Search engines now prioritize user experience, performance metrics (Core Web Vitals), and the semantic relevance of your content. Understanding the intent behind search queries is critical to matching your audience with the solutions they desperately seek.
                        </p>
                    </div>
                    <div className="content-col">
                        <p>
                            Technical SEO forms the backbone of any successful strategy. This includes optimizing site architecture, ensuring mobile-responsiveness, managing crawl budgets, and implementing structured data (Schema markup). A beautiful website must be highly accessible to search engine crawlers just as much as human eyes.
                        </p>
                        <p>
                            Furthermore, content remains king. By producing high-quality, authoritative, and engaging content that naturally incorporates primary and secondary keywords, brands can establish sustained thought leadership. Paired with a robust backlink strategy and local SEO optimization, businesses can dominate their digital niche.
                        </p>
                    </div>
                </div>

                <div className="blog-detail__inline-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200')" }}></div>

                <div className="blog-detail__content-single">
                    <h2>Bridging the gap between Design and Discoverability</h2>
                    <p>
                        We often tell our clients that web design and SEO are two sides of the same coin. A site that loads quickly and is easy to navigate inherently provides a better user experience—a metric that search algorithms reward heavily. Optimizing large media files, lazy-loading off-screen assets, and prioritizing above-the-fold content rendering are all critical steps.
                    </p>
                    <p>
                        Moreover, continuous analytics tracking and A/B testing form the iterative loop of growth. SEO is not a one-time set-and-forget task; it is a continuously evolving strategy. By consistently refining your approach based on data-driven insights from tools like Google Search Console and Analytics, you can adapt to algorithmic changes and stay ahead of the curve.
                    </p>
                </div>

                <div className="blog-detail__quote-block">
                    <svg className="quote-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                    </svg>
                    <blockquote>
                        "Good SEO work only gets better over time. It's only search engine tricks that need to keep changing when the ranking algorithms change."
                    </blockquote>
                    <cite>— Jill Whalen</cite>
                </div>

                <div className="blog-detail__content-single mb-large">
                    <p>
                        Don't let your beautiful website remain a hidden gem. If you're ready to unlock the true potential of your digital presence through data-driven SEO strategies, reach out to our team at Arxenova-Social. Let's build a foundation that scales with your ambition.
                    </p>
                </div>
            </>
        )
    }
};

export default function BlogDetailClient() {
    const params = useParams();
    const slug = params?.slug as string || "how-to-create-svg-ready-icon-symbols-in-sketch";
    const post = blogData[slug as keyof typeof blogData] || blogData["how-to-create-svg-ready-icon-symbols-in-sketch"];

    return (
        <main className="blog-detail-page">
            <Navbar />

            <div className="blog-detail">
                <div className="container">

                    
                    <div className="blog-detail__top">
                        <Link href="/blog" className="blog-detail__back">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                            Back to blog
                        </Link>
                    </div>

                    
                    <header className="blog-detail__header">
                        <h1>{post.title}</h1>
                        <div className="blog-detail__meta">
                            <span>{post.date}</span>
                            <span className="dot">•</span>
                            <span>By {post.author}</span>
                        </div>
                    </header>

                    
                    <div className="blog-detail__hero-image" style={{ backgroundImage: `url('${post.heroImage}')` }}>
                    </div>

                    
                    {post.content}
                    
                    
                    <section className="blog-related">
                        <h2>You might also like...</h2>
                        <div className="blog-related__grid">
                            <Link href="/blog/ultimate-guide-modern-seo">
                                <article className="blog-related__card">
                                    <div className="blog-related__image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200')" }}></div>
                                    <div className="blog-related__info">
                                        <time>March 13, 2026</time>
                                        <h3>The Ultimate Guide to Modern SEO and Web Growth</h3>
                                    </div>
                                </article>
                            </Link>

                            <Link href="/blog/how-to-create-svg-ready-icon-symbols-in-sketch">
                                <article className="blog-related__card">
                                    <div className="blog-related__image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200')" }}></div>
                                    <div className="blog-related__info">
                                        <time>March 13, 2026</time>
                                        <h3>How to create SVG-ready icon symbols in Sketch</h3>
                                    </div>
                                </article>
                            </Link>
                        </div>
                    </section>

                </div>
            </div>

            <Footer />
        </main>
    );
}

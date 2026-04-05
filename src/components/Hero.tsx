"use client";

import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
    const pillsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const pills = pillsRef.current?.querySelectorAll(".hero__pill");
        if (!pills) return;

        pills.forEach((pill, index) => {
            (pill as HTMLElement).style.animationDelay = `${index * 0.1}s`;
        });
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero__content">
                <h1 className="hero__title">
                    Arxenova-Social
                    <br />
                    digital agency
                </h1>

                <div className="hero__pills" ref={pillsRef}>
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className="hero__pill" style={{ '--pill-index': i } as React.CSSProperties}>
                            <div className="hero__pill-inner">
                                <div className="hero__pill-image" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import "./not-found.css";

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const bg1X = useTransform(springX, [-0.5, 0.5], [60, -60]);
  const bg1Y = useTransform(springY, [-0.5, 0.5], [60, -60]);
  
  const bg2X = useTransform(springX, [-0.5, 0.5], [-50, 50]);
  const bg2Y = useTransform(springY, [-0.5, 0.5], [-50, 50]);

  const textX = useTransform(springX, [-0.5, 0.5], [-25, 25]);
  const textY = useTransform(springY, [-0.5, 0.5], [-25, 25]);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted) {
    return (
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title" style={{ visibility: "hidden" }}>404</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="not-found-container">
      <motion.div 
        className="not-found-orb not-found-orb-1"
        style={{ x: bg1X, y: bg1Y }}
      />
      <motion.div 
        className="not-found-orb not-found-orb-2"
        style={{ x: bg2X, y: bg2Y }}
      />

      <div className="not-found-content">
        <motion.div 
          className="glitch-wrapper"
          style={{ x: textX, y: textY }}
        >
          <h1 className="not-found-title">404</h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="not-found-text-container"
        >
          <h2 className="not-found-subtitle">Halaman Tidak Ditemukan</h2>
          <p className="not-found-desc">
            Sepertinya Anda tersesat di luar jangkauan radar kami. <br className="hidden md:block" />
            Halaman yang Anda cari mungkin telah dipindahkan atau tidak pernah ada.
          </p>
          
          <Link href="/" className="not-found-btn">
            <span className="not-found-btn-text">Kembali ke Beranda</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

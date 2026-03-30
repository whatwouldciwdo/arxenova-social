"use client";

import Link from "next/link";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/+6281285313084"
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-floating-btn"
      className="whatsapp-floating-btn"
      aria-label="Chat dengan kami di WhatsApp"
    >
      <span className="whatsapp-tooltip">Chat WhatsApp</span>

      {/* Official WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="whatsapp-icon"
        aria-hidden="true"
      >
        <path
          fill="#fff"
          d="M24 4C12.95 4 4 12.95 4 24c0 3.6.95 6.98 2.6 9.9L4 44l10.4-2.55A19.86 19.86 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4z"
        />
        <path
          fill="#25D366"
          d="M24 6.5C14.34 6.5 6.5 14.34 6.5 24c0 3.27.9 6.32 2.44 8.94L6.5 41.5l8.78-2.4A17.43 17.43 0 0 0 24 41.5c9.66 0 17.5-7.84 17.5-17.5S33.66 6.5 24 6.5z"
        />
        <path
          fill="#fff"
          d="M19.06 15.5c-.44-1-.9-1.02-1.32-1.03-.34-.01-.73-.01-1.12-.01-.39 0-1.02.15-1.55.72-.53.58-2.03 1.98-2.03 4.83s2.08 5.6 2.37 5.99c.29.39 4.02 6.44 9.9 8.76 4.9 1.93 5.89 1.55 6.95 1.45 1.06-.1 3.42-1.4 3.9-2.75.49-1.35.49-2.5.34-2.74-.15-.24-.54-.39-1.13-.68-.59-.29-3.42-1.69-3.95-1.88-.53-.19-.92-.29-1.31.29-.39.58-1.5 1.88-1.84 2.27-.34.39-.68.44-1.27.15-.59-.29-2.49-.92-4.74-2.92-1.75-1.56-2.93-3.49-3.28-4.08-.34-.59-.04-.91.26-1.2.26-.26.59-.68.88-1.02.29-.34.39-.59.59-.97.19-.39.1-.73-.05-1.02-.14-.29-1.28-3.16-1.8-4.36z"
        />
      </svg>

      <span className="whatsapp-pulse" />
    </Link>
  );
}

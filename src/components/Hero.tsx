"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type HeroProps = {
  onNavigate: (index: number) => void;
};

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero"
      className="snap-section relative flex items-center overflow-hidden"
      style={{ background: "#0B1F13" }}
    >
      {/* Full-width portrait background */}
      <div className="absolute inset-0">
        <Image
          src="/chief-chamuka-portrait.png"
          alt="His Royal Highness Chief Chamuka VI"
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
        />
      </div>

      {/* Dark gradient overlay — heavier on left for text legibility */}
      <div className="hero-overlay" />

      {/* Gold accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{ background: "linear-gradient(to right, #D4A843, #D4A843 40%, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-24 md:py-0">
        <div className="max-w-xl">
          {/* Pre-title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs uppercase tracking-[0.35em] mb-5"
            style={{ color: "#D4A843" }}
          >
            Office of His Royal Highness
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-[1.05]"
            style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
          >
            Chief Chamuka{" "}
            <span style={{ color: "#D4A843" }}>VI</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl font-light mb-1"
            style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.9)" }}
          >
            Traditional Leader of the Lenje People
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="text-sm md:text-base mb-8"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Chisamba District, Central Province, Zambia
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="w-20 h-[2px] mb-8 origin-left"
            style={{ background: "#D4A843" }}
          />

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mb-10 text-base md:text-lg leading-relaxed font-light italic"
            style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.8)" }}
          >
            &ldquo;We want to ensure that land is protected and our people are empowered.
            Tradition must empower rather than constrain.&rdquo;
          </motion.blockquote>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => onNavigate(1)}
              className="btn-primary btn-primary-fill"
            >
              About the Chief
            </button>
            <button
              onClick={() => onNavigate(4)}
              className="btn-primary btn-primary-outline"
            >
              Contact Office
            </button>
          </motion.div>

          {/* Credential tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {[
              "UN HeForShe Champion",
              "GLTN Champion",
              "Land Rights Advocate",
            ].map((badge) => (
              <span
                key={badge}
                className="text-[11px] uppercase tracking-wider px-3 py-1.5 rounded"
                style={{
                  background: "rgba(212, 168, 67, 0.12)",
                  color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(212, 168, 67, 0.25)",
                }}
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        onClick={() => onNavigate(1)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} style={{ color: "#D4A843" }} />
        </motion.div>
      </motion.button>
    </section>
  );
}

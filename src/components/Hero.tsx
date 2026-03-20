"use client";

import { motion } from "framer-motion";
import { ChevronDown, FileText, Mail } from "lucide-react";

type HeroProps = {
  onNavigate: (index: number) => void;
};

export function Hero({ onNavigate }: HeroProps) {
  const words = "Preserving Lenje Heritage".split(" ");
  const words2 = "Advancing Modern Equity".split(" ");

  return (
    <section
      id="hero"
      className="snap-section relative flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Parallax background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            var(--color-primary) 0px,
            var(--color-primary) 1px,
            transparent 1px,
            transparent 20px
          )`,
        }}
      />

      {/* Gold decorative accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32"
        style={{ background: `linear-gradient(to bottom, transparent, var(--color-accent))` }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.3em] mb-6"
          style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)" }}
        >
          His Royal Highness
        </motion.p>

        {/* Main title */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block"
          >
            Chief Chamuka{" "}
            <span style={{ color: "var(--color-accent)" }}>VI</span>
          </motion.span>
        </h1>

        {/* Taglines with stagger */}
        <div className="mb-4">
          <p className="text-xl md:text-2xl font-light" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </p>
          <p
            className="text-lg md:text-xl mt-1"
            style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
          >
            {words2.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.05 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="w-24 h-px mx-auto my-8"
          style={{ background: "var(--color-accent)" }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-10"
          style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
        >
          Traditional Leader of the Lenje People &bull; Chisamba District, Zambia
          <br />
          Champion of Gender Equality, Land Rights &amp; Customary Law Reform
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => onNavigate(2)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg"
            style={{ background: "var(--color-primary)" }}
          >
            <FileText size={18} />
            Explore Resources
          </button>
          <button
            onClick={() => onNavigate(4)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all duration-300 border-2 hover:shadow-lg"
            style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
          >
            <Mail size={18} />
            Get in Touch
          </button>
        </motion.div>

        {/* Quick-link cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto"
        >
          {[
            { label: "About", desc: "Biography & Vision", section: 1 },
            { label: "Gallery", desc: "Photos & Events", section: 3 },
            { label: "Resources", desc: "Downloads & Reports", section: 2 },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.section)}
              className="card-glow p-4 rounded-xl text-left transition-all"
              style={{ background: "var(--color-surface)" }}
            >
              <p className="font-semibold text-sm" style={{ color: "var(--color-primary)", fontFamily: "var(--font-display)" }}>
                {item.label}
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>
                {item.desc}
              </p>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        onClick={() => onNavigate(1)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} style={{ color: "var(--color-accent)" }} />
        </motion.div>
      </motion.button>
    </section>
  );
}

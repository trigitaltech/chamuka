"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ArrowUp } from "lucide-react";
import { SECTIONS, SOCIAL_LINKS } from "@/lib/constants";
import { useThemeContext } from "./ThemeProvider";
import { SocialIcon } from "./SocialIcon";

type NavigationProps = {
  activeIndex: number;
  onNavigate: (index: number) => void;
};

export function Navigation({ activeIndex, onNavigate }: NavigationProps) {
  const { theme, toggleTheme } = useThemeContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHero = activeIndex === 0;

  return (
    <>
      {/* Top Navigation Bar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isHero
            ? "rgba(11, 31, 19, 0.6)"
            : "color-mix(in srgb, var(--color-bg) 92%, transparent)",
          backdropFilter: "blur(10px)",
          borderBottom: isHero
            ? "1px solid rgba(212, 168, 67, 0.15)"
            : "1px solid var(--color-border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo / Crest */}
          <button
            onClick={() => onNavigate(0)}
            className="flex items-center gap-3"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
              style={{
                background: isHero ? "rgba(27, 67, 50, 0.8)" : "var(--color-primary)",
                color: "#D4A843",
                fontFamily: "var(--font-display)",
                border: "2px solid #D4A843",
              }}
            >
              VI
            </div>
            <div className="hidden sm:block text-left">
              <p
                className="text-sm font-bold tracking-wide leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  color: isHero ? "#FFFFFF" : "var(--color-primary)",
                }}
              >
                Chief Chamuka VI
              </p>
              <p
                className="text-[10px] uppercase tracking-[0.15em] leading-tight"
                style={{ color: isHero ? "rgba(255,255,255,0.5)" : "var(--color-text-light)" }}
              >
                Chisamba, Zambia
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {SECTIONS.map((section, i) => (
              <button
                key={section.id}
                onClick={() => onNavigate(i)}
                className="px-4 py-2 text-[13px] uppercase tracking-[0.08em] font-medium transition-colors duration-300 relative"
                style={{
                  color: activeIndex === i
                    ? "#D4A843"
                    : isHero ? "rgba(255,255,255,0.75)" : "var(--color-text)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {section.label}
                {activeIndex === i && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-[2px]"
                    style={{ background: "#D4A843" }}
                  />
                )}
              </button>
            ))}
            <div className="w-px h-5 mx-2" style={{ background: isHero ? "rgba(255,255,255,0.15)" : "var(--color-border)" }} />
            <button
              onClick={toggleTheme}
              className="p-2 rounded transition-colors duration-300"
              style={{ color: "#D4A843" }}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2"
              style={{ color: "#D4A843" }}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2"
              style={{ color: isHero ? "#FFFFFF" : "var(--color-text)" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 md:hidden"
            style={{ background: "var(--color-dark)" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold mb-4"
              style={{
                background: "rgba(27, 67, 50, 0.5)",
                color: "#D4A843",
                fontFamily: "var(--font-display)",
                border: "2px solid #D4A843",
              }}
            >
              VI
            </div>
            {SECTIONS.map((section, i) => (
              <button
                key={section.id}
                onClick={() => {
                  onNavigate(i);
                  setMobileOpen(false);
                }}
                className="text-xl uppercase tracking-[0.1em] font-medium transition-colors"
                style={{
                  color: activeIndex === i ? "#D4A843" : "rgba(255,255,255,0.7)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {section.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dot Navigation (desktop) */}
      <nav
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
        aria-label="Section navigation"
      >
        {SECTIONS.map((section, i) => (
          <button
            key={section.id}
            onClick={() => onNavigate(i)}
            className="group relative flex items-center justify-end"
            aria-label={`Go to ${section.label}`}
          >
            <span
              className="absolute right-5 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{ background: "var(--color-surface)", color: "var(--color-text)", boxShadow: "0 2px 8px var(--color-shadow)" }}
            >
              {section.label}
            </span>
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: activeIndex === i ? 12 : 8,
                height: activeIndex === i ? 12 : 8,
                background: activeIndex === i ? "#D4A843" : isHero ? "rgba(255,255,255,0.4)" : "var(--color-text-light)",
                opacity: activeIndex === i ? 1 : 0.5,
              }}
            />
          </button>
        ))}
      </nav>

      {/* Social Strip (desktop) */}
      <div
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
        aria-label="Social media links"
      >
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110"
            style={{ color: isHero ? "rgba(255,255,255,0.4)" : "var(--color-text-light)" }}
            aria-label={link.label}
          >
            <SocialIcon platform={link.platform} size={18} />
          </a>
        ))}
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {activeIndex > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => onNavigate(0)}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-lg shadow-lg transition-colors"
            style={{ background: "#D4A843", color: "#0B1F13" }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

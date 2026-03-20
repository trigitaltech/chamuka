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

  return (
    <>
      {/* Top Navigation Bar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
        style={{ background: "color-mix(in srgb, var(--color-bg) 85%, transparent)" }}
      >
        <button
          onClick={() => onNavigate(0)}
          className="font-[family-name:var(--font-display)] text-lg font-bold tracking-wide"
          style={{ color: "var(--color-primary)" }}
        >
          Chief Chamuka VI
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {SECTIONS.map((section, i) => (
            <button
              key={section.id}
              onClick={() => onNavigate(i)}
              className="text-sm font-medium transition-colors duration-300 hover:opacity-100"
              style={{
                color: activeIndex === i ? "var(--color-accent)" : "var(--color-text)",
                fontFamily: "var(--font-body)",
                opacity: activeIndex === i ? 1 : 0.7,
              }}
            >
              {section.label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-300"
            style={{ color: "var(--color-accent)" }}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full"
            style={{ color: "var(--color-accent)" }}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2"
            style={{ color: "var(--color-text)" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ background: "var(--color-bg)" }}
          >
            {SECTIONS.map((section, i) => (
              <button
                key={section.id}
                onClick={() => {
                  onNavigate(i);
                  setMobileOpen(false);
                }}
                className="text-2xl font-medium transition-colors"
                style={{
                  color: activeIndex === i ? "var(--color-accent)" : "var(--color-text)",
                  fontFamily: "var(--font-display)",
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
              style={{ background: "var(--color-surface)", color: "var(--color-text)" }}
            >
              {section.label}
            </span>
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: activeIndex === i ? 12 : 8,
                height: activeIndex === i ? 12 : 8,
                background: activeIndex === i ? "var(--color-accent)" : "var(--color-text-secondary)",
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
            className="transition-colors duration-300 hover:scale-110"
            style={{ color: "var(--color-text-secondary)" }}
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
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-colors"
            style={{ background: "var(--color-accent)", color: "#fff" }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Calendar, Image as ImageIcon } from "lucide-react";
import { FadeUp } from "./AnimatedSection";
import { GALLERY_ITEMS, EVENTS } from "@/lib/constants";

type ModalContent = {
  type: "image" | "video" | "event";
  title: string;
  image?: string;
  videoUrl?: string;
  description?: string;
  date?: string;
  category?: string;
} | null;

export function Gallery() {
  const [modal, setModal] = useState<ModalContent>(null);
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  const handleImageError = useCallback((key: string) => {
    setBrokenImages((prev) => new Set(prev).add(key));
  }, []);

  // Merge gallery items and events into a single blog-style list
  const allItems = useMemo(() => {
    const items: Array<{
      key: string;
      title: string;
      category: string;
      image: string;
      type: "image" | "video" | "event";
      videoUrl?: string;
      description?: string;
      date?: string;
    }> = [];

    // Gallery items first
    for (const g of GALLERY_ITEMS) {
      items.push({
        key: `gallery-${g.id}`,
        title: g.title,
        category: g.category,
        image: g.image,
        type: g.type,
        videoUrl: g.type === "video" ? g.videoUrl : undefined,
        description: "description" in g ? (g as Record<string, unknown>).description as string : undefined,
      });
    }

    // Events
    for (const e of EVENTS) {
      items.push({
        key: `event-${e.id}`,
        title: e.title,
        category: e.category,
        image: e.image,
        type: "event",
        date: e.date,
        description: e.excerpt,
      });
    }

    return items;
  }, []);

  return (
    <section
      id="gallery"
      className="snap-section relative overflow-y-auto py-20 px-6"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeUp className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: "var(--color-accent)" }}>
            Gallery &amp; Events
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            Milestones &amp; Moments
          </h2>
          <div className="ornament-divider mt-4">
            <span className="diamond" />
          </div>
        </FadeUp>

        {/* Blog-style Grid: 4 columns, 3+ rows */}
        <FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allItems.map((item, i) => (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                className="card-glow rounded-lg overflow-hidden cursor-pointer group"
                style={{ background: "var(--color-surface)" }}
                onClick={() =>
                  setModal({
                    type: item.type,
                    title: item.title,
                    image: item.image,
                    videoUrl: item.videoUrl,
                    description: item.description,
                    date: item.date,
                    category: item.category,
                  })
                }
              >
                {/* Thumbnail */}
                <div className="aspect-[4/3] relative overflow-hidden" style={{ background: "var(--color-bg)" }}>
                  {item.image && !brokenImages.has(item.key) ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={() => handleImageError(item.key)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ImageIcon size={32} style={{ color: "var(--color-text-secondary)", opacity: 0.2 }} />
                    </div>
                  )}

                  {/* Video play icon */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg"
                        style={{ background: "rgba(212,168,67,0.9)" }}
                      >
                        <Play size={18} className="text-white ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Category tag */}
                  <span
                    className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded"
                    style={{ background: "rgba(11,31,19,0.75)", color: "#D4A843" }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-4">
                  {item.date && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <Calendar size={12} style={{ color: "var(--color-accent)" }} />
                      <time className="text-[11px] uppercase tracking-wider" style={{ color: "var(--color-text-light)" }}>
                        {item.date}
                      </time>
                    </div>
                  )}
                  <h3
                    className="text-sm font-semibold leading-snug line-clamp-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs mt-2 line-clamp-2 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.85)" }}
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full rounded-lg overflow-hidden"
              style={{ background: "var(--color-surface)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full"
                style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {modal.type === "video" && modal.videoUrl ? (
                <div className="aspect-video">
                  <iframe
                    src={modal.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={modal.title}
                    loading="lazy"
                  />
                </div>
              ) : modal.image ? (
                <div>
                  <img
                    src={modal.image}
                    alt={modal.title}
                    className="w-full max-h-[70vh] object-contain"
                    style={{ background: "var(--color-bg)" }}
                  />
                  <div className="p-5">
                    {modal.category && (
                      <span
                        className="inline-block text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded mb-3"
                        style={{ background: "var(--color-accent-muted)", color: "var(--color-accent)" }}
                      >
                        {modal.category}
                      </span>
                    )}
                    <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>
                      {modal.title}
                    </h3>
                    {modal.date && (
                      <p className="text-xs mb-3" style={{ color: "var(--color-text-light)" }}>{modal.date}</p>
                    )}
                    {modal.description && (
                      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                        {modal.description}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="aspect-[4/3] flex items-center justify-center" style={{ background: "var(--color-bg)" }}>
                  <div className="text-center">
                    <ImageIcon size={64} style={{ color: "var(--color-text-secondary)", opacity: 0.3 }} />
                    <p className="mt-4 font-semibold" style={{ color: "var(--color-text)" }}>{modal.title}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

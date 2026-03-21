"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Calendar, ArrowRight, Image as ImageIcon } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { GALLERY_ITEMS, EVENTS } from "@/lib/constants";

type ModalContent = {
  type: "image" | "video";
  title: string;
  image?: string;
  videoUrl?: string;
  description?: string;
} | null;

export function Gallery() {
  const [modal, setModal] = useState<ModalContent>(null);
  const [brokenImages, setBrokenImages] = useState<Set<number>>(new Set());

  const handleImageError = useCallback((id: number) => {
    setBrokenImages((prev) => new Set(prev).add(id));
  }, []);

  const getGridClass = (size: string) => {
    switch (size) {
      case "2x2": return "sm:col-span-2 sm:row-span-2";
      case "2x1": return "sm:col-span-2";
      case "1x2": return "sm:row-span-2";
      default: return "";
    }
  };

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
          <div className="w-16 h-px mx-auto" style={{ background: "var(--color-accent)" }} />
        </FadeUp>

        {/* Bento Grid */}
        <FadeUp className="mb-20">
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] sm:auto-rows-[200px] gap-3">
            {GALLERY_ITEMS.map((item) => (
              <StaggerItem
                key={item.id}
                className={getGridClass(item.size)}
              >
                <button
                  onClick={() =>
                    setModal({
                      type: item.type,
                      title: item.title,
                      image: item.image,
                      videoUrl: item.type === "video" ? item.videoUrl : undefined,
                      description: "description" in item ? (item as Record<string, unknown>).description as string : undefined,
                    })
                  }
                  className="card-glow w-full h-full rounded-xl overflow-hidden relative group"
                  style={{ background: "var(--color-surface)" }}
                >
                  {/* Thumbnail image */}
                  <div className="absolute inset-0">
                    {item.image && !brokenImages.has(item.id) ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ImageIcon
                          size={item.size === "2x2" ? 48 : 32}
                          style={{ color: "var(--color-text-secondary)", opacity: 0.2 }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
                  >
                    {/* Category tag */}
                    <span
                      className="inline-block text-xs font-medium px-2 py-1 rounded mb-2 w-fit"
                      style={{ background: "rgba(212,168,67,0.3)", color: "#D4A843" }}
                    >
                      {item.category}
                    </span>
                    <p className="text-white text-sm font-semibold">{item.title}</p>
                  </div>

                  {/* Video play icon */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(212,168,67,0.9)" }}
                      >
                        <Play size={20} className="text-white ml-1" />
                      </div>
                    </div>
                  )}
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>

        {/* Magazine-Style Event Cards */}
        <FadeUp>
          <h3
            className="text-2xl font-semibold text-center mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            Featured Events
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {EVENTS.map((event, i) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-glow rounded-xl overflow-hidden group cursor-pointer"
                style={{ background: "var(--color-surface)" }}
              >
                {/* Feature image placeholder */}
                <div
                  className="aspect-[16/9] relative overflow-hidden"
                  style={{ background: "var(--color-bg)" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon size={40} style={{ color: "var(--color-text-secondary)", opacity: 0.2 }} />
                  </div>
                  {/* Category label */}
                  <span
                    className="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: "rgba(212,168,67,0.9)", color: "#fff" }}
                  >
                    {event.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={14} style={{ color: "var(--color-accent)" }} />
                    <time className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                      {event.date}
                    </time>
                  </div>
                  <h4
                    className="font-semibold mb-2 line-clamp-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                  >
                    {event.title}
                  </h4>
                  <p className="text-sm mb-4 line-clamp-3" style={{ color: "var(--color-text-secondary)" }}>
                    {event.excerpt}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Read More <ArrowRight size={14} />
                  </span>
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
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
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
                    <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>
                      {modal.title}
                    </h3>
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

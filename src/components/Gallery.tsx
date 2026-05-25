"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Calendar, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp } from "./AnimatedSection";
import { GALLERY_ITEMS, EVENTS } from "@/lib/constants";

type ModalContent = {
  type: "image" | "video" | "event" | "carousel";
  title: string;
  image?: string;
  images?: string[];
  videoUrl?: string;
  description?: string;
  date?: string;
  category?: string;
} | null;

export function Gallery() {
  const [modal, setModal] = useState<ModalContent>(null);
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());
  const [carouselIndex, setCarouselIndex] = useState<Record<string, number>>({});
  const [modalCarouselIndex, setModalCarouselIndex] = useState(0);

  const getCarouselIdx = (key: string) => carouselIndex[key] ?? 0;

  const advanceCarousel = (key: string, total: number, dir: 1 | -1, e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselIndex((prev) => ({
      ...prev,
      [key]: ((prev[key] ?? 0) + dir + total) % total,
    }));
  };

  const handleImageError = useCallback((key: string) => {
    setBrokenImages((prev) => new Set(prev).add(key));
  }, []);

  const allItems = useMemo(() => {
    const items: Array<{
      key: string;
      title: string;
      category: string;
      image: string;
      type: "image" | "video" | "event" | "carousel";
      images?: string[];
      videoUrl?: string;
      description?: string;
      date?: string;
    }> = [];

    for (const g of GALLERY_ITEMS) {
      items.push({
        key: `gallery-${g.id}`,
        title: g.title,
        category: g.category,
        image: g.image,
        type: g.type as "image" | "video" | "carousel",
        videoUrl: g.type === "video" ? g.videoUrl : undefined,
        images: "images" in g ? (g as Record<string, unknown>).images as string[] : undefined,
        description: "description" in g ? (g as Record<string, unknown>).description as string : undefined,
      });
    }

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
                onClick={() => {
                  if (item.type === "carousel" && item.images) {
                    setModalCarouselIndex(getCarouselIdx(item.key));
                  }
                  setModal({
                    type: item.type,
                    title: item.title,
                    image: item.image,
                    images: item.images,
                    videoUrl: item.videoUrl,
                    description: item.description,
                    date: item.date,
                    category: item.category,
                  });
                }}
              >
                <div className="aspect-[4/3] relative overflow-hidden" style={{ background: "var(--color-bg)" }}>
                  {item.type === "carousel" && item.images ? (
                    <>
                      <img
                        src={item.images[getCarouselIdx(item.key)]}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={() => handleImageError(item.key)}
                      />
                      <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: "rgba(0,0,0,0.55)" }}
                        onClick={(e) => advanceCarousel(item.key, item.images!.length, -1, e)}
                        aria-label="Previous"
                      >
                        <ChevronLeft size={14} className="text-white" />
                      </button>
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: "rgba(0,0,0,0.55)" }}
                        onClick={(e) => advanceCarousel(item.key, item.images!.length, 1, e)}
                        aria-label="Next"
                      >
                        <ChevronRight size={14} className="text-white" />
                      </button>
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                        {item.images.map((_, di) => (
                          <span
                            key={di}
                            className="w-1.5 h-1.5 rounded-full transition-all"
                            style={{ background: di === getCarouselIdx(item.key) ? "#D4A843" : "rgba(255,255,255,0.45)" }}
                          />
                        ))}
                      </div>
                      <span
                        className="absolute top-3 right-3 text-[10px] font-medium px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(0,0,0,0.6)", color: "#D4A843" }}
                      >
                        {getCarouselIdx(item.key) + 1}/{item.images.length}
                      </span>
                    </>
                  ) : item.image && !brokenImages.has(item.key) ? (
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

                  <span
                    className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded"
                    style={{ background: "rgba(11,31,19,0.75)", color: "#D4A843" }}
                  >
                    {item.category}
                  </span>
                </div>

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

              {modal.type === "carousel" && modal.images ? (
                <div>
                  <div className="relative" style={{ background: "var(--color-bg)" }}>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={modalCarouselIndex}
                        src={modal.images[modalCarouselIndex]}
                        alt={`${modal.title} ${modalCarouselIndex + 1}`}
                        className="w-full max-h-[65vh] object-contain"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.25 }}
                      />
                    </AnimatePresence>
                    <button
                      onClick={() => setModalCarouselIndex((prev) => (prev - 1 + modal.images!.length) % modal.images!.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                      style={{ background: "rgba(0,0,0,0.6)" }}
                      aria-label="Previous"
                    >
                      <ChevronLeft size={20} className="text-white" />
                    </button>
                    <button
                      onClick={() => setModalCarouselIndex((prev) => (prev + 1) % modal.images!.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                      style={{ background: "rgba(0,0,0,0.6)" }}
                      aria-label="Next"
                    >
                      <ChevronRight size={20} className="text-white" />
                    </button>
                    <span
                      className="absolute bottom-3 right-4 text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(0,0,0,0.6)", color: "#D4A843" }}
                    >
                      {modalCarouselIndex + 1} / {modal.images.length}
                    </span>
                  </div>
                  <div className="flex gap-2 overflow-x-auto px-4 py-3" style={{ background: "var(--color-bg)", scrollbarWidth: "none" }}>
                    {modal.images.map((img, ti) => (
                      <button
                        key={ti}
                        onClick={() => setModalCarouselIndex(ti)}
                        className="flex-shrink-0 w-14 h-14 rounded overflow-hidden transition-all"
                        style={{ outline: ti === modalCarouselIndex ? "2px solid #D4A843" : "2px solid transparent", outlineOffset: "1px" }}
                        aria-label={`Go to image ${ti + 1}`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                  <div className="p-5 pt-2">
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
                    {modal.description && (
                      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                        {modal.description}
                      </p>
                    )}
                  </div>
                </div>
              ) : modal.type === "video" && modal.videoUrl ? (
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

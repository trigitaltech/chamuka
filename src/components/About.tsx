"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, Target, Eye, Shield, Users, Scale, Landmark } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { TIMELINE_EVENTS } from "@/lib/constants";

const FOCUS_AREAS = [
  { icon: Shield, title: "Gender Equality", description: "Pioneering HeForShe initiatives and GBV by-laws to protect and empower women and girls." },
  { icon: Scale, title: "Land Rights", description: "Ensuring equitable land certification and transparent administration for all community members." },
  { icon: Landmark, title: "Customary Law Reform", description: "Modernizing traditional governance to align with constitutional and international human rights standards." },
  { icon: Users, title: "Community Development", description: "Driving education, health, and economic empowerment programmes across Chisamba District." },
];

const ACCORDION_ITEMS = [
  { title: "Governance Structure", content: "The chiefdom operates through a network of village headpersons, indunas (traditional advisors), and the Royal Establishment Council, ensuring grassroots representation in all major decisions." },
  { title: "Cultural Preservation", content: "Through annual ceremonies such as the Kulamba Kubwalo and Lwiindi, the chiefdom preserves the rich oral traditions, music, dance, and spiritual practices of the Lenje people." },
  { title: "International Partnerships", content: "Chief Chamuka VI collaborates with UN Women, UNDP, GIZ, and numerous international NGOs to bring global best practices to local governance while sharing Zambian innovations with the world." },
  { title: "Youth & Education", content: "The chiefdom prioritizes youth engagement through scholarship programmes, mentorship initiatives, and the establishment of community libraries and digital learning centres." },
];

export function About() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const currentIndex = TIMELINE_EVENTS.findIndex((e) => e.isCurrent);
  const [activeSlide, setActiveSlide] = useState(currentIndex >= 0 ? currentIndex : TIMELINE_EVENTS.length - 1);

  const goTo = useCallback((index: number) => {
    setActiveSlide(Math.max(0, Math.min(index, TIMELINE_EVENTS.length - 1)));
  }, []);

  const goPrev = useCallback(() => goTo(activeSlide - 1), [activeSlide, goTo]);
  const goNext = useCallback(() => goTo(activeSlide + 1), [activeSlide, goTo]);

  return (
    <section
      id="about"
      className="snap-section relative overflow-y-auto py-20 px-6"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeUp className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: "var(--color-accent)" }}>
            About
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            Chief Chamuka VI
          </h2>
          <div className="ornament-divider mt-4">
            <span className="diamond" />
          </div>
        </FadeUp>

        {/* Two-Column Bio */}
        <FadeUp className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
            >
              A Leader at the Intersection of Tradition and Progress
            </h3>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              <p>
                His Royal Highness Chief Chamuka VI is the traditional leader of the Lenje people in
                Chisamba District, Central Province, Zambia. Since his ascension to the throne, he has
                become internationally recognized for his pioneering work in gender equality, land
                rights reform, and the modernization of customary law.
              </p>
              <p>
                As a UN Women HeForShe Champion, Chief Chamuka VI has shattered the stereotype of
                traditional leadership as resistant to change. He enacted Zambia&apos;s first-ever
                Gender-Based Violence by-laws within a chiefdom, established equitable land
                certification programmes, and addressed the United Nations General Assembly on
                customary law reform.
              </p>
              <p>
                His vision is a chiefdom where cultural heritage and modern human rights coexist —
                where tradition empowers rather than constrains, and where every member of the
                community has equal access to land, justice, and opportunity.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div
              className="aspect-[3/4] relative rounded-lg overflow-hidden"
              style={{
                border: "3px solid var(--color-accent)",
                boxShadow: "0 8px 40px var(--color-shadow)",
              }}
            >
              <Image
                src="/chief-chamuka-portrait.png"
                alt="Chief Chamuka VI seated on a carved wooden throne in traditional regalia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Bottom gradient with name plate */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 text-center"
                style={{ background: "linear-gradient(to top, rgba(11,31,19,0.8), transparent)" }}
              >
                <p
                  className="text-white text-sm font-semibold tracking-wide"
                  style={{ fontFamily: "var(--font-display)", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                >
                  H.R.H. Chief Chamuka VI
                </p>
                <p className="text-[11px] uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Custodian of the Lenje People
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Featured Quote */}
        <FadeUp className="mb-20">
          <div
            className="max-w-3xl mx-auto p-8 md:p-10 rounded-lg accent-bar-top card-elevated"
            style={{ background: "var(--color-surface)" }}
          >
            <blockquote className="leader-quote">
              There is very good comprehension and broad acceptance of the STDM concept by both the
              traditional leaders and people in my Chiefdom. All seven Chiefdoms in the Lenje Land
              resolved to engage PPHZP to map boundaries so we can lessen land disputes, and our role
              as chiefs is to provide leadership to the process.
            </blockquote>
            <p className="mt-4 text-sm font-medium pl-6" style={{ color: "var(--color-accent)" }}>
              — H.R.H. Chief Chamuka VI
            </p>
          </div>
        </FadeUp>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <FadeUp>
            <div
              className="accent-bar-top card-elevated card-glow p-8 rounded-lg h-full"
              style={{ background: "var(--color-surface)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(212, 168, 67, 0.15)" }}
                >
                  <Eye size={20} style={{ color: "var(--color-accent)" }} />
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                >
                  Vision
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                A Lenje chiefdom where cultural heritage and modern governance unite to deliver
                justice, equality, and prosperity for every man, woman, and child — setting a
                continental benchmark for traditional leadership in the 21st century.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div
              className="accent-bar-top card-elevated card-glow p-8 rounded-lg h-full"
              style={{ background: "var(--color-surface)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(212, 168, 67, 0.15)" }}
                >
                  <Target size={20} style={{ color: "var(--color-accent)" }} />
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                >
                  Mission
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                To preserve the rich heritage of the Lenje people while championing gender equality,
                equitable land rights, and transparent governance through innovative by-laws,
                international partnerships, and grassroots community engagement.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Focus Areas */}
        <FadeUp className="mb-20">
          <h3
            className="text-2xl font-semibold text-center mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            Areas of Focus
          </h3>
          <div className="ornament-divider mb-10">
            <span className="diamond" />
          </div>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOCUS_AREAS.map((area) => (
              <StaggerItem key={area.title}>
                <div
                  className="gold-border-top card-glow p-6 rounded-xl h-full"
                  style={{ background: "var(--color-surface)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(212, 168, 67, 0.12)" }}
                  >
                    <area.icon size={24} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <h4
                    className="font-semibold mb-2 text-center"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                  >
                    {area.title}
                  </h4>
                  <p className="text-sm text-center" style={{ color: "var(--color-text-secondary)" }}>
                    {area.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>

        {/* Interactive Timeline */}
        <FadeUp className="mb-20">
          <h3
            className="text-2xl font-semibold text-center mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            Journey &amp; Milestones
          </h3>
          <div className="ornament-divider mb-10">
            <span className="diamond" />
          </div>

          {/* Carousel Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Year dots / progress track */}
            <div className="flex items-center justify-center gap-1 mb-8">
              {TIMELINE_EVENTS.map((event, i) => {
                const isActive = i === activeSlide;
                const isCurrent = event.isCurrent;
                return (
                  <button
                    key={event.year}
                    onClick={() => goTo(i)}
                    className="group relative flex flex-col items-center"
                    aria-label={`Go to ${event.year}`}
                  >
                    {/* Connecting line (not on first) */}
                    {i > 0 && (
                      <div
                        className="absolute right-full top-1/2 -translate-y-1/2 h-px hidden sm:block"
                        style={{
                          width: "calc(100% - 0.25rem)",
                          background: i <= activeSlide ? "var(--color-accent)" : "var(--color-text-secondary)",
                          opacity: i <= activeSlide ? 0.6 : 0.2,
                        }}
                      />
                    )}
                    {/* Dot */}
                    <div
                      className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                      style={{
                        background: isActive
                          ? "var(--color-accent)"
                          : isCurrent
                          ? "rgba(212, 168, 67, 0.3)"
                          : "var(--color-surface)",
                        border: isCurrent && !isActive
                          ? "2px solid var(--color-accent)"
                          : isActive
                          ? "none"
                          : "2px solid var(--color-text-secondary)",
                        transform: isActive ? "scale(1.15)" : "scale(1)",
                        boxShadow: isActive ? "0 0 20px rgba(212, 168, 67, 0.4)" : "none",
                      }}
                    >
                      <span
                        className="text-[10px] sm:text-xs font-bold"
                        style={{
                          color: isActive ? "#0B1F13" : "var(--color-text-secondary)",
                        }}
                      >
                        {event.year.slice(-2)}
                      </span>
                      {/* Pulse ring for current */}
                      {isCurrent && (
                        <span
                          className="absolute inset-0 rounded-full animate-ping opacity-20"
                          style={{ background: "var(--color-accent)" }}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Slide card with navigation arrows */}
            <div className="relative flex items-center gap-4">
              {/* Prev arrow */}
              <button
                onClick={goPrev}
                disabled={activeSlide === 0}
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-20"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-accent)",
                }}
                aria-label="Previous milestone"
              >
                <ChevronLeft size={20} style={{ color: "var(--color-accent)" }} />
              </button>

              {/* Card area */}
              <div className="flex-1 overflow-hidden relative" style={{ minHeight: "220px" }}>
                <AnimatePresence mode="wait">
                  {TIMELINE_EVENTS.map(
                    (event, i) =>
                      i === activeSlide && (
                        <motion.div
                          key={event.year}
                          initial={{ opacity: 0, x: 60 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -60 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="w-full"
                        >
                          <div
                            className="p-8 md:p-10 rounded-xl relative"
                            style={{
                              background: "var(--color-surface)",
                              border: event.isCurrent ? "2px solid var(--color-accent)" : "1px solid transparent",
                              boxShadow: event.isCurrent
                                ? "0 0 30px rgba(212, 168, 67, 0.15)"
                                : "0 4px 20px var(--color-shadow)",
                            }}
                          >
                            {/* Current badge */}
                            {event.isCurrent && (
                              <span
                                className="absolute -top-3 right-6 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                                style={{
                                  background: "var(--color-accent)",
                                  color: "#0B1F13",
                                }}
                              >
                                Present
                              </span>
                            )}

                            {/* Year */}
                            <span
                              className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                              style={{
                                background: event.isCurrent ? "var(--color-accent)" : "rgba(212, 168, 67, 0.15)",
                                color: event.isCurrent ? "#0B1F13" : "var(--color-accent)",
                              }}
                            >
                              {event.year}
                            </span>

                            <h4
                              className="text-xl md:text-2xl font-semibold mb-3"
                              style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                            >
                              {event.title}
                            </h4>
                            <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                              {event.description}
                            </p>

                            {/* Slide counter */}
                            <p className="mt-6 text-xs" style={{ color: "var(--color-text-secondary)", opacity: 0.5 }}>
                              {i + 1} / {TIMELINE_EVENTS.length}
                            </p>
                          </div>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>

              {/* Next arrow */}
              <button
                onClick={goNext}
                disabled={activeSlide === TIMELINE_EVENTS.length - 1}
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-20"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-accent)",
                }}
                aria-label="Next milestone"
              >
                <ChevronRight size={20} style={{ color: "var(--color-accent)" }} />
              </button>
            </div>
          </div>
        </FadeUp>

        {/* Accordion */}
        <FadeUp>
          <h3
            className="text-2xl font-semibold text-center mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            Learn More
          </h3>
          <div className="ornament-divider mb-10">
            <span className="diamond" />
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {ACCORDION_ITEMS.map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden gold-border-left"
                style={{ background: "var(--color-surface)" }}
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span
                    className="font-semibold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                  >
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: openAccordion === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} style={{ color: "var(--color-accent)" }} />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openAccordion === i ? "auto" : 0,
                    opacity: openAccordion === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {item.content}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

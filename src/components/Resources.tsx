"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Download, FileText, Filter } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { RESOURCES, RESOURCE_CATEGORIES } from "@/lib/constants";

export function Resources() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => {
      const matchesCategory = activeCategory === "All" || r.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="resources"
      className="snap-section relative overflow-y-auto py-20 px-6"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeUp className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: "var(--color-accent)" }}>
            Resources
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            Documents &amp; Downloads
          </h2>
          <div className="ornament-divider mt-4 mb-4">
            <span className="diamond" />
          </div>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            Access by-laws, annual reports, land guides, speeches, and SDG alignment documents
            from the Office of Chief Chamuka VI.
          </p>
        </FadeUp>

        {/* Search & Filter */}
        <FadeUp className="mb-10">
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
            <div
              className="flex items-center gap-2 flex-1 px-4 py-3 rounded-lg"
              style={{ background: "var(--color-surface)" }}
            >
              <Search size={18} style={{ color: "var(--color-text-secondary)" }} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-sm"
                style={{ color: "var(--color-text)" }}
              />
            </div>
            <div
              className="flex items-center gap-2 px-4 py-3 rounded-lg sm:hidden"
              style={{ background: "var(--color-surface)" }}
            >
              <Filter size={18} style={{ color: "var(--color-text-secondary)" }} />
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="bg-transparent outline-none text-sm flex-1"
                style={{ color: "var(--color-text)" }}
              >
                {RESOURCE_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills (desktop) */}
          <div className="hidden sm:flex flex-wrap gap-2 justify-center mt-6">
            {RESOURCE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: activeCategory === cat ? "var(--color-accent)" : "var(--color-surface)",
                  color: activeCategory === cat ? "#fff" : "var(--color-text-secondary)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Resource count */}
        <FadeUp className="mb-6">
          <p className="text-sm text-center" style={{ color: "var(--color-text-secondary)" }}>
            Showing {filtered.length} of {RESOURCES.length} resources
          </p>
        </FadeUp>

        {/* Resource Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((resource) => (
            <StaggerItem key={resource.id}>
              <motion.div
                layout
                className="card-glow rounded-lg overflow-hidden h-full flex flex-col"
                style={{ background: "var(--color-surface)" }}
              >
                {/* Category bar */}
                <div className="px-5 pt-5 pb-3">
                  <span
                    className="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(212, 168, 67, 0.15)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {resource.category}
                  </span>
                </div>

                <div className="px-5 pb-5 flex-1 flex flex-col">
                  <h3
                    className="font-semibold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                  >
                    {resource.title}
                  </h3>
                  <p className="text-sm mb-4 flex-1" style={{ color: "var(--color-text-secondary)" }}>
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                      <FileText size={14} />
                      <span>{resource.fileType}</span>
                      <span>&bull;</span>
                      <span>{resource.fileSize}</span>
                      <span>&bull;</span>
                      <span>{resource.year}</span>
                    </div>
                    <button
                      className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
                      style={{ color: "var(--color-accent)" }}
                      aria-label={`Download ${resource.title}`}
                    >
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {filtered.length === 0 && (
          <FadeUp className="text-center py-16">
            <FileText size={48} className="mx-auto mb-4" style={{ color: "var(--color-text-secondary)", opacity: 0.5 }} />
            <p style={{ color: "var(--color-text-secondary)" }}>
              No resources found matching your criteria.
            </p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}

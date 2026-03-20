"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { SECTIONS } from "@/lib/constants";

export function useActiveSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = container.clientHeight;
      const index = Math.round(scrollTop / sectionHeight);
      setActiveIndex(Math.min(index, SECTIONS.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const target = container.children[index] as HTMLElement;
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return { activeIndex, scrollToSection, containerRef };
}

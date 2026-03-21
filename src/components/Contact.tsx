"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Loader2, CheckCircle } from "lucide-react";
import { FadeUp } from "./AnimatedSection";
import { INQUIRY_CATEGORIES, SOCIAL_LINKS } from "@/lib/constants";
import { SocialIcon } from "./SocialIcon";

type FormData = {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputStyle = {
    background: "var(--color-bg)",
    color: "var(--color-text)",
    borderColor: "var(--color-text-secondary)",
  };

  return (
    <section
      id="contact"
      className="snap-section relative overflow-y-auto py-20 px-6"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeUp className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: "var(--color-accent)" }}>
            Contact
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            Get in Touch
          </h2>
          <div className="ornament-divider mt-4">
            <span className="diamond" />
          </div>
          <p className="text-base mt-4 max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            Reach out to the Office of Chief Chamuka VI for inquiries, partnerships, or community matters.
          </p>
        </FadeUp>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeUp>
            <div
              className="rounded-lg p-8"
              style={{ background: "var(--color-surface)" }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={48} style={{ color: "var(--color-accent)" }} />
                  <h3
                    className="text-xl font-semibold mt-4 mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                  >
                    Message Sent
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    Thank you for reaching out. We will respond within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text)" }}>
                      Full Name <span style={{ color: "var(--color-accent)" }}>*</span>
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:border-[var(--color-accent)] transition-colors"
                      style={inputStyle}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text)" }}>
                      Email Address <span style={{ color: "var(--color-accent)" }}>*</span>
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                      })}
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:border-[var(--color-accent)] transition-colors"
                      style={inputStyle}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text)" }}>
                      Inquiry Category <span style={{ color: "var(--color-accent)" }}>*</span>
                    </label>
                    <select
                      {...register("category", { required: "Please select a category" })}
                      className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:border-[var(--color-accent)] transition-colors"
                      style={inputStyle}
                    >
                      <option value="">Select a category</option>
                      {INQUIRY_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.category.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text)" }}>
                      Subject <span style={{ color: "var(--color-accent)" }}>*</span>
                    </label>
                    <input
                      {...register("subject", { required: "Subject is required" })}
                      className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:border-[var(--color-accent)] transition-colors"
                      style={inputStyle}
                      placeholder="What is this regarding?"
                    />
                    {errors.subject && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text)" }}>
                      Message <span style={{ color: "var(--color-accent)" }}>*</span>
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                        maxLength: { value: 2000, message: "Maximum 2000 characters" },
                      })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                      style={inputStyle}
                      placeholder="Your message..."
                    />
                    {errors.message && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg disabled:opacity-70"
                    style={{ background: "var(--color-accent)", color: "#0B1F13" }}
                  >
                    {isSubmitting ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Send size={18} />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </FadeUp>

          {/* Map & Info */}
          <FadeUp delay={0.1}>
            <div className="space-y-6">
              {/* Google Maps Embed */}
              <div
                className="rounded-lg overflow-hidden aspect-[4/3]"
                style={{ background: "var(--color-surface)" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30684.54!2d28.65!3d-15.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x194328b0b0b0b0b0%3A0x0!2sChisamba%2C%20Zambia!5e0!3m2!1sen!2szm!4v1"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chamuka Palace, Chisamba, Zambia"
                />
              </div>

              {/* Office Details */}
              <div
                className="rounded-lg p-6 space-y-4"
                style={{ background: "var(--color-surface)" }}
              >
                <h3
                  className="font-semibold text-lg"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                >
                  Office of Chief Chamuka VI
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent)" }} />
                    <div>
                      <p className="text-sm" style={{ color: "var(--color-text)" }}>Chamuka Palace</p>
                      <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        Chisamba, Central Province, Zambia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={18} className="flex-shrink-0" style={{ color: "var(--color-accent)" }} />
                    <a
                      href="mailto:info@chiefchamukavi.org"
                      className="text-sm hover:underline"
                      style={{ color: "var(--color-text)" }}
                    >
                      info@chiefchamukavi.org
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={18} className="flex-shrink-0" style={{ color: "var(--color-accent)" }} />
                    <p className="text-sm" style={{ color: "var(--color-text)" }}>
                      +260 XXX XXX XXX
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t" style={{ borderColor: "var(--color-bg)" }}>
                  <p className="text-xs font-medium mb-3 uppercase tracking-wider" style={{ color: "var(--color-text-secondary)" }}>
                    Follow Us
                  </p>
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full transition-colors hover:scale-110"
                        style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
                        aria-label={link.label}
                      >
                        <SocialIcon platform={link.platform} size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div
                className="rounded-lg p-6"
                style={{ background: "var(--color-surface)" }}
              >
                <h4
                  className="font-semibold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                >
                  The Chamuka Chronicle
                </h4>
                <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
                  Subscribe to our monthly newsletter for updates on governance, events, and community initiatives.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 rounded-lg border text-sm outline-none focus:border-[var(--color-accent)] transition-colors"
                    style={inputStyle}
                  />
                  <button
                    className="px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-all hover:shadow-lg"
                    style={{ background: "var(--color-accent)" }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Footer — dark section */}
        <div
          className="mt-16 -mx-6 -mb-20 px-6 py-12"
          style={{ background: "#0B1F13" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
              {/* Brand */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: "rgba(27, 67, 50, 0.5)",
                    color: "#D4A843",
                    fontFamily: "var(--font-display)",
                    border: "2px solid #D4A843",
                  }}
                >
                  VI
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#E8F0EC", fontFamily: "var(--font-display)" }}>
                    Chief Chamuka VI
                  </p>
                  <p className="text-[11px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Chisamba, Zambia
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
                {["About", "Resources", "Gallery", "Contact"].map((link) => (
                  <span key={link} className="text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {link}
                  </span>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-4 md:justify-end">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:scale-110"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                    aria-label={link.label}
                  >
                    <SocialIcon platform={link.platform} size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="h-px mb-6" style={{ background: "rgba(255,255,255,0.08)" }} />

            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                &copy; {new Date().getFullYear()} Office of His Royal Highness Chief Chamuka VI. All rights reserved.
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                Chamuka Palace, Chisamba, Central Province, Zambia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

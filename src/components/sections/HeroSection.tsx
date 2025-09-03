// src/components/sections/HeroSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, Download, Code, Zap } from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "React Specialist",
  "Python Engineer",
  "Django Architect",
  "UI/UX Enthusiast",
];

const STACK = ["React", "TypeScript", "Python", "Django", "Tailwind"];

export default function HeroSection() {
  /** Parallax glows */
  const { scrollY } = useScroll();
  const yLeft = useTransform(scrollY, [0, 600], [0, 50]);
  const yRight = useTransform(scrollY, [0, 600], [0, -30]);
  const ySoft = useTransform(scrollY, [0, 800], [0, 18]);
  const y = useSpring(ySoft, { stiffness: 100, damping: 26, restDelta: 0.001 });

  /** Typing effect (bug-safe: all state transitions timeboxed & cleaned) */
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIdx];
    const speed = deleting ? 45 : 95;
    const t = setTimeout(() => {
      if (deleting) {
        const next = full.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      } else {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next.length === full.length) {
          // small pause before deleting
          setTimeout(() => setDeleting(true), 1300);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  /** Mouse-follow radial (cheap & only on this section) */
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const onMouseMove = (e: React.MouseEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  /** Particles with deterministic seeds (avoid hydration mismatches) */
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => {
        // seeded positions/delays
        const sx = (i * 97) % 100; // 0..99
        const sy = (i * 57) % 100;
        const delay = (i * 0.23) % 2.3;
        const drift = 40 + ((i * 13) % 20); // 40..59
        return { sx, sy, delay, drift };
      }),
    []
  );

  return (
    <section
      id="hero"
      onMouseMove={onMouseMove}
      className="relative overflow-hidden pt-28 md:pt-36 section-padding min-h-[80vh] flex items-center"
    >
      {/* Background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              `radial-gradient(circle at 20% 20%, rgba(124,58,237,.22), transparent 42%),
               radial-gradient(circle at 80% 20%, rgba(34,211,238,.18), transparent 42%)`,
          }}
        />
        <motion.div
          style={{ y: yLeft }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute -left-1/2 top-1/4 h-[44rem] w-[44rem] rounded-full blur-3xl bg-fuchsia-700/18"
        />
        <motion.div
          style={{ y: yRight }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
          className="absolute -right-1/3 top-1/3 h-[40rem] w-[40rem] rounded-full blur-3xl bg-cyan-500/18"
        />
        {/* Subtle mouse radial */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(124,58,237,.18), transparent 60%)`,
          }}
        />
      </div>

      {/* Deterministic floating particles */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute block w-1 h-1 rounded-full bg-white/22"
            style={{ left: `${p.sx}%`, top: `${p.sy}%` }}
            animate={{ y: [0, -p.drift, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/45 backdrop-blur-xl px-5 py-2.5 text-sm text-zinc-200 mb-7"
        >
          <motion.span
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
          >
            <Sparkles className="text-fuchsia-400" size={16} />
          </motion.span>
          Available for opportunities • Lagos, NG
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
        >
          Hi, I’m{" "}
          <span className="gradient-text">AbdulRahman Ayinde Ojikutu</span>{" "}
          <span className="text-zinc-300">aka</span>{" "}
          <span className="gradient-text">TechBlaze</span>
        </motion.h1>

        {/* Dynamic role */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-3 flex items-center gap-2 text-xl md:text-2xl font-semibold text-zinc-300"
        >
          <Zap className="text-yellow-400" size={22} />
          <span>{text}<motion.span
            aria-hidden
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="text-fuchsia-400"
          >|</motion.span></span>
        </motion.div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-4 max-w-2xl text-zinc-300 text-lg md:text-xl leading-relaxed"
        >
          I craft <span className="text-fuchsia-400 font-medium">premium web experiences</span> with clean architecture,
          glossy UI, and smooth interactions—specializing in React/TypeScript on the front-end and Python/Django on the back.
        </motion.p>

        {/* Stack chips */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center gap-2"
        >
          <span className="text-zinc-400 text-sm font-medium">Built with:</span>
          {STACK.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.07 }}
              className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm text-zinc-200"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-2xl px-7 h-12 text-[15px] text-white bg-[linear-gradient(135deg,theme(colors.indigo.600),theme(colors.fuchsia.600))] shadow-[0_10px_30px_-10px_rgba(124,58,237,.6)] hover:brightness-110 transition-all active:scale-[.98]"
            aria-label="View Projects"
          >
            <Code size={18} />
            View My Work
            <motion.span
              aria-hidden
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="ml-1"
            >
              <ArrowRight size={18} />
            </motion.span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl px-7 h-12 text-[15px] text-zinc-200 border border-white/12 bg-white/5 hover:bg-white/10 transition-all active:scale-[.98]"
            aria-label="Contact Me"
          >
            Let’s Connect
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-2xl px-5 h-12 text-[15px] text-zinc-300 hover:text-white border border-white/12 bg-black/40 hover:bg-black/60 transition-all active:scale-[.98]"
            aria-label="Download Resume"
          >
            <Download size={18} />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}


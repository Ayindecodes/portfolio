// src/components/sections/ExperienceSection.tsx
"use client";

import { motion, useInView, cubicBezier } from "framer-motion"; // ⬅️ added cubicBezier
import { useRef } from "react";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Award,
  TrendingUp,
} from "lucide-react";

type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  bullets: string[];
  link?: string;
  type: "freelance" | "contract" | "fulltime";
  achievements: string[];
  impact: string;
};

const TIMELINE: Experience[] = [
  {
    company: "Freelance & Open Source",
    role: "Senior Full-Stack Developer",
    start: "2023",
    end: "Present",
    location: "Remote",
    type: "freelance",
    impact: "Built 8+ production applications serving 50K+ users",
    bullets: [
      "Architected and delivered 8+ production React/Next.js applications with 99.9% uptime",
      "Built scalable Django REST APIs serving 10K+ requests/day with Redis caching",
      "Optimized performance achieving 95+ Lighthouse scores via code-splitting and SSR",
    ],
    achievements: ["99.9% Uptime", "10K+ API Requests/day", "95+ Lighthouse Score"],
    link: "https://github.com/",
  },
  {
    company: "Tech Studio",
    role: "Senior Frontend Developer",
    start: "2022",
    end: "2023",
    location: "Lagos, Nigeria",
    type: "contract",
    impact: "Reduced development time by 40% across 5 products",
    bullets: [
      "Developed component library used across 5 products, reducing development time by ~40%",
      "Implemented WCAG 2.1 AA compliance, improving accessibility scores by ~60%",
    ],
    achievements: ["40% Time Reduction", "5 Products", "60% Accessibility Boost"],
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    start: "2021",
    end: "2022",
    location: "Lagos, Nigeria",
    type: "fulltime",
    impact: "Delivered 15+ client projects with 100% satisfaction rate",
    bullets: [
      "Delivered 15+ responsive websites and web applications for diverse clients",
      "Collaborated with design teams to implement pixel-perfect UI/UX designs",
      "Maintained and optimized existing codebases, improving performance by 35%",
    ],
    achievements: ["15+ Projects", "100% Client Satisfaction", "35% Performance Gain"],
  },
];

// Single brand accent everywhere (purple → pink)
const BRAND_BADGE =
  "bg-gradient-to-r from-purple-600 to-pink-600 text-white border border-white/20";
const BRAND_SOFT =
  "bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-white/10";
const BRAND_DOT = "bg-gradient-to-r from-purple-500 to-pink-500";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

// ✅ Use a typed easing function instead of number[]
const smoothEase = cubicBezier(0.25, 0.25, 0, 1);

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: smoothEase }, // ⬅️ replaced [0.25,0.25,0,1]
  },
};

const liVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* subtle brand glow background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04] bg-[radial-gradient(40rem_16rem_at_15%_10%,#a855f7,transparent_60%),radial-gradient(40rem_16rem_at_85%_5%,#ec4899,transparent_60%)]"
      />

      <div ref={ref} className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.35 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
            <Briefcase size={16} className="text-pink-400" />
            <span className="text-sm text-zinc-300">Professional Journey</span>
          </div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-zinc-300 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
            A steady track of impact, reliability, and thoughtful engineering.
          </p>
        </motion.div>

        {/* timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* spine */}
          <div
            aria-hidden
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent md:left-1/2 md:-translate-x-px"
          />

          <div className="space-y-16 md:space-y-20">
            {TIMELINE.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.article
                  key={`${item.company}-${idx}`}
                  variants={itemVariants}
                  className="relative md:grid md:grid-cols-2 md:gap-14 md:items-center"
                >
                  {/* node */}
                  <div
                    aria-hidden
                    className="absolute top-10 left-8 -translate-x-1/2 md:left-1/2 z-10"
                  >
                    <div className="relative">
                      <div
                        className={`h-4 w-4 rounded-full shadow-lg ${BRAND_DOT}`}
                      />
                      <div className="absolute inset-0 h-4 w-4 rounded-full opacity-20 animate-ping bg-gradient-to-r from-purple-500 to-pink-500" />
                    </div>
                  </div>

                  {/* card */}
                  <div
                    className={[
                      "relative rounded-3xl p-7 md:p-8 bg-black/35 backdrop-blur-xl",
                      "border border-white/10 hover:border-white/20 transition",
                      "shadow-[0_18px_50px_-30px_rgba(0,0,0,.7)]",
                      isLeft ? "md:ml-16" : "md:mr-16 md:col-start-2",
                    ].join(" ")}
                  >
                    {/* header row */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span
                        className={[
                          "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium",
                          BRAND_BADGE,
                        ].join(" ")}
                      >
                        {item.type === "freelance"
                          ? "Freelance"
                          : item.type === "contract"
                          ? "Contract"
                          : "Full-time"}
                      </span>

                      <div className="flex items-center gap-4 text-sm text-zinc-400">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={14} />
                          {item.start} — {item.end}
                        </span>
                        {item.location && (
                          <>
                            <span className="opacity-40">•</span>
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin size={14} />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* title + company */}
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {item.role}
                      </h3>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-zinc-400">at</span>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group/link inline-flex items-center gap-1.5 text-lg font-semibold text-white/90 hover:text-white"
                          >
                            {item.company}
                            <ArrowUpRight
                              size={18}
                              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            />
                          </a>
                        ) : (
                          <span className="text-lg font-semibold text-white/90">
                            {item.company}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* impact */}
                    <div
                      className={[
                        "mb-5 rounded-2xl p-4",
                        "border text-sm",
                        BRAND_SOFT,
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-2 text-zinc-300">
                        <TrendingUp size={16} className="text-pink-400" />
                        <span className="font-medium">Key Impact</span>
                      </div>
                      <p className="mt-1.5 text-white">{item.impact}</p>
                    </div>

                    {/* achievements */}
                    <div className="mb-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {item.achievements.map((a, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2"
                        >
                          <Award size={14} className="text-pink-400" />
                          <span className="text-sm text-zinc-300">{a}</span>
                        </div>
                      ))}
                    </div>

                    {/* bullets */}
                    <ul className="space-y-2.5">
                      {item.bullets.map((b, i) => (
                        <motion.li
                          key={i}
                          variants={liVariants}
                          className="flex gap-3 text-zinc-300 leading-relaxed"
                        >
                          <span
                            className={`mt-2 h-1.5 w-1.5 rounded-full ${BRAND_DOT} flex-shrink-0`}
                          />
                          <span>{b}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="text-center mt-20"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white">
              Ready to add value to your team?
            </h3>
            <p className="mt-2 text-zinc-400">
              Let’s talk about how I can help ship faster, cleaner, and smarter.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-medium text-white
                       bg-[linear-gradient(135deg,theme(colors.purple.600),theme(colors.pink.600))] shadow-[0_12px_32px_-16px_rgba(236,72,153,.5)]
                       hover:brightness-110 transition"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

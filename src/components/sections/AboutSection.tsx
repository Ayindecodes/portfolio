// src/components/sections/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Code2,
  Zap,
  Trophy,
  Target,
  Coffee,
  Sparkles,
  Github,
  Mail,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const CORE_STACK = [
  { name: "Python", level: 95, icon: "🐍", color: "from-yellow-400 to-yellow-600" },
  { name: "Django", level: 90, icon: "🎯", color: "from-green-400 to-green-600" },
  { name: "React", level: 92, icon: "⚛️", color: "from-cyan-400 to-cyan-600" },
  { name: "Next.js", level: 88, icon: "▲", color: "from-gray-400 to-gray-600" },
  { name: "TypeScript", level: 85, icon: "📘", color: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", level: 93, icon: "🎨", color: "from-purple-400 to-purple-600" },
] as const;

const ADDITIONAL_SKILLS = [
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Git",
  "REST APIs",
  "GraphQL",
  "Framer Motion",
  "Node.js",
  "Express",
  "FastAPI",
] as const;

const ACHIEVEMENTS = [
  { Icon: Trophy, title: "15+ Projects", desc: "Successfully delivered" },
  { Icon: Code2, title: "50k+ Lines", desc: "Of clean code written" },
  { Icon: Zap, title: "99%", desc: "Client satisfaction rate" },
  { Icon: Target, title: "Performance", desc: "Optimization expert" },
] as const;

const PERSONAL_STATS = [
  { label: "Based in", value: "Lagos, Nigeria", Icon: MapPin },
  { label: "Experience", value: "2+ Years", Icon: Calendar },
  { label: "Focus", value: "Full Stack", Icon: Briefcase },
  { label: "Learning", value: "Always", Icon: GraduationCap },
] as const;

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Soft background accents (decorative) */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 px-4 py-2 mb-4"
          >
            <User className="text-purple-400" size={16} />
            <span className="text-sm font-medium">About TechBlaze</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Crafting Digital</span> Experiences
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mt-3">
            Passionate full-stack developer with a love for clean code, beautiful UIs, and scalable solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-12">
          {/* Main row */}
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            {/* Story + stats */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <div className="glass p-6 md:p-8 relative group">
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.span
                      initial={{ rotate: -10, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    >
                      <Sparkles className="text-purple-400" size={22} />
                    </motion.span>
                    <h3 className="text-2xl font-bold">My Journey</h3>
                  </div>

                  <p className="text-zinc-300 leading-relaxed mb-4">
                    I’m <span className="text-purple-400 font-semibold">AbdulRahman Ayinde Ojikutu</span> —{" "}
                    <span className="text-pink-400 font-semibold">TechBlaze</span>. Based in Lagos, I craft digital
                    experiences that merge functionality with premium aesthetics.
                  </p>
                  <p className="text-zinc-300 leading-relaxed mb-6">
                    Over the past <span className="text-cyan-400 font-semibold">2+ years</span>, I’ve grown from
                    “Hello World” to architecting full-stack apps serving real users. I care about correctness,
                    performance, and delightful interactions.
                  </p>

                  {/* Personal stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {PERSONAL_STATS.map(({ label, value, Icon }, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <Icon className="text-purple-400" size={18} />
                        <div>
                          <div className="text-xs text-zinc-400">{label}</div>
                          <div className="text-sm font-semibold text-white">{value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-2 gap-4"
              >
                {ACHIEVEMENTS.map(({ Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="glass p-4 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-2">
                      <Icon className="text-purple-400" size={20} />
                    </div>
                    <div className="text-lg font-bold text-white">{title}</div>
                    <div className="text-sm text-zinc-400">{desc}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Core tech + additional skills */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              {/* Core technologies with progress bars */}
              <div className="glass p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="text-cyan-400" size={22} />
                  <h3 className="text-2xl font-bold">Core Technologies</h3>
                </div>

                <div className="space-y-5">
                  {CORE_STACK.map(({ name, level, icon, color }, i) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg" aria-hidden>
                            {icon}
                          </span>
                          <span className="font-medium text-white">{name}</span>
                        </div>
                        <span className="text-sm text-zinc-400 font-medium">{level}%</span>
                      </div>

                      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 + i * 0.06 }}
                        />
                        {/* gentle sheen */}
                        <motion.div
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional skills chips */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="glass p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-yellow-400" size={20} />
                  <h4 className="text-lg font-semibold">Additional Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {ADDITIONAL_SKILLS.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.04 }}
                      className="px-3 py-1.5 text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-lg transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass p-8 md:p-10 relative group"
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Coffee className="text-orange-400" size={22} />
                <h3 className="text-2xl font-bold">My Development Philosophy</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Clean Code",
                    desc:
                      "Not just functional — readable, maintainable, and elegant. Every line has a purpose.",
                    icon: "✨",
                  },
                  {
                    title: "User First",
                    desc:
                      "Technology should serve people. UX drives my decisions from day one.",
                    icon: "👤",
                  },
                  {
                    title: "Continuous Growth",
                    desc:
                      "The stack evolves fast; so do I. Constant learning, experimenting, and improving.",
                    icon: "🚀",
                  },
                ].map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="text-center"
                  >
                    <div className="text-3xl mb-2" aria-hidden>
                      {p.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">{p.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <p className="text-lg text-zinc-300 mb-6">
              Ready to bring your ideas to life? Let’s build something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white font-semibold rounded-xl shadow-[0_10px_30px_-12px_rgba(124,58,237,.5)] hover:brightness-110 transition"
              >
                Let’s Connect
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/ayindecodes"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition"
              >
                <Github size={18} />
                View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

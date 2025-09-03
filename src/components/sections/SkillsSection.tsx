// src/components/sections/SkillsSection.tsx
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Cpu,
  Blocks,
  Database,
  Cloud,
  GitBranch,
  ShieldCheck,
  Settings,
  Layers,
  Monitor,
  Server,
  Wrench,
  TrendingUp,
  Award,
  Filter,
} from "lucide-react";

type IconComp = React.ComponentType<{ size?: number; className?: string }>;

type Skill = {
  name: string;
  level: number; // 0–100
  Icon: IconComp;
  tag: "Frontend" | "Backend" | "DevOps" | "Tools";
  description: string;
  experience: string;
  color: string; // tailwind gradient classes e.g. "from-cyan-400 to-blue-500"
};

const SKILLS: Skill[] = [
  { name: "React",        level: 95, Icon: Code2,    tag: "Frontend", description: "Building dynamic, component-based UIs",   experience: "2+ years",  color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript",   level: 90, Icon: Code2,    tag: "Frontend", description: "Type-safe development & better DX",       experience: "1.5+ years",color: "from-blue-400 to-indigo-500" },
  { name: "Next.js",      level: 88, Icon: Layers,   tag: "Frontend", description: "Full-stack React framework",               experience: "1+ year",   color: "from-gray-400 to-gray-600" },
  { name: "Tailwind CSS", level: 95, Icon: Monitor,  tag: "Frontend", description: "Utility-first CSS framework",              experience: "2+ years",  color: "from-teal-400 to-cyan-500" },
  { name: "Python",       level: 92, Icon: Cpu,      tag: "Backend",  description: "Backend development & automation",         experience: "2+ years",  color: "from-yellow-400 to-orange-500" },
  { name: "Django",       level: 90, Icon: Blocks,   tag: "Backend",  description: "Robust Python web framework",              experience: "2+ years",  color: "from-green-400 to-emerald-500" },
  { name: "REST APIs",    level: 88, Icon: Settings, tag: "Backend",  description: "RESTful API design & development",         experience: "2+ years",  color: "from-purple-400 to-pink-500" },
  { name: "PostgreSQL",   level: 85, Icon: Database, tag: "DevOps",   description: "Advanced SQL & database design",           experience: "1.5+ years",color: "from-blue-500 to-purple-600" },
  { name: "Docker",       level: 80, Icon: Cloud,    tag: "DevOps",   description: "Containerization & deployment",            experience: "1+ year",   color: "from-sky-400 to-blue-600" },
  { name: "AWS",          level: 75, Icon: Cloud,    tag: "DevOps",   description: "Cloud services & infrastructure",          experience: "1+ year",   color: "from-orange-400 to-red-500" },
  { name: "Git/GitHub",   level: 95, Icon: GitBranch,tag: "Tools",    description: "Version control & collaboration",          experience: "2+ years",  color: "from-gray-500 to-gray-700" },
  { name: "Security/A11y",level: 78, Icon: ShieldCheck,tag: "Tools",  description: "Web security & accessibility",             experience: "1+ year",   color: "from-emerald-400 to-teal-600" },
];

const TABS = ["All", "Frontend", "Backend", "DevOps", "Tools"] as const;

const TAG_ICONS: Record<Exclude<typeof TABS[number], "All">, IconComp> = {
  Frontend: Monitor,
  Backend: Server,
  DevOps: Cloud,
  Tools: Wrench,
};

const TAG_COLORS: Record<Exclude<typeof TABS[number], "All">, string> = {
  Frontend: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
  Backend: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  DevOps: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  Tools: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
};

export default function SkillsSection() {
  const [active, setActive] = useState<typeof TABS[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? SKILLS : SKILLS.filter((s) => s.tag === active)),
    [active]
  );

  const stats = useMemo(() => {
    const total = SKILLS.length;
    const avg = Math.round(SKILLS.reduce((acc, s) => acc + s.level, 0) / total);
    const experts = SKILLS.filter((s) => s.level >= 90).length;
    return { total, avg, experts };
  }, []);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* soft bg accents */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 px-4 py-2 mb-4">
            <TrendingUp className="text-cyan-400" size={16} />
            <span className="text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Skills &</span> Technologies
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mt-3">
            A comprehensive view of my stack and proficiency across the full-stack.
          </p>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {[
            { label: "Technologies", value: stats.total, Icon: Code2 },
            { label: "Expert Level", value: stats.experts, Icon: Award },
            { label: "Avg Proficiency", value: `${stats.avg}%`, Icon: TrendingUp },
          ].map(({ label, value, Icon }, i) => (
            <div
              key={label}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                <Icon className="text-cyan-400" size={16} />
              </div>
              <div className="text-left">
                <div className="text-sm text-zinc-400">{label}</div>
                <div className="font-bold text-white">{value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          {TABS.map((tab) => {
            const isActive = active === tab;
            const Ico = tab === "All" ? (Filter as IconComp) : TAG_ICONS[tab as Exclude<typeof TABS[number], "All">];
            return (
              <motion.button
                key={tab}
                onClick={() => setActive(tab)}
                whileTap={{ scale: 0.96 }}
                className={[
                  "relative px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2 transition-colors",
                  isActive ? "text-white bg-white/10 border border-white/15" : "text-zinc-400 hover:text-white hover:bg-white/10",
                ].join(" ")}
              >
                <Ico size={14} />
                {tab}
                {isActive && (
                  <motion.span
                    layoutId="active-filter-outline"
                    className="absolute inset-0 rounded-xl ring-1 ring-white/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* skills grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.article
                key={`${skill.name}-${active}`}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -6 }}
                className="group glass p-6 relative overflow-hidden"
              >
                {/* subtle hover gradient */}
                <div
                  aria-hidden
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />

                {/* header */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color}`}>
                      <skill.Icon className="text-white" size={20} />
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${
                        TAG_COLORS[skill.tag]
                      } backdrop-blur-sm`}
                    >
                      {skill.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-white mb-2">{skill.name}</h3>
                  <p className="text-sm text-zinc-400 mb-3 leading-relaxed">{skill.description}</p>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
                    <Award size={12} />
                    <span>{skill.experience} experience</span>
                  </div>

                  {/* progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400 font-medium">Proficiency</span>
                      <span className="text-sm font-bold text-white">{skill.level}%</span>
                    </div>
                    <div className="relative h-3 w-full rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 110, damping: 20 }}
                      >
                        {/* sheen */}
                        <motion.div
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3 }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* level badge */}
                  <div className="mt-3 flex justify-center">
                    <span
                      className={[
                        "px-2 py-1 text-xs font-bold rounded-full",
                        skill.level >= 90
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : skill.level >= 80
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30",
                      ].join(" ")}
                    >
                      {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* bottom cta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <div className="glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Ready to Build Something Amazing?</h3>
            <p className="text-zinc-400 mb-6">
              Let’s leverage this stack to ship clean, scalable, and performant solutions.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-xl shadow-[0_10px_30px_-12px_rgba(14,165,233,.5)] hover:brightness-110 transition"
            >
              View My Projects
              <Code2 size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

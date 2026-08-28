"use client";

import { getSkillCategories } from "@/server/modules/skills/skills.service";
import SkillCard from "./SkillCard";

/**
 * Accent colors per category — soft tones đồng bộ palette
 * 60% white/slate → 30% category accent → 10% indigo CTA
 */
const categoryAccents = [
  {
    border: "border-indigo-200",
    bg: "bg-indigo-50/40",
    badge: "bg-indigo-100 text-indigo-700",
    dot: "bg-indigo-400",
  },
  {
    border: "border-emerald-200",
    bg: "bg-emerald-50/40",
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-400",
  },
  {
    border: "border-amber-200",
    bg: "bg-amber-50/40",
    badge: "bg-amber-100 text-amber-700",
    dot: "bg-amber-400",
  },
];

export default function SkillsSection() {
  const skillCategories = getSkillCategories();

  if (!skillCategories || skillCategories.length === 0) {
    return (
      <section id="skills" className="py-20 px-6">
        <p className="text-center text-slate-400">No skills data available.</p>
      </section>
    );
  }

  return (
    <section id="skills" className="w-full overflow-hidden">
      <div className="space-y-6">
        {/* Skill Categories */}
        <div className="space-y-4 sm:space-y-6">
          {skillCategories.map((category, catIdx) => {
            const accent = categoryAccents[catIdx % categoryAccents.length];

            return (
              <div
                key={category.title}
                className={`
                  rounded-2xl border ${accent.border} ${accent.bg}
                  p-3 sm:p-6 transition-colors duration-300
                `}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span
                    className={`
                      inline-flex items-center gap-1.5 sm:gap-2 rounded-full
                      px-3 py-1 sm:px-4 sm:py-1.5
                      text-xs sm:text-sm font-semibold ${accent.badge}
                    `}
                  >
                    <span className="text-sm sm:text-base">{category.emoji}</span>
                    {category.title}
                  </span>
                  <div className={`h-px flex-1 ${accent.border}`} />
                  {/* Angular accent — sharp contrast with rounded badge */}
                  <div className={`w-2 h-2 ${accent.dot} rotate-45`} />
                </div>

                {/* Skill Cards - flex wrap for natural reflow */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={skillIdx}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

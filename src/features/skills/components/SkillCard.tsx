"use client";

import { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const levelDots = Array.from({ length: 5 }, (_, i) => i < skill.level);

  return (
    <div className="group relative w-[70px] sm:w-[90px]">
      {/* 3D Block — lighter for small cards */}
      <div
        className="
          absolute inset-0 rounded-xl bg-slate-200
          translate-x-1 translate-y-1
        "
        style={{ animationDelay: `${index * 60}ms` }}
      />

      {/* Card */}
      <div
        className="
          relative z-10 flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl
          border border-slate-200 bg-white p-2 sm:p-3 h-full
          transition-colors duration-300 ease-out
          group-hover:border-indigo-300
        "
        style={{ animationDelay: `${index * 60}ms` }}
      >
        {/* Glow effect on hover */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-xl opacity-0
            transition-opacity duration-300 group-hover:opacity-100
            bg-gradient-to-br from-indigo-50 via-transparent to-violet-50
          "
        />

        {/* Icon */}
        <span className="relative text-xl sm:text-2xl select-none">
          {skill.icon}
        </span>

        {/* Name */}
        <span className="relative text-[10px] sm:text-xs font-semibold text-slate-700 text-center leading-tight">
          {skill.name}
        </span>

        {/* Level dots */}
        <div className="relative flex gap-0.5 sm:gap-1">
          {levelDots.map((filled, i) => (
            <span
              key={i}
              className={`
                block h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full transition-colors duration-300
                ${
                  filled
                    ? "bg-slate-700 group-hover:bg-indigo-500"
                    : "bg-slate-200"
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

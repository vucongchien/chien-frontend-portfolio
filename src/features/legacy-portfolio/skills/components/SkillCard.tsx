import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const dots = [1, 2, 3, 4, 5];

  return (
    <div
      className="group relative w-16 sm:w-20"
      aria-label={`Kỹ năng ${skill.name}, mức độ ${skill.level} trên 5`}
    >
      {/* 3D Block — lighter for small cards */}
      <div
        className="
          absolute inset-0 rounded-xl bg-slate-200
          translate-x-1 translate-y-1
        "
      />

      {/* Card */}
      <div
        className="
          relative z-10 flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl
          border border-slate-200 bg-white p-2 sm:p-3 h-full
          transition-colors duration-300 ease-out
          group-hover:border-indigo-300
        "
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
        <span className="relative text-xs font-serif font-semibold text-slate-700 text-center leading-tight">
          {skill.name}
        </span>

        {/* Level dots */}
        <div className="relative flex gap-0.5 sm:gap-1">
          {dots.map((dotNumber) => {
            const filled = dotNumber <= skill.level;
            return (
              <span
                key={`${skill.name}-level-${dotNumber}`}
                className={`
                  block h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full transition-colors duration-300
                  ${
                    filled
                      ? "bg-slate-700 group-hover:bg-indigo-500"
                      : "bg-slate-200"
                  }
                `}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

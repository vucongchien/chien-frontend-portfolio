import Image from "next/image";
import Diamond from "@/components/ui/Diamond";

interface ProjectCardProps {
  title: string;
  image: string;
  tech: string[];
}

export default function ProjectCard({
  title,
  image,
  tech,
}: ProjectCardProps) {
  return (
    <div className="group relative w-fit max-w-[260px]">
      {/* Card chính */}
      <div
        className="
          relative z-10 overflow-hidden rounded-xl
          border border-slate-200 bg-white
          transition-colors duration-300 ease-out
          group-hover:border-indigo-300
        "
      >
        {/* Diamond accent — top right corner */}
        <div className="absolute top-3 right-3 z-20 opacity-60">
          <Diamond size="sm" color="indigo" />
        </div>

        {/* Image */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            width={260}
            height={146}
            className="
              h-full w-full object-cover
              transition-transform duration-500 ease-out
              group-hover:scale-105
            "
          />
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 space-y-2.5">
          {/* Title */}
          <h3 className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
            {title}
          </h3>

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span
                key={t}
                className="
                  inline-flex items-center rounded-full
                  bg-slate-100 px-2 py-0.5
                  text-[10px] sm:text-xs font-medium text-slate-600
                  border border-slate-200/60
                  transition-colors duration-200
                  group-hover:bg-indigo-50 group-hover:text-indigo-700
                  group-hover:border-indigo-200/60
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

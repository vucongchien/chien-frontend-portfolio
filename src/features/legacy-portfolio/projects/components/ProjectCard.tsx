import Image from "next/image";
import Badge from "@/components/ui/Badge";

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
        {/* Diamond accent — đúng 1 thẻ duy nhất chuẩn bản gốc commit init, nằm chính xác góc chéo 45 độ */}
        <div className="absolute top-3 right-3 z-20 w-2 h-2 bg-indigo-600 rotate-45 opacity-60 pointer-events-none" />

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
              <Badge key={t} variant="tech">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

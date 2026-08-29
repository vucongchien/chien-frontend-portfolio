import type { ReactNode } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectRowProps {
  title: string;
  image: string;
  tech: string[];
  reverse?: boolean;
  children: ReactNode;
}

export default function ProjectRow({
  title,
  image,
  tech,
  reverse,
  children,
}: ProjectRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-center">
      {/* LEFT */}
      <div className="md:col-start-1">
        {reverse ? (
          children
        ) : (
          <ProjectCard title={title} image={image} tech={tech} />
        )}
      </div>

      {/* RIGHT */}
      <div className="md:col-start-2">
        {reverse ? (
          <ProjectCard title={title} image={image} tech={tech} />
        ) : (
          children
        )}
      </div>
    </div>
  );
}

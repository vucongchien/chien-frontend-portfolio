import ProjectRow from "./ProjectRow";
import { getProjects } from "@/server/modules/projects/projects.service";

export default function ProjectsSection() {
  const projects = getProjects();

  return (
    <section id="projects">
      <div className="mx-auto">
        <ul className="space-y-5">
          {projects.map((project) => (
            <li key={project.id} className="relative group/li">
              {/* 3D block behind li */}
              <div className="absolute inset-0 rounded-2xl bg-slate-200 translate-y-0.5" />
              <div className="relative z-10 p-4 sm:p-6 rounded-2xl border border-slate-200 bg-white transition-colors duration-300">
                {/* Period Badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 mb-4 text-xs font-medium text-indigo-600 border border-indigo-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  {project.period}
                </span>

                <ProjectRow
                  title={project.title}
                  image={project.image}
                  tech={project.tech}
                  reverse={project.reverse}
                >
                  <div className="space-y-4 max-w-lg break-words">
                    {/* Description */}
                    <p className="text-slate-600">
                      {project.id === "ecommerce-ai-agent" ? (
                        <>
                          Web bán hàng tích hợp{" "}
                          <b className="text-slate-800">AI Agent</b> tư vấn sản
                          phẩm cho khách hàng, hỗ trợ trải nghiệm mua sắm thông
                          minh.
                        </>
                      ) : project.id === "interactive-novel" ? (
                        <>
                          Website cho phép tạo câu chuyện được sinh ra bởi{" "}
                          <b className="text-slate-800">AI</b>, người dùng có thể
                          dẫn dắt mạch truyện theo ý muốn.
                        </>
                      ) : (
                        <>
                          Website giới thiệu bộ anime{" "}
                          <b className="text-slate-800">My Dress Up Darling</b>{" "}
                          với giao diện đẹp mắt và trải nghiệm trực quan.
                        </>
                      )}
                    </p>

                    {/* Roles */}
                    <div>
                      <p className="font-semibold text-sm mb-1 text-slate-800">
                        Vai trò:
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1 text-slate-600">
                        {project.roles.map((role, rIdx) => (
                          <li key={rIdx}>{role}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Learnings */}
                    <div>
                      <p className="font-semibold text-sm mb-1 text-slate-800">
                        Học được:
                      </p>
                      <p className="text-sm text-slate-500">
                        {project.learnings}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition-all duration-200 hover:bg-indigo-500 hover:shadow-md"
                        >
                          Live Demo ↗
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:border-indigo-200 hover:text-indigo-600"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </ProjectRow>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

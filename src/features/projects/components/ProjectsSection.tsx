import ProjectRow from "./ProjectRow";
import { getProjects } from "@/server/modules/projects/projects.service";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

function renderProjectDescription(id: string, fallback: string) {
  if (id === "ecommerce-ai-agent") {
    return (
      <>
        Web bán hàng tích hợp{" "}
        <b className="font-semibold text-slate-800">AI Agent</b> tư vấn sản
        phẩm cho khách hàng, hỗ trợ trải nghiệm mua sắm thông minh.
      </>
    );
  }
  if (id === "interactive-novel") {
    return (
      <>
        Website cho phép tạo câu chuyện được sinh ra bởi{" "}
        <b className="font-semibold text-slate-800">AI</b>, người dùng có thể
        dẫn dắt mạch truyện theo ý muốn.
      </>
    );
  }
  if (id === "my-dress-up-darling") {
    return (
      <>
        Website giới thiệu bộ anime{" "}
        <b className="font-semibold text-slate-800">My Dress Up Darling</b> với
        giao diện đẹp mắt và trải nghiệm trực quan.
      </>
    );
  }
  return fallback;
}

export default function ProjectsSection() {
  const projects = getProjects();

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-12 text-center">
        <p className="text-slate-400 text-sm">Chưa có dữ liệu dự án.</p>
      </section>
    );
  }

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
                <Badge variant="period" className="mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  {project.period}
                </Badge>

                <ProjectRow
                  title={project.title}
                  image={project.image}
                  tech={project.tech}
                  reverse={project.reverse}
                >
                  <div className="space-y-4 max-w-lg break-words">
                    {/* Description với từ khóa được bôi đậm chuẩn commit init */}
                    <p className="text-slate-600">
                      {renderProjectDescription(project.id, project.description)}
                    </p>

                    {/* Roles */}
                    <div>
                      <p className="font-semibold text-sm mb-1 text-slate-800">
                        Vai trò:
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1 text-slate-600">
                        {project.roles.map((role) => (
                          <li key={`${project.id}-${role}`}>{role}</li>
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
                        <Button
                          variant="primary"
                          size="sm"
                          href={project.liveUrl}
                          target="_blank"
                        >
                          Live Demo ↗
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          href={project.githubUrl}
                          target="_blank"
                        >
                          GitHub
                        </Button>
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

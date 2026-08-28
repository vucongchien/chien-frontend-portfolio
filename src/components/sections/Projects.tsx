import ProjectRow from "../ProjectRow";

export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto">
        {/* Projects */}
        <ul className="space-y-5">
          {/* ─── Project 1: E-commerce AI Agent ─── */}
          <li className="relative group/li">
            {/* 3D block behind li */}
            <div
              className="
                absolute inset-0 rounded-2xl bg-slate-200
                 translate-y-0.5
              "
            />
            <div
              className="
                relative z-10 p-4 sm:p-6 rounded-2xl
                border border-slate-200 bg-white
                transition-colors duration-300

              "
            >
              <span
                className="
                  inline-flex items-center gap-1.5 rounded-full
                  bg-white px-3 py-1 mb-4
                  text-xs font-medium text-indigo-600
                  border border-indigo-100
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                08/2025 — 01/2026 · Team 3 người
              </span>

              <ProjectRow
                title="E-commerce AI Agent"
                image="/project1.png"
                tech={[
                  "Next.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "CopilotKit",
                  "Supabase (PostgreSQL)",
                  "Google ADK",
                  "FastAPI"
                ]}
                reverse={false}
              >
                <div className="space-y-4 max-w-lg break-words">
                  <p className="text-slate-600">
                    Web bán hàng tích hợp <b className="text-slate-800">AI Agent</b> tư vấn sản phẩm cho
                    khách hàng, hỗ trợ trải nghiệm mua sắm thông minh.
                  </p>

                  <div>
                    <p className="font-semibold text-sm mb-1 text-slate-800">Vai trò:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-slate-600">
                      <li>Sử dụng Next.js làm frontend</li>
                      <li>CopilotKit làm frontend tool cho Agent</li>
                      <li>Thiết kế database &amp; hỗ trợ triển khai</li>
                      <li>Thiết kế và triển khai backend bằng FastAPI</li>
                      <li>Giao tiếp với team để thống nhất ý tưởng và triển khai</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-1 text-slate-800">Học được:</p>
                    <p className="text-sm text-slate-500">
                      Cấu trúc AI Agent, MCP, AgUI, SSR, ISR
                    </p>
                  </div>

                  <div className="flex gap-3 pt-3">
                    <a
                      href="https://copilot-chan-fe-v2.vercel.app/"
                      className="
                        inline-flex items-center gap-1 rounded-lg
                        bg-indigo-600 px-3 py-1.5
                        text-xs font-medium text-white
                        transition-all duration-200
                        hover:bg-indigo-500 hover:shadow-md
                      "
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href="https://github.com/copilot-chan/copilot-chan-fe-v2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-1 rounded-lg
                        border border-slate-300 bg-white px-3 py-1.5
                        text-xs font-medium text-slate-700
                        transition-all duration-200
                        hover:bg-slate-50 hover:border-indigo-200 hover:text-indigo-600
                      "
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </ProjectRow>
            </div>
          </li>

          {/* ─── Project 2: Interactive Novel ─── */}
          <li className="relative group/li">

          {/* 3D block behind li */}
            <div
              className="
                absolute inset-0 rounded-2xl bg-slate-200
                translate-y-0.5
              "
            />
            <div
              className="
                relative z-10 p-4 sm:p-6 rounded-2xl
                border border-slate-200 bg-white
                transition-colors duration-300
              "
            >
              <span
                className="
                  inline-flex items-center gap-1.5 rounded-full
                  bg-white px-3 py-1 mb-4
                  text-xs font-medium text-indigo-600
                  border border-indigo-100
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                03/2025 — 05/2025 · Team 3 người
              </span>

              <ProjectRow
                title="Interactive Novel"
                image="/project2.png"
                tech={["React", "Vite", "Express", "PostgreSQL"]}
                reverse={false}
              >
                <div className="space-y-4 max-w-lg break-words">
                  <p className="text-slate-600">
                    Website cho phép tạo câu chuyện được sinh ra bởi <b className="text-slate-800">AI</b>,
                    người dùng có thể dẫn dắt mạch truyện theo ý muốn.
                  </p>

                  <div>
                    <p className="font-semibold text-sm mb-1 text-slate-800">Vai trò:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-slate-600">
                      <li>Sử dụng React làm frontend</li>
                      <li>Hỗ trợ chức năng Auth Google</li>
                      <li>Hỗ trợ thiết kế database</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-1 text-slate-800">Học được:</p>
                    <p className="text-sm text-slate-500">
                      Quản lý state cơ bản trong frontend, Custom Hook
                    </p>
                  </div>

                  <div className="flex gap-3 pt-3">
                    <a
                      href="https://visual-story.vercel.app/"
                      className="
                        inline-flex items-center gap-1 rounded-lg
                        bg-indigo-600 px-3 py-1.5
                        text-xs font-medium text-white
                        transition-all duration-200
                        hover:bg-indigo-500 hover:shadow-md
                      "
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href="https://github.com/vucongchien/visual-story"
                      className="
                        inline-flex items-center gap-1 rounded-lg
                        border border-slate-300 bg-white px-3 py-1.5
                        text-xs font-medium text-slate-700
                        transition-all duration-200
                        hover:bg-slate-50 hover:border-indigo-200 hover:text-indigo-600
                      "
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </ProjectRow>
            </div>
          </li>

          {/* ─── Project 3: My Dress Up Darling ─── */}
          <li className="relative group/li">

          {/* 3d block behind li */}
            <div
              className="
                absolute inset-0 rounded-2xl bg-slate-200
                translate-y-0.5
              "
            />
            <div
              className="
                relative z-10 p-4 sm:p-6 rounded-2xl
                border border-slate-200 bg-white
                transition-colors duration-300
              "
            >
              <span
                className="
                  inline-flex items-center gap-1.5 rounded-full
                  bg-white px-3 py-1 mb-4
                  text-xs font-medium text-indigo-600
                  border border-indigo-100
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                03/2025 · Team 3 người · 12 ngày
              </span>

              <ProjectRow
                title="My Dress Up Darling"
                image="/project3.png"
                tech={["HTML", "CSS", "JavaScript"]}
                reverse={false}
              >
                <div className="space-y-4 max-w-lg break-words">
                  <p className="text-slate-600">
                    Website giới thiệu bộ anime <b className="text-slate-800">My Dress Up Darling</b> với
                    giao diện đẹp mắt và trải nghiệm trực quan.
                  </p>

                  <div>
                    <p className="font-semibold text-sm mb-1 text-slate-800">Vai trò:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-slate-600">
                      <li>Thiết kế Figma</li>
                      <li>Làm page Comics</li>
                      <li>Hỗ trợ viết code HTML cho page Home</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-1 text-slate-800">Học được:</p>
                    <p className="text-sm text-slate-500">
                      Layout trong CSS, các thẻ HTML, Tailwind cơ bản
                    </p>
                  </div>

                  <div className="flex gap-3 pt-3">
                    <a
                      href="https://vucongchien.github.io/BTWEB/"
                      className="
                        inline-flex items-center gap-1 rounded-lg
                        bg-indigo-600 px-3 py-1.5
                        text-xs font-medium text-white
                        transition-all duration-200
                        hover:bg-indigo-500 hover:shadow-md
                      "
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href="https://github.com/vucongchien/BTWEB"
                      className="
                        inline-flex items-center gap-1 rounded-lg
                        border border-slate-300 bg-white px-3 py-1.5
                        text-xs font-medium text-slate-700
                        transition-all duration-200
                        hover:bg-slate-50 hover:border-indigo-200 hover:text-indigo-600
                      "
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </ProjectRow>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

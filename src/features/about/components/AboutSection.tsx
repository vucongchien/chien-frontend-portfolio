import ProjectsSection from "@/features/projects/components/ProjectsSection";
import SkillsSection from "@/features/skills/components/SkillsSection";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionDivider from "@/components/ui/SectionDivider";
import ChatBubble from "@/components/ui/ChatBubble";
import Badge from "@/components/ui/Badge";

export default function AboutSection() {
  return (
    <div id="about">
      {/* ══════════════════════════════════════
         Band 1: XANH — About Intro
         ══════════════════════════════════════ */}
      <section className="bg-indigo-50/60 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Section heading */}
          <FadeInOnScroll animation="fadeInUp" className="mx-auto text-center">
            <SectionHeading>About me</SectionHeading>
          </FadeInOnScroll>

          {/* AI Intro bubble */}
          <FadeInOnScroll animation="slideInLeft">
            <ChatBubble sender="ai" variant="white" size="2xl">
              <h3 className="text-base font-semibold text-slate-800">
                Hey there 👋
              </h3>
              <p className="text-slate-600">
                I&apos;m{" "}
                <span className="font-bold text-indigo-600">
                  Vũ Công Chiến
                </span>
                , a Software Engineer focused on building modern web
                applications.
              </p>
              <p className="text-slate-600">
                I enjoy working with <b>AI Agents</b>, developing frontend with{" "}
                <b>React</b>, <b>Next.js</b> and backend with <b>Node.js</b>,{" "}
                <b>FastAPI</b>, exploring clean UI architecture, performance
                optimization and scalable design systems.
              </p>
              <p className="text-slate-500">
                Student at PTIT University — Software Engineering
              </p>
            </ChatBubble>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
         Band 2: TRẮNG — Projects
         ══════════════════════════════════════ */}
      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Divider */}
          <FadeInOnScroll animation="fadeIn">
            <SectionDivider label="projects" variant="slate" />
          </FadeInOnScroll>

          {/* User question */}
          <FadeInOnScroll animation="slideInRight">
            <ChatBubble sender="user" variant="indigo">
              <p className="text-indigo-700">
                I want to see chien&apos;s project
              </p>
            </ChatBubble>
          </FadeInOnScroll>

          {/* AI answer: Projects */}
          <FadeInOnScroll animation="slideInLeft">
            <ChatBubble sender="ai" variant="slate" size="4xl">
              <Badge variant="pill-white">
                I have three projects 🚀
              </Badge>
              <ProjectsSection />
            </ChatBubble>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
         Band 3: XANH — Skills
         ══════════════════════════════════════ */}
      <section className="bg-indigo-50/60 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Divider */}
          <FadeInOnScroll animation="fadeIn">
            <SectionDivider label="skills" variant="indigo" />
          </FadeInOnScroll>

          {/* User question */}
          <FadeInOnScroll animation="slideInRight">
            <ChatBubble sender="user" variant="white">
              <p className="text-indigo-700">What skills does chien have?</p>
            </ChatBubble>
          </FadeInOnScroll>

          {/* AI answer: Skills */}
          <FadeInOnScroll animation="slideInLeft">
            <ChatBubble sender="ai" variant="white" size="5xl">
              <Badge variant="pill-slate">
                Here are my skills ⚡
              </Badge>
              <SkillsSection />
            </ChatBubble>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}

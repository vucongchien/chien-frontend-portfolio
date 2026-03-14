import Image from "next/image";
import Projects from "./Projects";
import Skills from "./Skills";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export default function Abount() {
  return (
    <div id="about">
      {/* ══════════════════════════════════════
         Band 1: XANH — About Intro
         ══════════════════════════════════════ */}
      <section className="bg-indigo-50/60 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">

          {/* Section heading */}
          <FadeInOnScroll animation="fadeInUp" className="mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 inline-flex items-center gap-2">
              About me
              <span className="inline-block w-2 h-2 bg-indigo-600 rotate-45" />
            </h2>
          </FadeInOnScroll>

          {/* AI Intro bubble — slide from LEFT */}
          <FadeInOnScroll animation="slideInLeft" className="flex flex-col sm:flex-row gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-full overflow-hidden border border-slate-200">
              <Image src="/undraw_refreshing-beverage_w8al.svg" alt="avatar" width={56} height={56} />
            </div>
            <div className="min-w-0 max-w-2xl rounded-2xl bg-white border border-slate-200 p-4 sm:p-6 space-y-4">
              <h3 className="text-base font-semibold text-slate-800">Hey there 👋</h3>
              <p className="text-slate-600">
                I&apos;m <span className="font-bold text-indigo-600">Vũ Công Chiến</span>,
                a frontend developer focused on building modern web applications.
              </p>
              <p className="text-slate-600">
                I enjoy working with <b>React</b>, <b>Next.js</b> and{" "}
                <b>TypeScript</b>, exploring clean UI architecture, performance
                optimization and scalable design systems.
              </p>
              <p className="text-slate-500">Student at PTIT University — Software Engineering</p>
            </div>
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
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="w-1.5 h-1.5 bg-indigo-400 rotate-45" />
              <span className="text-xs text-slate-400 font-mono">projects</span>
              <span className="w-1.5 h-1.5 bg-indigo-400 rotate-45" />
              <div className="flex-1 h-px bg-slate-200" />
            </div>
          </FadeInOnScroll>

          {/* User question — slide from RIGHT */}
          <FadeInOnScroll animation="slideInRight" className="flex sm:flex-row items-end sm:items-center justify-end gap-4">
            <div className="max-w-2xl rounded-2xl bg-indigo-50 border border-indigo-100 px-6 py-2 h-fit my-auto">
              <p className="text-indigo-700">I want to see chien&apos;s project</p>
            </div>
            <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-full overflow-hidden border border-slate-200">
              <Image src="/undraw_refreshing-beverage_w8al.svg" alt="avatar" width={56} height={56} />
            </div>
          </FadeInOnScroll>

          {/* AI answer: Projects — slide from LEFT */}
          <FadeInOnScroll animation="slideInLeft" className="flex flex-col sm:flex-row gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-full overflow-hidden border border-slate-200">
              <Image src="/undraw_refreshing-beverage_w8al.svg" alt="avatar" width={56} height={56} />
            </div>
            <div className="min-w-0 w-full sm:max-w-4xl rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-6 space-y-4">
              <div className="px-4 py-1.5 border border-slate-200 w-fit rounded-full bg-white">
                <p className="text-sm text-slate-600">I have three projects 🚀</p>
              </div>
              <Projects />
            </div>
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
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-indigo-200" />
              <span className="w-1.5 h-1.5 bg-indigo-400 rotate-45" />
              <span className="text-xs text-indigo-400 font-mono">skills</span>
              <span className="w-1.5 h-1.5 bg-indigo-400 rotate-45" />
              <div className="flex-1 h-px bg-indigo-200" />
            </div>
          </FadeInOnScroll>

          {/* User question — slide from RIGHT */}
          <FadeInOnScroll animation="slideInRight" className="flex flex-col-reverse sm:flex-row items-end sm:items-center justify-end gap-4">
            <div className="max-w-2xl rounded-2xl bg-white border border-indigo-100 px-6 py-2 h-fit my-auto">
              <p className="text-indigo-700">What skills does chien have?</p>
            </div>
            <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-full overflow-hidden border border-slate-200">
              <Image src="/undraw_refreshing-beverage_w8al.svg" alt="avatar" width={56} height={56} />
            </div>
          </FadeInOnScroll>

          {/* AI answer: Skills — slide from LEFT */}
          <FadeInOnScroll animation="slideInLeft" className="flex flex-col sm:flex-row gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-full overflow-hidden border border-slate-200">
              <Image src="/undraw_refreshing-beverage_w8al.svg" alt="avatar" width={56} height={56} />
            </div>
            <div className="min-w-0 w-full sm:max-w-5xl rounded-2xl bg-white border border-slate-200 p-4 sm:p-6 space-y-4">
              <div className="px-4 py-1.5 border border-slate-200 w-fit rounded-full bg-slate-50">
                <p className="text-sm text-slate-600">Here are my skills ⚡</p>
              </div>
              <Skills />
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}

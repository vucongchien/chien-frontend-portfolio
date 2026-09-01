import type { Metadata } from "next";
import { HeroSection2026 } from "@/features/portfolio-2026/HeroSection2026";
import { AboutMeSection2026 } from "@/features/portfolio-2026/AboutMeSection2026";
import { ExperienceSection2026 } from "@/features/portfolio-2026/ExperienceSection2026";
import { ProjectsSection2026 } from "@/features/portfolio-2026/ProjectsSection2026";
import { CredentialsSection2026 } from "@/features/portfolio-2026/CredentialsSection2026";
import Footer from "@/components/layout/Footer";
import { MorphingBrandName2026 } from "@/features/portfolio-2026/MorphingBrandName2026";

export const metadata: Metadata = {
  title: "Vũ Công Chiến · Portfolio 2026",
  description: "Minimalist Editorial Portfolio 2026 of Vu Cong Chien (Software Engineer)",
};

export default function Portfolio2026Page() {
  return (
    <main className="w-full min-h-screen bg-white text-black relative">
      <MorphingBrandName2026 anchorId="hero-name-placeholder" name="VŨ CÔNG CHIẾN" />
      <HeroSection2026 />
      <AboutMeSection2026 />
      <ExperienceSection2026 />
      <ProjectsSection2026 />
      <CredentialsSection2026 />
      <Footer />
    </main>
  );
}

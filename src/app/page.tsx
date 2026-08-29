import ScrollIndicator from "@/components/layout/ScrollIndicator";
import HeroSection from "@/features/hero/components/HeroSection";
import AboutSection from "@/features/about/components/AboutSection";
import ContactSection from "@/features/contact/components/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-y-hidden">
      <ScrollIndicator />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

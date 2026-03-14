
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/Navbar";
import Projects from "@/components/sections/Projects";
import Abount from "@/components/sections/Abount";
import Skills from "@/components/sections/Skills";
import ScrollIndicator from "@/components/ui/ScrollIndicator";


export default function Home() {
  return (
    <main className="min-h-screen overflow-y-hidden">
      <ScrollIndicator />
      {/* <Navbar /> */}
      <Hero />
      <Abount/>
      {/* <Skills/>
      <Projects /> */}
      <Contact />
      <Footer />
    </main>
  );
}

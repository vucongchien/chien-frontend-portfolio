
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import Abount from "@/components/sections/Abount";
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

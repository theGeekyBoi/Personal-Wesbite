
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorSpotlight from "@/components/CursorSpotlight";
const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans relative">
      <AnimatedBackground />
      <CursorSpotlight />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Leadership />
      <Awards />
      <Contact />
    </div>
  );
};

export default Index;


import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <Avatar className="w-32 h-32 mx-auto mb-8 shadow-md">
          <AvatarImage src="/lovable-uploads/345ee6bf-7087-4013-bf4e-4daa7c82c55e.png" alt="Aaditya Sharma" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <h1 className="text-6xl md:text-8xl font-thin text-black mb-6 tracking-tight">
          Aaditya Sharma
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
          Computer Engineer | Robotics Innovator | Cool guy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </Button>
          <a href="https://drive.google.com/file/d/1AkAncwnqihNj32Tw1eltdqR9z00_tjdw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
            >
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

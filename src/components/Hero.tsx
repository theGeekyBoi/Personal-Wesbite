
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-thin text-black mb-6 tracking-tight">
          Aaditya Sharma
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
          Computer Engineer | Robotics Innovator | Cool Guy
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
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
            >
              Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

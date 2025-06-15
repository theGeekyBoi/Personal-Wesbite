
import { Button } from "./ui/button";
import { Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 bg-white px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-thin text-black mb-8 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Ready to discuss opportunities, collaborations, or innovative projects? 
            I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="mailto:aaditya07@vt.edu">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
              >
                Email Me
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/aaditya-sharma-0611002b1/" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
          </div>
          
          <p className="text-gray-500">aaditya07@vt.edu</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

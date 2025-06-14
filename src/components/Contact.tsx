
import { Button } from "./ui/button";

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
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
            >
              Email Me
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
            >
              LinkedIn
            </Button>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 mb-4">aaditya07@vt.edu</p>
            <p className="text-sm text-gray-400">
              <a 
                href="https://tiny.cc/NestleLetter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
              >
                View Nestlé Commendation Letter
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

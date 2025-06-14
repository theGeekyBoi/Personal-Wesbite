
const About = () => {
  return (
    <section className="py-32 bg-gray-50 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-thin text-black mb-8 tracking-tight">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm passionate about control systems, robotics, machine learning, and innovation. 
              As a Computer Engineering student at Virginia Tech, I combine technical expertise 
              with creative problem-solving to build solutions that make a real impact.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently serving as a Statistical Process Control Intern at Micron Technology, 
              where I work on R2R control for semiconductors and process optimization.
            </p>
          </div>
          <div className="animate-scale-in space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-medium text-black mb-4">Education</h3>
              <p className="text-gray-600 mb-2">B.S. in Computer Engineering</p>
              <p className="text-gray-600 mb-2">Virginia Tech</p>
              <p className="text-gray-600">GPA: 3.73 | Dean's List | Honors College</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-medium text-black mb-4">Current Role</h3>
              <p className="text-gray-600 mb-2">Statistical Process Control Intern</p>
              <p className="text-gray-600">Micron Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

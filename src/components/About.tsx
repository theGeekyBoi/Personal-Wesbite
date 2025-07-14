const About = () => {
  const hobbies = [
    "Music", "Tennis", "Movies", "Dinosaurs", "Books", "Coffee", "Cats", "NBA", "Debate", "Cooking"
  ];

  return (
    <section className="py-32 bg-gray-50 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-thin text-black mb-8 tracking-tight">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm passionate about control systems, robotics, machine learning, and innovation. 
              As a Computer Engineering student at Virginia Tech, I combine technical expertise 
              with creative problem-solving to build solutions that make a real impact. 
              I'm working hard to ensure the machines rise with us, not against us.
            </p>
            <div className="mt-12">
              <h3 className="text-2xl font-medium text-primary mb-4">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby) => (
                  <span key={hobby} className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="animate-scale-in space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-medium text-primary mb-4">Education</h3>
              <p className="text-gray-600 mb-2">B.S. in Computer Engineering at Virginia Tech with a focus in Control, Robotics, and Autonomy and Machine Learning. Minor in Computer Science.</p>
              <p className="text-gray-600">GPA: 3.73 | Dean's List | Honors College</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-medium text-primary mb-4">Current Role</h3>
              <p className="text-gray-600 mb-2">Statistical Process Control and R2R Engineer</p>
              <p className="text-gray-600">Micron Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


const Experience = () => {
  const experiences = [
    {
      role: "Statistical Process Control Intern",
      company: "Micron Technology",
      period: "May 2025 – Present",
      description: "R2R control for semiconductors, SPC analysis, process optimization."
    },
    {
      role: "Vice President of Engineering",
      company: "VT CRO",
      period: "2024 – Present",
      description: "Leading 120+ engineers, major design contributor to Workcell 25'26'."
    },
    {
      role: "Undergraduate Teaching Assistant",
      company: "ECE 2514 - Virginia Tech",
      period: "2024 – Present",
      description: "Teaching C++, Git, CMake, logic visualization."
    },
    {
      role: "Frontend & Backend Developer Intern",
      company: "CueBlocks",
      period: "2020",
      description: "Frontend and backend web development."
    }
  ];

  return (
    <section className="py-32 bg-gray-50 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-thin text-black mb-6 tracking-tight">
            Experience
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Building the future through technology
          </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="animate-fade-in-up bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-medium text-black mb-2">{exp.role}</h3>
                  <p className="text-xl text-gray-600 font-light">{exp.company}</p>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

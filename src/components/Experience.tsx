
const Experience = () => {
  const experiences = [
    {
      role: "Statistical Process Control Engineer",
      company: "Micron Technology, Inc.",
      period: "May 2025 – Present, Manassas, VA",
      points: [
        "Developed and implemented R2R control solutions to enhance semiconductor process capability",
        "Monitored and analyzed real-time production data using Statistical Process Control (SPC) techniques to identify opportunities for yield and stability improvements",
        "Collaborated with Process Engineering and Integration teams to optimize control methodologies across fabrication processes",
        "Built automation and change point monitoring scripts to generate weekly reports and conduct various checks",
        "Built an ARIMA predictive model to flag issues in future R2R settings",
      ]
    },
    {
      role: "Vice President of Engineering",
      company: "Virginia Tech Competitive Robotics Organization (VTCRO)",
      period: "Sep 2023 – Present, Blacksburg, VA",
      points: [
        "Lead 120+ engineers across 8 multidisciplinary design teams; ECE Lead for Workcell 25'26'",
        "Developed “Workcell,” a fully custom autonomous 3D print farm with dual printers, plate swapping, storage, and print queue system",
        "Won National Robotics Challenge 2025 — Gold Award and Honda Innovation Award",
        "Designed and built robotic systems with major contributions in ECE and mechanical subsystems",
      ]
    },
    {
      role: "Undergraduate Teaching Assistant",
      company: "Virginia Tech — ECE 2514: Computational Engineering",
      period: "Aug 2024 – Dec 2024",
      points: [
        "Guided students through foundational C++ concepts and assignments during weekly office hours",
        "Led in-person lab sessions focused on hands-on programming and problem-solving",
        "Supported student development with Git, CMake, and logic visualization tools",
      ]
    },
    {
      role: "Frontend & Backend Developer Intern",
      company: "CueBlocks",
      period: "2020",
      points: ["Frontend and backend web development."]
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
            What I've done
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
                <span className="text-gray-500 font-medium mt-2 md:mt-0 text-right">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-lg text-gray-600 leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


const Experience = () => {
  const experiences = [
    {
      role: "Statistical Process Control and R2R Engineer",
      company: "Micron Technology, Inc.",
      period: "May 2025 – Present, Manassas, VA",
      points: [
        "Developed proprietary Change Point Monitoring (CPM) system for R2R automation, enabling realtime detection of negative or unintended process changes through data analysis",
        "Developed ARIMA-based predictive model to analyze GeRM RPA data, identifying trends, shifts, and clamps to proactively flag and mitigate potential wafer processing issues",
        "Built automation of Metric Data Reports, utilizing Tableau API calls to extract and structure data for weekly reporting, significantly improving accessibility and efficiency for SPC engineering teams",
      ]
    },
    {
      role: "Vice President of Engineering",
      company: "Virginia Tech Competitive Robotics Organization (VTCRO)",
      period: "Sep 2023 – Present, Blacksburg, VA",
      points: [
        "Lead 120+ engineers across 8 multidisciplinary design teams; ECE Lead for Workcell 25'26'",
        "Developed \"Workcell,\" a fully custom autonomous 3D print farm with dual printers, plate swapping, storage, and print queue system",
        "Won National Robotics Challenge 2025 — Gold Award and Honda Innovation Award",
        "Designed and built robotic systems with major contributions in ECE and mechanical subsystems",
      ],
      link: "https://www.vtcro.org/"
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
                  <h3 className="text-2xl font-medium text-primary mb-2">{exp.role}</h3>
                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-xl text-gray-600 font-light hover:underline">
                      {exp.company}
                    </a>
                  ) : (
                    <p className="text-xl text-gray-600 font-light">{exp.company}</p>
                  )}
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

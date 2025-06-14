
const Leadership = () => {
  const initiatives = [
    {
      title: "Courses By You",
      description: "Founded student-led teaching organization. Taught 350+ students coding, robotics, AI, and logic. Certified by FuturoKnowledge.",
      impact: "350+ Students Taught"
    },
    {
      title: "Plasmassist / Covassist",
      description: "Co-founded COVID-19 relief platform. Connected 1,500+ people to plasma and resources. Led 14 volunteers. Built live database and platform.",
      impact: "1,500+ People Helped"
    },
    {
      title: "Terra House Captain",
      description: "Won House Cup after 9 years, Student Council, Event Host for quizzes and PDC/MUNs.",
      impact: "House Cup Winner"
    }
  ];

  return (
    <section className="py-32 bg-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-thin text-black mb-6 tracking-tight">
            Leadership & Initiatives
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Making a difference through community impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="animate-scale-in bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-medium text-black mb-4">{initiative.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{initiative.description}</p>
              <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                {initiative.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

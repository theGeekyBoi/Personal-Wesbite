
const Awards = () => {
  const awards = [
    "Best in Course – Integrated Design Project (Spring 2025)",
    "Dean's List (Fall '23, Spring '24)",
    "National Robotics Challenge – Gold + Honda Award",
    "NFTE Innovation Finalist",
    "STEM Harmony Award Winner",
    "SciCreate & Innovators Winner",
    "ACT: 35 Composite (36 English/Science, 34 Math/Reading)"
  ];

  return (
    <section className="py-32 bg-black px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in mb-16">
          <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-tight">
            Recognition
          </h2>
          <p className="text-xl text-gray-300 font-light">
            Excellence acknowledged
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="animate-fade-in-up bg-gray-900 p-6 rounded-xl border border-gray-800">
              <p className="text-white font-light leading-relaxed">{award}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;

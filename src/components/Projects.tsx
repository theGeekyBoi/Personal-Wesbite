const Projects = () => {
  const projects = [
    {
      title: "Workcell",
      subtitle: "Autonomous 3D Print Farm",
      description: "Built for VT CRO with dual printers, plate swapping, and queue system. Won Gold Award + Honda Innovation Award at National Robotics Challenge 2025.",
      tags: ["Robotics", "Automation", "3D Printing"],
      links: [
        { name: "VT News Article", url: "https://news.vt.edu/videos/k/2025/05/1_sqih9t9l.html" }
      ],
      image: "/lovable-uploads/7cc48eea-1401-4933-b7c1-5889ecc3eb02.png"
    },
    {
      title: "MADS",
      subtitle: "Milk Adulteration Detection System",
      description: "Detected urea using UV + image processing. Pitched to Nestlé, received commendation letter, published in IJISRT, and NFTE World Series of Innovation 2023 Winner.",
      tags: ["Machine Learning", "Image Processing", "IoT"],
      links: [
        { name: "Nestlé Letter", url: "http://tiny.cc/nestleletter" },
        { name: "NFTE Panel", url: "https://nfte.com/aadityas-story/" },
        { name: "IJISRT Paper", url: "https://ijisrt.com/urea-concentration-detection-in-milk-using-microscopic-image-processing-algorithm-under-ultraviolet-light-approach" },
      ],
      image: "/lovable-uploads/0393c7f2-eaac-4f54-a281-2af3271d7da9.png"
    },
    {
      title: "Wireless Sensor Node",
      subtitle: "Solar-Powered Fire Detection System",
      description: "Built a solar-powered wireless sensor node with temperature and smoke detection for early fire monitoring. Integrated a closed-loop DC/DC boost converter with PI control, Bluetooth communication, and a custom GUI. Awarded Best in Course.",
      tags: ["Power Electronics", "Embedded Systems", "IoT"],
      links: [
        { name: "GitHub Repo", url: "https://github.com/theGeekyBoi/IDP-WSN-G3" },
        { name: "Final Report", url: "https://drive.google.com/file/d/1h9KD5ITG0ahq8rcduBs8dH2fFiilx71S/view?usp=sharing" }
      ],
      image: "/lovable-uploads/47f9a8bb-2c4a-4711-98dd-d6e38ce15a31.png"
    },
    {
      title: "EcoCube",
      subtitle: "Smart Environmental System",
      description: "Combining solar, wind, irrigation, and carbon capture. STEM Award Winner – tGELF Harmony.",
      tags: ["Sustainability", "IoT", "Environmental"],
      image: "/lovable-uploads/10603dde-9cf7-4702-98b0-44943d281e5f.png"
    },
    {
      title: "Medicle",
      subtitle: "Vital Health Checkups for Rural India",
      description: "Real-time vitals monitoring cubicle for rural India. CodeHack Winner.",
      tags: ["Healthcare", "IoT", "Social Impact"],
      image: "/lovable-uploads/6f252514-c56c-4a80-a4d3-5502d1fce17f.png"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-thin text-black mb-6 tracking-tight">
            Projects
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            What I've built
          </p>
        </div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className={`animate-fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-4xl font-light text-primary mb-4">{project.title}</h3>
                <p className="text-xl text-gray-500 mb-6 font-light">{project.subtitle}</p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.links && (
                   <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className={`bg-gray-100 rounded-2xl h-96 flex items-center justify-center overflow-hidden ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className={`w-full h-full ${project.title === 'Wireless Sensor Node' ? 'object-contain' : 'object-cover'}`} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Project Showcase
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../utils/ImageWithFallBack";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Analytics Dashboard",
      description:
        "A modern analytics dashboard built with React and TypeScript, featuring real-time data visualization and interactive charts.",
      image:
        "https://imgs.search.brave.com/B3G6IWPKQIgAJmKKkfnX2DOUC17Bt6zwgadriKjgVRM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTk1/OS84NDE3L2kvNDUw/L2RlcG9zaXRwaG90/b3NfODQxNzA1NjAt/c3RvY2stcGhvdG8t/YmxhY2stYW5kLXNp/bHZlci1sYXB0b3Bz/LmpwZw",
      tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A fully responsive e-commerce website with shopping cart functionality, product filtering, and smooth animations.",
      image:
        "https://imgs.search.brave.com/B3G6IWPKQIgAJmKKkfnX2DOUC17Bt6zwgadriKjgVRM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTk1/OS84NDE3L2kvNDUw/L2RlcG9zaXRwaG90/b3NfODQxNzA1NjAt/c3RvY2stcGhvdG8t/YmxhY2stYW5kLXNp/bHZlci1sYXB0b3Bz/LmpwZw",
      tags: ["React", "Redux", "CSS Modules", "REST API"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "An intuitive task management application with drag-and-drop functionality and real-time updates.",
      image:
        "https://imgs.search.brave.com/B3G6IWPKQIgAJmKKkfnX2DOUC17Bt6zwgadriKjgVRM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTk1/OS84NDE3L2kvNDUw/L2RlcG9zaXRwaG90/b3NfODQxNzA1NjAt/c3RvY2stcGhvdG8t/YmxhY2stYW5kLXNp/bHZlci1sYXB0b3Bz/LmpwZw",
      tags: ["React", "React DnD", "Firebase", "Material UI"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image:
        "https://imgs.search.brave.com/B3G6IWPKQIgAJmKKkfnX2DOUC17Bt6zwgadriKjgVRM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTk1/OS84NDE3L2kvNDUw/L2RlcG9zaXRwaG90/b3NfODQxNzA1NjAt/c3RvY2stcGhvdG8t/YmxhY2stYW5kLXNp/bHZlci1sYXB0b3Bz/LmpwZw",
      tags: ["React", "OpenWeather API", "Tailwind", "Geolocation"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4">
            Features <span style={{ color: "#e94560" }}>Projects</span>
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-12"
            style={{ backgroundColor: "#e94560" }}
          />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Here are some of my recent projects that showcase my skills and
            passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card rounded-lg overflow-hidden border border-border group"
            >
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-[#e94560] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-white"
                    style={{ backgroundColor: "#e94560" }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

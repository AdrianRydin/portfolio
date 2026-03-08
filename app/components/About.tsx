import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "NextJS", level: 90 },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4">
            About <span style={{ color: "#e94560" }}>Me</span>
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-12"
            style={{ backgroundColor: "#e94560" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl mb-6">
              Junior Frontend Developer
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a passionate junior frontend developer with a strong
                foundation in modern web technologies. I love creating intuitive
                and visually appealing user interfaces that provide excellent
                user experiences.
              </p>
              <p>
                My journey in web development started with a curiosity about how
                websites work, and it has grown into a passion for building
                responsive, accessible, and performant web applications.
              </p>
              <p>
                I&apos;m constantly learning and staying up-to-date with the
                latest trends and best practices in frontend development. I
                believe in writing clean, maintainable code and following modern
                development workflows.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 0, x: 50 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl mb-6">Skills & Techstack</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: "#e94560" }}
                      initial={{ width: 0 }}
                      animate={
                        isInView ? { width: 0 } : { width: `${skill.level}%` }
                      }
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.1,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

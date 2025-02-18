import { motion } from 'framer-motion';
import '../styles/main.css';

export default function Projects() {
  const projects = [
    {
      title: "AWS Migration Project",
      description: "Led cloud infrastructure migration for enterprise client",
      tech: ["AWS", "EC2", "S3"]
    },
    // Add more projects
  ];

  return (
    <section className="section projects-section" id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            whileHover={{ y: -10 }}
          >
            <div className="project-image"></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
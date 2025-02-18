import { motion } from 'framer-motion';
import { FaWordpress, FaAws } from 'react-icons/fa'; // Using FaAws instead
import '../styles/main.css';

export default function Skills() {
  const skills = [
    { icon: <FaWordpress />, name: 'WordPress' },
    { icon: <FaAws />, name: 'AWS' }, // Changed to FaAws
    // Add more skills
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
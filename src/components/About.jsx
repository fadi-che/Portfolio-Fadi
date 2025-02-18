import { motion } from 'framer-motion';
import '../styles/main.css';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="star-trigger"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="about-content"
      >
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p className="about-bio">
              Web Support Specialist & Team Lead with extensive experience in AWS, WordPress, 
              and digital marketing solutions. Passionate about creating robust web infrastructures 
              and leading high-performing teams.
            </p>
            <div className="value-proposition">
              <h3>What I Bring:</h3>
              <ul>
                <li>✅ 10+ years in web development</li>
                <li>✅ AWS Certified Solutions Architect</li>
                <li>✅ WordPress Expert</li>
              </ul>
            </div>
          </div>
          <div className="about-visual">
            <div className="timeline"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
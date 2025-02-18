import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import '../styles/main.css';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <motion.form 
          className="contact-form"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
        >
          <div className="form-group">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows="5"></textarea>
          </div>
          <button className="saber-button">
            Send Message
            <span className="saber-effect"></span>
          </button>
        </motion.form>

        <div className="contact-info">
          <div className="info-item">
            <FiMail className="info-icon" />
            <span>contact@fadichehadi.com</span>
          </div>
          <div className="social-links">
            <a href="#"><FiLinkedin /></a>
            <a href="#"><FiGithub /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import "../styles/main.css";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="gradient-background"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hero-title"
        >
          Fadi Chehadi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hero-tagline"
        >
          Elevating Digital Landscapes with
          <span className="hero-break">{"\n"}</span> Precision & Innovation
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="hero-subtext"
        >
          Expert in crafting high-performance digital solutions that drive
          results.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Work With Me
          <span className="saber-effect"></span>
        </motion.button>
      </motion.div>

      <FiChevronDown className="bounce" size={32} />
    </section>
  );
}

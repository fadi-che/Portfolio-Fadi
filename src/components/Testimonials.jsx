import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import '../styles/main.css';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Fadi's expertise in WordPress optimization transformed our website.",
      author: "John Smith, CEO"
    },
    // Add more testimonials
  ];

  return (
    <section className="section testimonials-section" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <FaQuoteLeft className="quote-icon" />
            <p>{testimonial.text}</p>
            <div className="testimonial-author">
              <div className="author-image"></div>
              <span>{testimonial.author}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
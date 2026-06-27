import { Download } from 'lucide-react';
import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1]as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Resume() {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <header className="page-header">
        <div className="container">
          <motion.h1 variants={fadeInUp} className="page-title">Resume</motion.h1>
          <motion.p variants={fadeInUp} className="page-subtitle">A summary of my qualifications, skills, and experience.</motion.p>
        </div>
      </header>

      <section className="page-content">
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <motion.div variants={fadeInUp} style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
            <button className="btn btn-primary">
              <Download size={18} />
              Download PDF
            </button>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="resume-container">
            <motion.div variants={fadeInUp} className="resume-section">
              <h2 className="resume-section-title">Asror Aliqulov</h2>
              <p className="resume-contact-info">
                Frontend Developer<br/>
                asror8471@gmail.com • github.com/asror
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="resume-section">
              <h3 className="resume-heading">Summary</h3>
              <p className="resume-text">
                Detail-oriented Frontend Developer specializing in React, TypeScript, and modern CSS. 
                Passionate about building responsive, accessible, and high-performance user interfaces 
                with a focus on premium, minimalist design.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="resume-section">
              <h3 className="resume-heading">Skills</h3>
              <div className="resume-skills">
                <strong>Core:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript, React<br/>
                <strong>UI & Styling:</strong> CSS Modules, Styled Components, Framer Motion, Responsive Design<br/>
                <strong>Tools:</strong> Git, GitHub, Vite, Webpack, Figma<br/>
                <strong>Concepts:</strong> Component-Driven Architecture, Performance Optimization, Accessibility (a11y)
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="resume-section">
              <h3 className="resume-heading">Experience</h3>
              <div className="resume-item">
                <div className="resume-item-header">
                  <h4>Independent Frontend Developer</h4>
                  <span>Present</span>
                </div>
                <p className="resume-text">
                  - Designed and developed custom web applications and high-converting landing pages for freelance clients.<br/>
                  - Implemented responsive, mobile-first layouts using modern CSS techniques.<br/>
                  - Focused on optimizing Web Vitals and ensuring cross-browser compatibility.
                </p>
              </div>
              <div className="resume-item">
                <div className="resume-item-header">
                  <h4>Open Source & Personal Projects</h4>
                  <span>Past Year</span>
                </div>
                <p className="resume-text">
                  - Built multiple frontend projects including complex dashboard UIs and e-commerce templates.<br/>
                  - Mastered React state management and hooks architecture.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="resume-section" style={{ borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
              <h3 className="resume-heading">Education</h3>
              <div className="resume-item">
                <div className="resume-item-header">
                  <h4>Self-Taught & Continuous Learning</h4>
                  <span>Present</span>
                </div>
                <p className="resume-text">
                  - Completed advanced frontend challenges and masterclasses.<br/>
                  - Actively studying advanced React patterns and UI/UX design principles.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

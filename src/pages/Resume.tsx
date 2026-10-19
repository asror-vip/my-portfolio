import { Download } from 'lucide-react';
import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
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
          <motion.p variants={fadeInUp} className="page-subtitle">A summary of my skills, projects, and frontend development journey.</motion.p>
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
                asror8471@gmail.com • github.com/asror8471-gif
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="resume-section">
              <h3 className="resume-heading">Summary</h3>
              <p className="resume-text">
                Frontend Developer with hands-on experience building responsive websites and web applications using HTML, CSS, JavaScript, and Tailwind CSS. I actively integrate AI tools into my workflow to develop faster and smarter. Passionate about clean code, user-friendly interfaces, and continuously improving my skills.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="resume-section">
              <h3 className="resume-heading">Skills</h3>
              <div className="resume-skills">
                <strong>Core:</strong> HTML5, CSS3, JavaScript (ES6+), Tailwind CSS<br/>
                <strong>AI & Tools:</strong> AI-assisted development, Git, GitHub, Vite, Figma<br/>
                <strong>UI & Styling:</strong> Responsive Design, Framer Motion<br/>
                <strong>Concepts:</strong> Component-Based Development, Responsive Design, Accessibility, Performance Optimization
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="resume-section">
              <h3 className="resume-heading">Projects</h3>
              <div className="resume-item">
                <div className="resume-item-header">
                  <h4>Personal Frontend Projects</h4>
                  <span>Present</span>
                </div>
                <p className="resume-text">
                  - Developed responsive website clones and portfolio projects using HTML, CSS, JavaScript, and Tailwind CSS.<br/>
                  - Leveraged AI tools to accelerate development and improve code quality.<br/>
                  - Focused on responsive layouts, clean UI, and modern frontend development practices.
                </p>
              </div>
              <div className="resume-item">
                <div className="resume-item-header">
                  <h4>Self-Taught Frontend Developer</h4>
                  <span>Past Year</span>
                </div>
                <p className="resume-text">
                  - Continuously learning modern JavaScript and Tailwind CSS.<br/>
                  - Exploring advanced frontend techniques, UI/UX principles, and AI-powered development tools.
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
                  - Completed frontend challenges and real-world projects.<br/>
                  - Actively studying advanced JavaScript, Tailwind CSS patterns, and AI integration in development.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

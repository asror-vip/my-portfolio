import { motion } from 'motion/react';
import portfolioImg from '../imgs/portfolio.png'

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

export default function About() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <header className="page-header">
        <div className="container">
          <motion.h1 variants={fadeInUp} className="page-title">About Me</motion.h1>
          <motion.p variants={fadeInUp} className="page-subtitle">Get to know my background, skills, and approach to frontend development.</motion.p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <motion.div className="about-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="about-text">
              <motion.p variants={fadeInUp}>
                Hello! I'm <strong>Asror Aliqulov</strong>, a Frontend Developer passionate about building modern, responsive, and user-friendly web interfaces. I enjoy turning ideas and designs into clean, functional websites using <strong>HTML, CSS, JavaScript, and Tailwind CSS</strong>.
              </motion.p>
              <motion.p variants={fadeInUp}>
                I value writing clean, maintainable code and creating interfaces that are both visually appealing and easy to use. I also actively use <strong>AI tools</strong> to speed up development and solve problems more efficiently.
              </motion.p>
              <motion.p variants={fadeInUp}>
                My tech stack is intentionally focused. I specialize in <strong>HTML, CSS, JavaScript, Tailwind CSS</strong>, and integrating <strong>AI</strong> into my workflow. By mastering these core frontend technologies, I can build highly optimized, accessible, and maintainable client-side architectures.
              </motion.p>

              <div className="about-highlights">
                <motion.div variants={fadeInUp} className="highlight-box">
                  <h3 className="highlight-title">Career Goals</h3>
                  <p className="highlight-desc">To grow as a frontend developer by contributing to real-world projects, collaborating with talented teams, and building high-quality web applications.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="highlight-box">
                  <h3 className="highlight-title">Personal Values</h3>
                  <p className="highlight-desc">Clean code, responsive design, accessibility, continuous learning, and leveraging AI to build smarter.</p>
                </motion.div>
              </div>
            </div>

            <motion.div variants={fadeInUp} className="about-image">
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

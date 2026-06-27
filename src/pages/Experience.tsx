import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Experience() {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <header className="page-header">
        <div className="container">
          <motion.h1 variants={fadeInUp} className="page-title">Experience</motion.h1>
          <motion.p variants={fadeInUp} className="page-subtitle">My journey of continuous learning and building.</motion.p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <motion.div className="timeline" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            
            <motion.div variants={fadeInUp} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Present</div>
              <h3 className="timeline-title">Independent Development</h3>
              <p className="timeline-org">Freelance & Open Source</p>
              <p className="timeline-desc">
                Focusing on building high-quality freelance projects for clients. Constructing accessible, responsive web interfaces and refining my React component architectures. Actively exploring advanced CSS layouts and animations.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Past Year</div>
              <h3 className="timeline-title">Personal Projects</h3>
              <p className="timeline-org">Self-Directed Building</p>
              <p className="timeline-desc">
                Developed multiple complex frontend applications, including e-commerce UI clones, analytics dashboards, and interactive portfolios. Mastered state management in React and deepened my understanding of vanilla JavaScript fundamentals.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Earlier</div>
              <h3 className="timeline-title">Continuous Learning</h3>
              <p className="timeline-org">Frontend Fundamentals</p>
              <p className="timeline-desc">
                Dedicated intensive hours to mastering the core technologies of the web: HTML, CSS, and JavaScript. Completed numerous challenges on platforms like Frontend Mentor to bridge the gap between design files and functional code.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

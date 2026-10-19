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
              <p className="timeline-org">Personal Projects & Portfolio</p>
              <p className="timeline-desc">
                Building responsive frontend websites and portfolio projects using React, HTML, CSS, and JavaScript. Continuously improving UI design, component structure, and modern web development practices.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Past Year</div>
              <h3 className="timeline-title">Frontend Development</h3>
              <p className="timeline-org">Hands-on Practice</p>
              <p className="timeline-desc">
                Created multiple responsive website clones and personal projects to strengthen practical frontend development skills. Gained experience with React, reusable components, routing, and responsive layouts.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Earlier</div>
              <h3 className="timeline-title">Learning the Fundamentals</h3>
              <p className="timeline-org">Web Development</p>
              <p className="timeline-desc">
                Built a strong foundation in HTML, CSS, and JavaScript through consistent practice and real-world coding projects, focusing on clean, responsive, and user-friendly interfaces.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

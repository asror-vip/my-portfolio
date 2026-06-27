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
          <motion.p variants={fadeInUp} className="page-subtitle">Get to know my professional background, values, and working style.</motion.p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <motion.div className="about-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="about-text">
              <motion.p variants={fadeInUp}>
                Hello! I'm <strong>Asror Aliqulov</strong>, a Frontend Developer passionate about creating modern, responsive, and user-friendly web interfaces. I focus on bridging the gap between design and engineering to deliver polished, premium experiences.
              </motion.p>
              <motion.p variants={fadeInUp}>
                My working style is highly collaborative and detail-oriented. I believe that a great user interface is invisible — it allows users to accomplish their goals seamlessly without friction.
              </motion.p>
              <motion.p variants={fadeInUp}>
                My tech stack is intentionally focused. I specialize deeply in <strong>HTML, CSS, JavaScript, and React</strong>. By mastering these core frontend technologies, I can build highly optimized, accessible, and maintainable client-side architectures without relying on heavy abstractions.
              </motion.p>

              <div className="about-highlights">
                <motion.div variants={fadeInUp} className="highlight-box">
                  <h3 className="highlight-title">Career Goals</h3>
                  <p className="highlight-desc">To continually craft premium digital experiences and collaborate with forward-thinking designers and clients.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="highlight-box">
                  <h3 className="highlight-title">Personal Values</h3>
                  <p className="highlight-desc">Clean code, pixel-perfect implementation, accessibility, and continuous learning.</p>
                </motion.div>
              </div>
            </div>

            <motion.div variants={fadeInUp} className="about-image">
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', color: 'var(--border-color)' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#333' }}>
                  AA
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ width: '40px', height: '4px', background: '#222', borderRadius: '2px' }}></div>
                  <div style={{ width: '20px', height: '4px', background: '#222', borderRadius: '2px' }}></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

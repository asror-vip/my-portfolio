import { Link } from 'react-router-dom';
import { ArrowRight, Code2, LayoutTemplate, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import phoneImg from '../imgs/phoneimg.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <section className="hero-section">
        <div className="container">
          <div className="box">
            <motion.div className="hero-content" variants={staggerContainer}>
              <motion.span variants={fadeInUp} className="hero-greeting">Hello, I'm Asror Aliqulov, a</motion.span>
              <motion.h1 variants={fadeInUp} className="hero-title">
                Frontend Developer
              </motion.h1>
              <motion.p variants={fadeInUp} className="hero-desc">
                I specialize in building modern, responsive, and user-friendly web interfaces using React.
                Translating design into pixel-perfect, high-performance code.
              </motion.p>
              <motion.div variants={fadeInUp} className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  View Work <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
            <motion.div className="img-container">
              <img src={phoneImg} alt="Phone img" />
            </motion.div>
          </div>
        </div>
      </section >

      <section className="home-section">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="home-section-header">
              <div>
                <h2 className="home-section-title">About Me</h2>
                <p className="home-section-subtitle">A brief introduction</p>
              </div>
              <Link to="/about" className="view-all-link">Read full bio <ArrowRight size={16} /></Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="preview-grid">
              <div className="preview-card">
                <h3 className="preview-card-title">My Focus</h3>
                <p className="preview-card-desc">I am passionate about creating clean, minimalist, and accessible user interfaces. I believe in writing semantic HTML, modular CSS, and robust JavaScript.</p>
              </div>
              <div className="preview-card">
                <h3 className="preview-card-title">Core Skills</h3>
                <p className="preview-card-desc">My primary tech stack revolves around HTML, CSS, JavaScript, and React. I build single-page applications and responsive layouts.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="home-section-header">
              <div>
                <h2 className="home-section-title">Selected Works</h2>
                <p className="home-section-subtitle">Recent frontend projects</p>
              </div>
              <Link to="/projects" className="view-all-link">View all projects <ArrowRight size={16} /></Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="preview-grid">
              <Link to="/projects" className="project-card">
                <div className="project-image">
                  <div className="project-image-placeholder">UI</div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">Finance Dashboard</h3>
                  <p className="project-desc">A comprehensive frontend application for tracking personal finances.</p>
                </div>
              </Link>
              <Link to="/projects" className="project-card">
                <div className="project-image">
                  <div className="project-image-placeholder">UI</div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">E-Commerce Product Page</h3>
                  <p className="project-desc">An interactive product detail page with custom image galleries.</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="home-section-header">
              <div>
                <h2 className="home-section-title">Technical Skills</h2>
                <p className="home-section-subtitle">My core competencies</p>
              </div>
              <Link to="/skills" className="view-all-link">View all skills <ArrowRight size={16} /></Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="skill-badges">
              {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'TypeScript', 'Responsive Design'].map(skill => (
                <div className="skill-badge" key={skill} style={{ background: 'var(--bg-card)' }}>
                  {skill}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="home-section-header">
              <div>
                <h2 className="home-section-title">Experience</h2>
                <p className="home-section-subtitle">My development journey</p>
              </div>
              <Link to="/experience" className="view-all-link">View full timeline <ArrowRight size={16} /></Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="timeline" style={{ maxWidth: '100%', margin: '0' }}>
              <div className="timeline-item" style={{ marginBottom: 0 }}>
                <div className="timeline-dot"></div>
                <div className="timeline-date">Present</div>
                <h3 className="timeline-title">Independent Development</h3>
                <p className="timeline-org">Freelance & Open Source</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="home-section-header">
              <div>
                <h2 className="home-section-title">Services</h2>
                <p className="home-section-subtitle">How I can help you</p>
              </div>
              <Link to="/services" className="view-all-link">View all services <ArrowRight size={16} /></Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="preview-grid">
              <div className="preview-card">
                <div className="preview-card-icon"><LayoutTemplate size={24} /></div>
                <h3 className="preview-card-title">Landing Pages</h3>
                <p className="preview-card-desc">High-converting, fast-loading landing pages tailored to your brand.</p>
              </div>
              <div className="preview-card">
                <div className="preview-card-icon"><Code2 size={24} /></div>
                <h3 className="preview-card-title">React Web Apps</h3>
                <p className="preview-card-desc">Complex interactive web applications built with modern React features.</p>
              </div>
              <div className="preview-card">
                <div className="preview-card-icon"><Smartphone size={24} /></div>
                <h3 className="preview-card-title">Responsive Design</h3>
                <p className="preview-card-desc">Ensuring your website looks flawless on desktops, tablets, and mobile devices.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="home-section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="home-section-header"
          >
            <div>
              <h2 className="home-section-title">Let's Work Together</h2>
              <p className="home-section-subtitle">Available for freelance opportunities</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </motion.div>
        </div>
      </section>
    </motion.div >
  );
}

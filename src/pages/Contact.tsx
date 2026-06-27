import { Mail, Github, Instagram, Globe, ArrowRight, Send } from 'lucide-react';
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

export default function Contact() {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <header className="page-header">
        <div className="container">
          <motion.h1 variants={fadeInUp} className="page-title">Get in Touch</motion.h1>
          <motion.p variants={fadeInUp} className="page-subtitle">Have a project in mind? Let's discuss how we can work together.</motion.p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <motion.div className="contact-wrapper" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            
            <motion.div variants={fadeInUp} className="contact-info">
              <h2 className="home-section-title" style={{ marginBottom: '1rem', fontSize: '2rem' }}>Let's Connect</h2>
              <p>
                I'm currently available for freelance projects and full-time frontend roles. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="contact-links">
                <a href="mailto:asror8471@gmail.com" className="contact-link">
                  <div className="contact-link-left">
                    <Mail size={20} />
                    <span>Email Me</span>
                  </div>
                  <ArrowRight size={16} />
                </a>
                
                <a href="https://github.com/asror8471-gif" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-link-left">
                    <Github size={20} />
                    <span>GitHub Profile</span>
                  </div>
                  <ArrowRight size={16} />
                </a>

                <a href="https://www.instagram.com/asror.pg1111/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-link-left">
                    <Instagram size={20} />
                    <span>Instagram Profile</span>
                  </div>
                  <ArrowRight size={16} />
                </a>

                <a href="https://t.me/asror_tme" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-link-left">
                    <Send size={20} />
                    <span>Teligram Profile</span>
                  </div>
                  <ArrowRight size={16} />
                </a>

                <a href="https://contra.com" target="_blankhttps://contra.com/asror_8tbojnfq/work?r=asror_8tbojnfq" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-link-left">
                    <Globe size={20} />
                    <span>Contra Profile</span>
                  </div>
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="contact-form">
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Send a Message</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Fill out the form below and I'll reply ASAP.</p>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-input" placeholder="John Doe" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-input" placeholder="john@example.com" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-textarea" placeholder="Hello, I'd like to talk about a project..."></textarea>
              </div>
              
              <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                Send Message
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

import { LayoutTemplate, MonitorSmartphone, Code2, RefreshCcw, Bug, Box } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Landing Page Development',
    desc: 'Building responsive and visually appealing landing pages using HTML, CSS, JavaScript, and Tailwind CSS.',
    icon: <LayoutTemplate size={24} />
  },
  {
    title: 'Tailwind CSS Development',
    desc: 'Creating modern, utility-first designs and UI components rapidly using Tailwind CSS framework.',
    icon: <Code2 size={24} />
  },
  {
    title: 'Responsive Websites',
    desc: 'Developing websites that work smoothly across desktops, tablets, and mobile devices.',
    icon: <MonitorSmartphone size={24} />
  },
  {
    title: 'Website Redesign',
    desc: 'Refreshing existing websites with modern layouts, improved usability, and responsive design.',
    icon: <RefreshCcw size={24} />
  },
  {
    title: 'UI Implementation',
    desc: 'Converting Figma or design mockups into clean, pixel-perfect, and responsive web interfaces.',
    icon: <Box size={24} />
  },
  {
    title: 'AI-Assisted Development',
    desc: 'Leveraging AI tools to speed up development, improve code quality, and solve complex frontend challenges faster.',
    icon: <Bug size={24} />
  }
];

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

export default function Services() {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <header className="page-header">
        <div className="container">
          <motion.h1 variants={fadeInUp} className="page-title">My Services</motion.h1>
          <motion.p variants={fadeInUp} className="page-subtitle">Professional frontend development services for your next project.</motion.p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <motion.div className="services-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {services.map((service, index) => (
              <motion.div variants={fadeInUp} className="service-card" key={service.title}>
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

import { LayoutTemplate, MonitorSmartphone, Code2, RefreshCcw, Bug, Box } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Landing Page Development',
    desc: 'I build fast, high-converting landing pages tailored to your brand identity with precise CSS and HTML.',
    icon: <LayoutTemplate size={24} />
  },
  {
    title: 'React Development',
    desc: 'Developing interactive, state-driven single page applications using modern React architecture and hooks.',
    icon: <Code2 size={24} />
  },
  {
    title: 'Responsive Websites',
    desc: 'Creating websites that provide an optimal viewing experience across a wide range of devices, from desktops to mobile phones.',
    icon: <MonitorSmartphone size={24} />
  },
  {
    title: 'Website Redesign',
    desc: 'Transforming outdated interfaces into modern, minimalist designs that follow current UX/UI best practices.',
    icon: <RefreshCcw size={24} />
  },
  {
    title: '3D Design Integration',
    desc: 'Implementing interactive 3D elements and immersive web experiences using modern web graphics libraries.',
    icon: <Box size={24} />
  },
  {
    title: 'Frontend Bug Fixing',
    desc: 'Diagnosing and resolving CSS layout issues, JavaScript errors, and cross-browser compatibility problems.',
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

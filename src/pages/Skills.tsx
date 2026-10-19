import { Code, Layout, TerminalSquare, Layers, Wind, Bot, GitBranch, Github } from 'lucide-react';
import { motion } from 'motion/react';

const coreSkills = [
  { name: 'HTML5', icon: <Code size={24} /> },
  { name: 'CSS3', icon: <Layout size={24} /> },
  { name: 'JavaScript', icon: <TerminalSquare size={24} /> },
  { name: 'Tailwind CSS', icon: <Wind size={24} /> },
];

const secondarySkills = [
  { name: 'AI Tools', icon: <Bot size={24} /> },
  { name: 'Responsive Design', icon: <Layers size={24} /> },
  { name: 'Git', icon: <GitBranch size={24} /> },
  { name: 'GitHub', icon: <Github size={24} /> },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Skills() {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <header className="page-header">
        <div className="container">
          <motion.h1 variants={fadeInUp} className="page-title">My Skills</motion.h1>
          <motion.p variants={fadeInUp} className="page-subtitle">The technical tools and concepts I use to bring designs to life.</motion.p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          
          <motion.div style={{ marginBottom: '5rem' }} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="skill-category-title">Core Technologies</motion.h2>
            <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
              {coreSkills.map(skill => (
                <motion.div variants={fadeInUp} className="skill-card-premium" key={skill.name}>
                  <div className="skill-card-icon">{skill.icon}</div>
                  <h3 className="skill-card-title">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ marginBottom: '5rem' }} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="skill-category-title">Concepts & Tools</motion.h2>
            <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
              {secondarySkills.map(skill => (
                <motion.div variants={fadeInUp} className="skill-card-premium" key={skill.name}>
                  <div className="skill-card-icon">{skill.icon}</div>
                  <h3 className="skill-card-title">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
}

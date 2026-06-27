import { useState, useMemo } from 'react';
import { ExternalLink, Github, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import mebelImg from '../projectImg/mebel.png';
import webgoImg from '../projectImg/webgo.png';
import metalImg from '../projectImg/metal.png';

const allProjects = [
  {
    id: 1,
    title: 'Mebel Website',
    desc: 'A modern furniture showroom website clone featuring elegant product showcases, category browsing, responsive layouts, and a clean user experience. Built as a frontend practice project using HTML and CSS.',
    tech: ['HTML', 'CSS'],
    category: 'HTML/CSS',
    image: mebelImg,
    live: 'https://maymebelsayt.netlify.app/',
    github: 'https://github.com/asror8471-gif/Mebel',
  },

  {
    id: 2,
    title: 'SEO Website',
    desc: 'A modern corporate website clone for a digital agency offering web development, SEO optimization, UI/UX design, and online marketing services. Built as a frontend practice project with a responsive and clean user interface.',
    tech: ['React', 'Tailwind CSS', 'TypeScript'],
    category: 'React',
    image: webgoImg,
    live: 'https://webgouz.netlify.app/',
    github: 'https://github.com/asror8471-gif/webGo',
  },
  {
    id: 3,
    title: 'Metal Website',
    desc: 'A modern industrial manufacturing website clone showcasing steel pipes, metal products, company services, and responsive layouts. Built as a frontend practice project with a clean and professional user interface.',
    tech: ['HTML', 'CSS'],
    category: 'HTML/CSS',
    image: metalImg,
    live: 'https://delicate-lamington-edfaf3.netlify.app/',
    github: 'no link',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return allProjects.filter(p => {
      const matchesFilter = filter === 'All' || p.category === filter || p.tech.includes(filter);
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <header className="page-header">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Selected Projects
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A collection of frontend applications and interfaces I've built.
          </motion.p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          
          <motion.div 
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
              <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="form-input" 
                style={{ paddingLeft: '3rem', borderRadius: '999px' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filters" style={{ marginBottom: 0 }}>
              {['All', 'React', 'HTML/CSS', 'JavaScript'].map(f => (
                <button 
                  key={f}
                  className={`filter-btn ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '4rem 0', gridColumn: '1 / -1' }}
                >
                  No projects found matching your search criteria.
                </motion.div>
              ) : (
                filteredProjects.map((project, index) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="project-card" 
                    key={project.id}
                  >
                    <div className="project-image">
                      <div className="project-image-placeholder"><img src={project.image} alt={project.title} /></div>
                    </div>
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.desc}</p>
                      <div className="project-tech">
                        {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                      </div>
                      <div className="project-links">
                        <a href={project.live} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                          <ExternalLink size={16} /> Live Demo
                        </a>
                        <a href={project.github} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                          <Github size={16} /> GitHub
                        </a>
                      </div>
                    </div>
                  </motion.div>
                  
                ))
              )}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </section>
    </motion.div>
  );
}

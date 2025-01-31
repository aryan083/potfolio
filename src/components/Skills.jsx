import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython,
  FaGitAlt, FaDocker, FaAws
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiPostgresql, SiTensorflow,
  SiPytorch, SiScikitlearn, SiJupyter, SiTableau
} from 'react-icons/si';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = {
    all: 'All Skills',
    frontend: 'Frontend',
    backend: 'Backend',
    aiml: 'AI/ML',
    tools: 'Tools & Technologies'
  };

  const skills = {
    frontend: [
      { name: 'HTML', icon: <FaHtml5 />, color: 'hover:text-orange-500' },
      { name: 'CSS', icon: <FaCss3Alt />, color: 'hover:text-blue-500' },
      { name: 'JavaScript', icon: <FaJs />, color: 'hover:text-yellow-400' },
      { name: 'React', icon: <FaReact />, color: 'hover:text-cyan-400' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'hover:text-cyan-500' },
    ],
    backend: [
      { name: 'Node.js', icon: <FaNode />, color: 'hover:text-green-500' },
      { name: 'Python', icon: <FaPython />, color: 'hover:text-blue-500' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'hover:text-green-500' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'hover:text-blue-400' },
    ],
    aiml: [
      { name: 'TensorFlow', icon: <SiTensorflow />, color: 'hover:text-orange-500' },
      { name: 'PyTorch', icon: <SiPytorch />, color: 'hover:text-orange-600' },
      { name: 'Scikit-learn', icon: <SiScikitlearn />, color: 'hover:text-orange-500' },
      { name: 'Jupyter', icon: <SiJupyter />, color: 'hover:text-orange-600' },
      { name: 'Tableau', icon: <SiTableau />, color: 'hover:text-blue-500' },
    ],
    tools: [
      { name: 'Git', icon: <FaGitAlt />, color: 'hover:text-orange-500' },
      { name: 'Docker', icon: <FaDocker />, color: 'hover:text-blue-500' },
      { name: 'AWS', icon: <FaAws />, color: 'hover:text-yellow-500' },
    ],
  };

  const getSkillsByCategory = () => {
    if (activeTab === 'all') {
      return Object.values(skills).flat();
    }
    return skills[activeTab] || [];
  };

  return (
    <section name="skills" className="relative w-full min-h-screen py-20 bg-gradient-to-b from-primary via-tertiary to-primary">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-wider text-accent mb-3">Skills</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
            My Technical Skills
          </h3>
          <p className="text-textSecondary max-w-2xl mx-auto">
            I've worked with a wide range of technologies in web development,
            AI/ML, and software engineering. Here are my key technical skills:
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, label]) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                activeTab === key
                  ? 'border-accent bg-accent/20 text-highlight'
                  : 'border-secondary/20 text-textSecondary hover:border-accent/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {getSkillsByCategory().map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                layout: { duration: 0.3 }
              }}
              className="group perspective"
            >
              <motion.div
                className="relative preserve-3d group-hover:rotate-y-180 duration-500"
                whileHover={{ scale: 1.05 }}
              >
                {/* Front of card */}
                <div className="skill-card absolute backface-hidden w-full h-full">
                  <div className="h-full flex flex-col items-center justify-center p-6">
                    <div className={`text-4xl mb-4 text-textSecondary transition-colors duration-300 ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <span className="text-sm text-textSecondary group-hover:text-accent transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>

                {/* Back of card */}
                <div className="skill-card absolute backface-hidden w-full h-full rotate-y-180 bg-gradient-to-br from-secondary/20 to-accent/20">
                  <div className="h-full flex flex-col items-center justify-center p-6">
                    <span className="text-highlight text-center">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from 'framer-motion';
import { FaJava, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiPython, SiPhp, SiMysql, SiFlask, SiBootstrap, SiScikitlearn, SiOpencv } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Education Tool',
      description: 'A Java-based learning tool with Swing/AWT for UI/UX design, featuring video lectures and interactive learning resources.',
      tech: ['Java', 'Swing/AWT', 'OOP'],
      features: [
        'Intuitive UI/UX design with Swing/AWT',
        'Modular development using OOP principles',
        'Integrated video lectures',
        'Interactive learning resources'
      ],
      techIcons: [<FaJava className="text-[#007396]" />],
      github: 'https://github.com/aryan083/Edu-interface',
      live: null  // Change '#' to null if there's no live link
    },
    {
      id: 2,
      title: 'Emojifier',
      description: 'A web application that translates facial expressions into emojis using machine learning and computer vision.',
      tech: ['Python', 'scikit-learn', 'OpenCV', 'Flask', 'HTML', 'Bootstrap'],
      features: [
        'Facial expression to emoji translation',
        'Interactive facial recognition explanation',
        'Support Vector Machine implementation',
        'Comprehensive technical blog'
      ],
      techIcons: [
        <SiPython className="text-[#3776AB]" />,
        <SiScikitlearn className="text-[#F7931E]" />,
        <SiOpencv className="text-[#5C3EE8]" />,
        <SiFlask className="text-[#000000]" />,
        <SiBootstrap className="text-[#7952B3]" />
      ],
      github: 'https://github.com/aryan083/emojifier',
      live: 'https://huggingface.co/spaces/aryan083/Emojifier'
    },
    {
      id: 3,
      title: 'Student Project Management',
      description: 'A web-based platform for streamlined university project management and collaboration.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      features: [
        'Real-time project tracking',
        'Secure database access',
        'Standardized reporting',
        'Team collaboration tools'
      ],
      techIcons: [
        <SiPhp className="text-[#777BB4]" />,
        <SiMysql className="text-[#4479A1]" />
      ],
      github: 'https://github.com/aryan083/IWT_SMPS',
      live: null  // Change '#' to null if there's no live link
    }
  ];

  // Background shapes for animation
  const shapes = Array(20).fill('').map((_, i) => ({
    type: ['circle', 'square', 'triangle', 'line'][Math.floor(Math.random() * 4)],
    position: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    },
    size: `${Math.random() * 30 + 20}px`,
    delay: i * 0.2,
  }));

  return (
    <section name="projects" className="relative w-full min-h-screen py-32 bg-gradient-to-b from-tertiary to-primary overflow-hidden">
      {/* Animated Background Shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute opacity-5"
          style={{
            top: shape.position.top,
            left: shape.position.left,
            width: shape.size,
            height: shape.size
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: shape.delay
          }}
        >
          <div
            className={`w-full h-full ${
              shape.type === 'circle'
                ? 'rounded-full bg-accent'
                : shape.type === 'square'
                ? 'rounded-lg bg-secondary rotate-45'
                : shape.type === 'triangle'
                ? 'triangle border-l-[15px] border-r-[15px] border-b-[25px] border-accent'
                : 'h-[2px] w-[100px] bg-gradient-to-r from-transparent via-accent to-transparent'
            }`}
          />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-sm uppercase tracking-wider text-accent mb-3">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-textPrimary mb-8">
            Featured Projects
          </h3>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            Here are some of my notable projects that showcase my skills in web development,
            machine learning, and software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group perspective"
            >
              {/* 3D Card Container */}
              <motion.div
                className="relative preserve-3d transition-transform duration-500 ease-out"
                whileHover={{ rotateX: 5, rotateY: 5 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Card Front */}
                <div className="bg-primary/30 backdrop-blur-sm rounded-2xl border border-accent/10 p-6 shadow-xl">
                  {/* Card Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-textPrimary group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Tech Icons */}
                    <div className="flex flex-wrap gap-4">
                      {project.techIcons.map((icon, i) => (
                        <div key={i} className="text-3xl transform transition-transform duration-300 hover:scale-110">
                          {icon}
                        </div>
                      ))}
                    </div>

                    <p className="text-textSecondary">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-textSecondary"
                        >
                          <span className="text-accent mt-1.5">•</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-2xl text-textSecondary hover:text-accent transition-colors duration-300"
                        >
                          <FaGithub />
                        </motion.a>
                      )}
                      {project.live && project.live !== '#' && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-2xl text-textSecondary hover:text-accent transition-colors duration-300"
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* 3D Elements */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-secondary/5 pointer-events-none"
                    style={{
                      transform: 'translateZ(-50px)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                  <div
                    className="absolute -top-0.5 -bottom-0.5 -left-0.5 -right-0.5 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 pointer-events-none"
                    style={{
                      transform: 'translateZ(-25px)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

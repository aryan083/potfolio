import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Hero = () => {
  const terminalLines = [
    { text: '> Initializing developer profile...', delay: 0 },
    { text: '> Loading skills and experience...', delay: 0.5 },
    { text: '> const developer = {', delay: 1 },
    { text: '    name: "Aryan Mahida",', delay: 1.5 },
    { text: '    role: "Full Stack Developer",', delay: 2 },
    { text: '    skills: ["Web Dev", "AI/ML", "Problem Solving"],', delay: 2.5 },
    { text: '    status: "Ready to innovate!"', delay: 3 },
    { text: '  };', delay: 3.5 },
    { text: '> System ready...', delay: 4 }
  ];

  // Background shapes for animation
  const shapes = Array(15).fill('').map((_, i) => ({
    type: ['circle', 'square', 'triangle', 'line'][Math.floor(Math.random() * 4)],
    position: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    },
    size: `${Math.random() * 20 + 10}px`,
    delay: i * 0.2,
  }));

  return (
    <section name="home" className="relative w-full min-h-screen pt-[100px] bg-gradient-to-b from-primary to-tertiary overflow-hidden">
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
                ? 'triangle border-l-[10px] border-r-[10px] border-b-[17px] border-accent'
                : 'h-[2px] w-[100px] bg-gradient-to-r from-transparent via-accent to-transparent'
            }`}
          />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <p className="text-accent text-lg mb-4">Hi, my name is</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-textPrimary mb-6">
            Aryan Mahida
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-textSecondary mb-8">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mb-12">
            I specialize in building exceptional digital experiences. Currently, I'm focused on
            building responsive full-stack web applications and exploring AI/ML technologies.
          </p>

          <div className="flex gap-6 mb-16">
            <motion.a
              href="https://linkedin.com/in/aryan-mahida"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-textSecondary hover:text-[#0A66C2] transition-colors duration-300"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/aryan083"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-textSecondary hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </motion.a>
          </div>

          <div className="flex gap-6">
            <Link to="projects" smooth duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-accent to-secondary text-white px-8 py-4 rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
              >
                View Work
                <HiArrowNarrowRight className="group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>
            </Link>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-accent text-accent px-8 py-4 rounded-lg hover:bg-accent/10 transition-colors duration-300"
            >
              Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - 3D Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 hidden md:block"
        >
          <div className="relative w-full max-w-lg mx-auto perspective-1000">
            {/* Terminal Window */}
            <motion.div
              initial={{ rotateX: 45, rotateZ: -15 }}
              animate={{ 
                rotateX: [45, 40, 45],
                rotateZ: [-15, -10, -15]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative bg-tertiary/30 backdrop-blur-sm rounded-xl border border-accent/20 overflow-hidden shadow-2xl"
            >
              {/* Terminal Header */}
              <div className="bg-primary/50 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-textSecondary">developer-profile</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-2">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: line.delay }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-accent">$</span>
                    <span className="text-textSecondary">{line.text}</span>
                  </motion.div>
                ))}
                {/* Blinking Cursor */}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-accent/50"
                />
              </div>

              {/* Terminal Reflection */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 pointer-events-none" />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

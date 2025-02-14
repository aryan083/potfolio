import { motion } from 'framer-motion';
import { FaCode, FaServer } from 'react-icons/fa';
import { BiNetworkChart } from "react-icons/bi";


const About = () => {
  // Background shapes configuration
  const shapes = [
    { type: 'circle', size: 'w-24 h-24', position: 'top-20 left-10', delay: 0 },
    { type: 'square', size: 'w-32 h-32', position: 'top-40 right-20', delay: 0.2 },
    { type: 'triangle', size: 'w-20 h-20', position: 'bottom-20 left-1/4', delay: 0.4 },
    { type: 'line', size: 'w-40 h-1', position: 'top-1/3 right-1/3', delay: 0.6 },
    { type: 'circle', size: 'w-16 h-16', position: 'bottom-40 right-1/4', delay: 0.8 },
    { type: 'line', size: 'w-32 h-1', position: 'top-1/2 left-1/3', delay: 1 },
    { type: 'diamond', size: 'w-16 h-16', position: 'top-1/4 left-1/3', delay: 1.2 },
    { type: 'circle', size: 'w-20 h-20', position: 'bottom-1/4 right-1/3', delay: 1.4 },
    { type: 'square', size: 'w-24 h-24', position: 'top-3/4 left-1/4', delay: 1.6 },
    { type: 'line', size: 'w-48 h-1', position: 'bottom-1/3 right-1/4', delay: 1.8 },
    { type: 'triangle', size: 'w-16 h-16', position: 'top-1/3 right-1/4', delay: 2 },
    { type: 'circle', size: 'w-12 h-12', position: 'bottom-1/2 left-20', delay: 2.2 },
    { type: 'hexagon', size: 'w-20 h-20', position: 'top-2/3 right-1/3', delay: 2.4 },
    { type: 'line', size: 'w-36 h-1', position: 'bottom-2/3 left-1/4', delay: 2.6 }
  ];

  const cards = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing elegant, maintainable, and efficient code is my passion."
    },
    {
      icon: <BiNetworkChart />,
      title: "AI-ML Development",
      description: "I specialize in developing intelligent systems using AI and Machine Learning."
    },
    {
      icon: <FaServer />,
      title: "Full Stack",
      description: "From front-end design to back-end architecture, Derving insights from data to building AI/ML models, I do it all."
    }
  ];

  return (
    <section
      name="about"
      className="relative w-full min-h-screen pt-32 pb-16 bg-gradient-to-b from-primary to-tertiary"
    >
      {/* Background Shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.position} ${shape.size} opacity-10`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
            rotate: shape.type !== 'line' ? [0, 360, 0] : 0
          }}
          transition={{
            duration: 8,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {shape.type === 'circle' && (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-secondary" />
          )}
          {shape.type === 'square' && (
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-secondary to-accent transform rotate-45" />
          )}
          {shape.type === 'triangle' && (
            <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-accent/50" />
          )}
          {shape.type === 'line' && (
            <div className="w-full h-full bg-gradient-to-r from-transparent via-accent to-transparent transform -rotate-45" />
          )}
          {shape.type === 'diamond' && (
            <div className="w-full h-full bg-gradient-to-br from-secondary to-accent transform rotate-45" />
          )}
          {shape.type === 'hexagon' && (
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary clip-path-hexagon" />
            </div>
          )}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-sm uppercase tracking-wider text-accent mb-3">
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-textPrimary mb-8">
              Who I Am
            </h3>
            <p className="text-lg text-textSecondary mb-8">
              I am a passionate Full Stack Developer with a strong foundation in web
              development and a keen interest in emerging technologies. My journey in
              tech began with a curiosity about how things work on the internet,
              which led me to explore various programming languages and frameworks.
            </p>
            <p className="text-lg text-textSecondary mb-8">
              I specialize in building responsive web applications using modern
              technologies like React, Node.js, and Python. I'm also experienced in
              working with databases, API integration, and implementing secure
              authentication systems.
            </p>
            <p className="text-lg text-textSecondary">
              When I'm not coding, I enjoy staying updated with the latest tech
              trends, contributing to open-source projects, and mentoring aspiring
              developers. I believe in writing clean, maintainable code and creating
              intuitive user experiences.
            </p>
          </motion.div>

          {/* Right Content - Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:flex-1 w-full max-w-md relative"
          >
            <div className="relative z-10">
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-accent/20 shadow-xl">
                <img
                  src={"../../public/images/aryan.jpg"}
                  alt="My profile"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 -right-8 w-24 h-24 border-4 border-accent/20 rounded-xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-accent/20 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-tertiary/30 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 hover:border-secondary/40 transition-colors"
            >
              <div className="text-3xl text-secondary mb-4">{card.icon}</div>
              <h4 className="text-xl font-semibold text-textPrimary mb-2">{card.title}</h4>
              <p className="text-textSecondary">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

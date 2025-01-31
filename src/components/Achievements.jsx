import { motion } from 'framer-motion';
import { FaTrophy, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      category: 'Competition',
      title: 'Sensor Interfacing Competition',
      description: 'Achieved 2nd rank in Sensor Interfacing, MU Fest 2023',
      icon: <FaTrophy className="text-3xl text-yellow-400" />,
      color: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      id: 2,
      category: 'Volunteer',
      title: 'ATAL FDP 2025',
      description: 'Volunteered in ATAL FDP 2025 organized by AICTE (All India Council for Technical Education)',
      icon: <HiAcademicCap className="text-3xl text-blue-400" />,
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      id: 3,
      category: 'Patent',
      title: 'Education Tool Copyright',
      description: 'Copyright achieved for Education Tool Indian Patent Office SW-18298/2024, filed on 15/12/2023 and issued on 16/12/2024',
      icon: <FaTrophy className="text-3xl text-green-400" />,
      color: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  const education = {
    school: 'Marwadi University, India',
    degree: 'B.Tech. Information and Communication Technology',
    duration: 'Sept 2022 - Present',
    accreditation: '[NAAC A+ Accredited]',
    cgpa: '8.53'
  };

  const experience = {
    company: 'Ally Soft Solutions',
    location: 'Rajkot',
    position: 'Full Stack PHP Developer Intern',
    duration: 'May 2024 – July 2024',
    type: 'On-Site',
    responsibilities: [
      'Developed and maintained backend functionalities for an Event Management System using PHP, MySQL, and JavaScript.',
      'Implemented dynamic features to manage event schedules, registrations, and user profiles effectively.',
      'Optimized database queries and improved system performance for real-time data handling and user interactions'
    ]
  };

  // Background shapes for animation
  const shapes = Array(15).fill('').map((_, i) => ({
    type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
    position: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    },
    size: `${Math.random() * 20 + 10}px`,
    delay: i * 0.2,
  }));

  return (
    <section name="achievements" className="relative w-full min-h-screen py-32 bg-gradient-to-b from-primary to-tertiary overflow-hidden">
      {/* Animated Background Shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
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
            opacity: [0.1, 0.2, 0.1]
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
                : 'triangle border-l-[10px] border-r-[10px] border-b-[17px] border-accent'
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
          <h2 className="text-sm uppercase tracking-wider text-accent mb-3">Milestones</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-textPrimary">
            Achievements & Experience
          </h3>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-xl bg-gradient-to-br ${achievement.color} backdrop-blur-sm border border-accent/10`}
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/5 rounded-full blur-2xl" />
              <div className="relative">
                <span className="inline-block p-3 rounded-lg bg-primary/30 backdrop-blur-sm mb-4">
                  {achievement.icon}
                </span>
                <h4 className="text-sm text-accent mb-2">{achievement.category}</h4>
                <h3 className="text-xl font-bold text-textPrimary mb-4">{achievement.title}</h3>
                <p className="text-textSecondary">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-accent/10">
            <div className="flex items-start gap-6">
              <span className="p-4 rounded-lg bg-primary/30 backdrop-blur-sm">
                <FaGraduationCap className="text-3xl text-blue-400" />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-textPrimary mb-2">{education.school}</h3>
                <p className="text-accent mb-1">{education.accreditation}</p>
                <p className="text-lg text-textSecondary mb-4">{education.degree}</p>
                <div className="flex items-center gap-4">
                  <span className="text-textSecondary">{education.duration}</span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent">
                    CGPA: {education.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-accent/10">
            <div className="flex items-start gap-6">
              <span className="p-4 rounded-lg bg-primary/30 backdrop-blur-sm">
                <FaBriefcase className="text-3xl text-green-400" />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-textPrimary mb-2">{experience.company}</h3>
                <p className="text-accent mb-1">{experience.position}</p>
                <p className="text-textSecondary mb-4">
                  {experience.location} • {experience.duration} • {experience.type}
                </p>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-textSecondary"
                    >
                      <span className="text-accent mt-1.5">•</span>
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

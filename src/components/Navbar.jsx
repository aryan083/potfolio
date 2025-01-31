import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: 'home', label: 'Home', icon: <FaHome /> },
    { id: 2, link: 'about', label: 'About', icon: <FaUser /> },
    { id: 3, link: 'skills', label: 'Skills', icon: <FaCode /> },
    { id: 4, link: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 5, link: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full h-20 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="group cursor-pointer"
        >
          <Link to="home" smooth duration={500}>
            <h1 className="text-3xl font-signature ml-2 relative">
              <span className="text-accent font-bold">A</span>
              <span className="text-textPrimary group-hover:text-accent transition-colors duration-300">ryan</span>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, link, label, icon }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="relative cursor-pointer text-textSecondary hover:text-accent text-lg flex items-center gap-2"
            >
              <Link
                to={link}
                smooth
                duration={500}
                className="flex items-center h-20"
              >
                {icon}
                {label}
                <motion.div
                  className="absolute bottom-5 left-4 right-4 h-0.5 bg-accent transform scale-x-0 origin-left"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-textSecondary md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-2/3 h-screen bg-gradient-to-b from-primary/95 to-tertiary/95 backdrop-blur-lg"
            >
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="h-full flex flex-col justify-center items-center"
              >
                {links.map(({ id, link, label, icon }) => (
                  <motion.li
                    key={id}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      show: { opacity: 1, x: 0 },
                    }}
                    className="px-4 cursor-pointer py-6 text-3xl text-textSecondary hover:text-accent hover:scale-110 transition-all duration-300 flex items-center gap-2"
                  >
                    <Link
                      onClick={() => setNav(!nav)}
                      to={link}
                      smooth
                      duration={500}
                    >
                      {icon}
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 -right-4 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

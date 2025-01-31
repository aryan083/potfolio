import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xdkazoly', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/aryan-mahida/',
      color: 'hover:text-[#0077b5]'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/aryan083',
      color: 'hover:text-white'
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      value: 'aryanmahida2@gmail.com',
      link: 'mailto:aryanmahida2@gmail.com',
      gradient: 'from-[#FF6B6B] to-[#FF8E8E]'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Location',
      value: 'Rajkot, India',
      link: null,
      gradient: 'from-[#4FACFE] to-[#00F2FE]'
    }
  ];

  return (
    <section name="contact" className="relative w-full min-h-screen py-20 bg-gradient-to-b from-primary via-tertiary to-primary">
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-wider text-accent mb-3">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
            Get In Touch
          </h3>
          <p className="text-textSecondary max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative background elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-xl" />

            <form
              onSubmit={handleSubmit}
              className="relative space-y-6 bg-tertiary/30 backdrop-blur-sm rounded-xl p-8 border border-accent/20"
            >
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-4 bg-primary/50 rounded-lg border-2 border-accent/20 focus:border-accent outline-none transition-colors duration-300 text-textPrimary"
                  required
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="_replyto"
                  placeholder="Your Email"
                  className="w-full p-4 bg-primary/50 rounded-lg border-2 border-accent/20 focus:border-accent outline-none transition-colors duration-300 text-textPrimary"
                  required
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-4 bg-primary/50 rounded-lg border-2 border-accent/20 focus:border-accent outline-none transition-colors duration-300 text-textPrimary resize-none"
                  required
                  rows="6"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-8 bg-gradient-to-r from-accent to-secondary text-white rounded-lg relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                <span className="relative z-10">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </span>
              </motion.button>

              {status === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative bg-tertiary/30 backdrop-blur-sm rounded-xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <div className="relative flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-textPrimary group-hover:text-highlight transition-colors duration-300">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-textSecondary hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-textSecondary">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <div className="mt-8 bg-tertiary/30 backdrop-blur-sm rounded-xl p-6 border border-accent/20">
                <h4 className="text-lg font-semibold text-textPrimary mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-3xl text-textSecondary transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

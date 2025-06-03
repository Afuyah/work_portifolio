import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 shadow-sm' : 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80'}`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo with enhanced animation */}
        <motion.div 
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <NavLink 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <motion.div
              className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              HB
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 group-hover:from-blue-700 group-hover:to-indigo-600 transition-all">
              Henry Bulimo
            </span>
          </NavLink>
        </motion.div>

        {/* Desktop Navigation with improved animations */}
        <nav className="hidden md:flex gap-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <motion.span
                      className="relative z-10"
                      whileHover={{ y: -2 }}
                    >
                      {link.name}
                    </motion.span>
                    {isActive && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        layoutId="activeNav"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.6 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button with better animation */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu with AnimatePresence for smooth exit */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white dark:bg-gray-800 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 py-3 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FiChevronRight className="text-gray-400" />
                    </motion.div>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
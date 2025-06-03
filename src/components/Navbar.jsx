// components/Navbar.jsx
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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white dark:bg-gray-950 shadow-sm`}>

      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <motion.div
            className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-lg"
            whileHover={{ rotate: 360 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            HB
          </motion.div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            Henry Bulimo
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium px-4 py-2 transition-colors relative group ${
                  isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      layoutId="activeNavLine"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Off-canvas sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-xs z-50 bg-white dark:bg-gray-950 shadow-lg flex flex-col justify-start p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-gray-800 dark:text-gray-100">Menu</span>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 dark:text-gray-300">
                <FiX size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3 px-4 rounded-md transition-all text-base font-medium ${
                      isActive ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <FiChevronRight className="text-gray-400" />
                </NavLink>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}

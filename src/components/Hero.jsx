import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-white px-6 md:px-16 overflow-hidden">
      {/* Futuristic floating blur background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-white to-indigo-100 opacity-40 blur-3xl z-0 animate-pulse" />

      {/* Animated Hero Content */}
      <motion.div
        className="relative z-10 max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-primary leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Henry Bulimo
        </motion.h1>

        <motion.p
          className="mt-4 text-xl md:text-2xl text-gray-700 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Software Engineer · Full-stack Developer · Innovator
        </motion.p>

        <motion.p
          className="mt-6 text-lg text-gray-600 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I build powerful digital experiences that scale, convert, and inspire. Let’s create the future — today.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <Link
            to="/projects"
            className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:scale-105 hover:bg-blue-400 transition-transform"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

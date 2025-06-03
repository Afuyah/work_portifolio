import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants with reduced motion support
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: shouldReduceMotion ? 0 : 0.5 
      } 
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gray-950 px-4 sm:px-6 md:px-16 overflow-hidden">
      {/* Cyberpunk grid background - reduced on mobile */}
      <div className="hidden sm:block absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAgTSAwIDIwIEwgNjAgMjAgTSAyMCAwIEwgMjAgNjAgTSAwIDMwIEwgNjAgMzAgTSAzMCAwIEwgMzAgNjAgTSAwIDQwIEwgNjAgNDAgTSA0MCAwIEwgNDAgNjAgTSAwIDUwIEwgNjAgNTAgTSA1MCAwIEwgNTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMjU1LDEwMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>
      
      {/* Neon glow effects - simplified on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neon border lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        
        {/* Animated neon particles - only on desktop */}
        {!shouldReduceMotion && window.innerWidth > 640 && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 20],
              y: [0, (Math.random() - 0.5) * 20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Neon blobs - reduced on mobile */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-[10%] left-[10%] w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-cyan-500/10 rounded-full blur-[60px] sm:blur-[120px] mix-blend-screen"
            animate={{
              x: [0, 20, 0],
              y: [0, 15, 0],
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[10%] w-[15rem] sm:w-[35rem] h-[15rem] sm:h-[35rem] bg-purple-500/10 rounded-full blur-[50px] sm:blur-[100px] mix-blend-screen"
            animate={{
              x: [0, -15, 0],
              y: [0, -10, 0],
              scale: [1, 1.03, 1],
              opacity: [0.1, 0.13, 0.1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
        </div>
      )}

      <motion.div 
        className="relative z-10 max-w-5xl text-center px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Solid color heading with gradient text for better visibility */}
        <motion.h1 
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
        >
          <span className="text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-[0_0_4px_rgba(34,211,238,0.4)] sm:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              Henry Bulimo
            </span>
          </span>
        </motion.h1>

        {/* Profession chips - smaller on mobile */}
        <motion.div variants={item} className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {['Software Developer', 'Full-Stack Engineer', 'IT Specialist'].map((title, i) => (
            <motion.span 
              key={i}
              className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-full text-xs sm:text-sm md:text-base font-medium text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all"
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
            >
              {title}
            </motion.span>
          ))}
        </motion.div>

        {/* Description - adjusted font sizes */}
        <motion.p 
          variants={item}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: shouldReduceMotion ? 0 : 1 }}
        >
          I design, develop, and support <span className="font-semibold text-cyan-400 drop-shadow-[0_0_3px_rgba(34,211,238,0.3)]">full-stack software systems</span> while providing <span className="font-semibold text-purple-400 drop-shadow-[0_0_3px_rgba(192,132,252,0.3)]">hands-on IT solutions</span> across platforms and teams.
        </motion.p>

        {/* CTA buttons - adjusted sizes */}
        <motion.div 
          variants={item}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
        >
          <Link
            to="/projects"
            className="relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            {/* Animated scanline - only on desktop */}
            {!shouldReduceMotion && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[scanline_3s_linear_infinite]"></div>
            )}
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-purple-700 opacity-0 group-hover:opacity-70 sm:group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </Link>
          
          <Link
            to="/contact"
            className="relative px-6 py-3 sm:px-8 sm:py-4 bg-gray-900 text-gray-300 border border-cyan-400/30 rounded-lg sm:rounded-xl font-semibold hover:border-cyan-400/50 hover:text-white hover:bg-gray-800/50 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
              Contact Me
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-70 sm:group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - smaller on mobile */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: shouldReduceMotion ? 0 : [0, 8, 0],
          opacity: shouldReduceMotion ? 1 : [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>

      {/* Cyberpunk Corner Accents - hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-16 sm:w-32 h-16 sm:h-32 border-t-2 border-l-2 border-cyan-400/50 pointer-events-none"></div>
      <div className="hidden sm:block absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 border-t-2 border-r-2 border-purple-400/50 pointer-events-none"></div>
    </section>
  );
}
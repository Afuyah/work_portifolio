import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';
import { SparklesIcon } from '@heroicons/react/24/solid';

const projects = [
  {
    title: 'KedaTrack Fleet Monitoring',
    description: 'Enterprise fleet management system with real-time tracking and IoT integration reducing logistics costs by 32%.',
    tags: ['Flask', 'FastAPI', 'PostgreSQL', 'IoT', 'Mapbox'],
    live: '#',
    code: 'https://github.com/henrybulimo/kedatrack',
    year: '2023',
    color: 'cyan'
  },
  {
    title: 'Nourisha Groceries AI',
    description: 'AI platform boosting profits 27% through fraud detection and recommendation systems.',
    tags: ['Python', 'Pandas', 'Scikit-Learn', 'FastAPI', 'ML'],
    live: '#',
    code: 'https://github.com/henrybulimo/nourisha-ai',
    year: '2022',
    color: 'purple'
  },
  {
    title: 'RefurbNest E-Commerce',
    description: 'Premium refurbished electronics marketplace processing $250k+ in first-year sales.',
    tags: ['Flask', 'Tailwind', 'SQLite', 'PayPal'],
    live: 'https://refurbnest.com',
    code: 'https://github.com/henrybulimo/refurbnest',
    year: '2021',
    color: 'blue'
  },
  {
    title: 'AI Sales Forecaster',
    description: 'Time-series forecasting improving inventory accuracy by 41% for grocery chains.',
    tags: ['Python', 'Pandas', 'Prophet', 'ARIMA'],
    live: '#',
    code: 'https://github.com/henrybulimo/forecasting',
    year: '2021',
    color: 'pink'
  },
  {
    title: 'RUSKEN Charity Platform',
    description: 'Donation system facilitating $180k+ in contributions for social causes.',
    tags: ['React', 'Flask', 'PostgreSQL', 'Vercel'],
    live: 'https://ruskencf2024.org',
    code: 'https://github.com/henrybulimo/rusken',
    year: '2020',
    color: 'green'
  },
  {
    title: 'ML Fraud Detection',
    description: 'Anomaly detection system reducing fraudulent transactions by 68%.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'AI/ML'],
    live: '#',
    code: 'https://github.com/henrybulimo/fraud-detection',
    year: '2019',
    color: 'amber'
  },
];

export default function Projects() {
  // Memoize particles so they don't remount on each render
  const particles = useMemo(() => Array.from({ length: 30 }), []);

  return (
    <section
      id="projects"
      className="relative bg-gray-950 py-28 px-6 md:px-16 overflow-hidden"
    >
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAgTSAwIDIwIEwgNjAgMjAgTSAyMCAwIEwgMjAgNjAgTSAwIDMwIEwgNjAgMzAgTSAzMCAwIEwgMzAgNjAgTSAwIDQwIEwgNjAgNDAgTSA0MCAwIEwgNDAgNjAgTSAwIDUwIEwgNjAgNTAgTSA1MCAwIEwgNTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMjU1LDEwMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>
      
      {/* Neon particles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Neon blobs */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-[35rem] h-[35rem] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.25, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-gray-900 px-3 py-1.5 rounded-full shadow-xs mb-3 border border-cyan-400/20">
            <SparklesIcon className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-400">Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 neon-text">
            <span className="drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">Development Journey</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Interactive timeline of my technical projects and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line (desktop only) */}
          <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 md:space-y-20">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-80px' }}
              >
                {/* Year Label */}
                <motion.div
                  className={`hidden md:flex absolute top-0 items-center justify-center ${
                    index % 2 === 0 ? 'left-1/2 -translate-x-16' : 'right-1/2 translate-x-16'
                  } -translate-y-8`}
                  whileHover={{ scale: 1.05 }}
                  aria-label={`Year: ${project.year}`}
                >
                  <span className={`bg-gray-900 px-2.5 py-1 rounded-full text-xs font-bold border border-${project.color}-400/30 text-${project.color}-300 shadow-sm`}>
                    {project.year}
                  </span>
                </motion.div>

                {/* Mobile Year Label */}
                <div
                  className={`md:hidden absolute -top-6 left-0 bg-gray-900 px-2 py-1 rounded text-xs font-bold border border-${project.color}-400/30 text-${project.color}-300 shadow-xs`}
                  aria-label={`Year: ${project.year}`}
                >
                  {project.year}
                </div>

                {/* Project Card Container */}
                <div
                  className={`relative ${
                    index % 2 === 0
                      ? 'md:ml-0 md:mr-auto md:pr-6 md:pl-0'
                      : 'md:ml-auto md:mr-0 md:pl-6 md:pr-0'
                  } md:w-1/2`}
                >
                  <motion.div
                    className={`bg-gray-900/80 p-6 rounded-2xl border border-${project.color}-400/20 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-${project.color}-400/50 backdrop-blur-sm relative overflow-hidden`}
                    whileHover={{ y: -3 }}
                  >
                    {/* Holographic grid overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
                    
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r from-${project.color}-500/10 to-purple-500/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className={`text-lg md:text-xl font-bold text-white group-hover:text-${project.color}-400 transition-colors`}>
                          {project.title}
                        </h3>
                        <motion.div className={`text-${project.color}-400 mt-1`} whileHover={{ x: 4 }}>
                          <FaArrowRight className="h-4 w-4" />
                        </motion.div>
                      </div>

                      <p className="text-sm md:text-base text-gray-300 mb-4">
                        {project.description}
                      </p>

                      {/* Tags as Connected Dots */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <motion.span
                            key={i}
                            className={`relative text-xs font-medium text-gray-400 group-hover:text-${project.color}-300 transition-colors`}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className={`absolute -left-3 top-1/2 -translate-y-1/2 h-1.5 w-1.5 bg-${project.color}-400 rounded-full group-hover:bg-${project.color}-500 transition-colors`}></span>
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 text-sm font-medium">
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className={`flex items-center gap-2 text-${project.color}-400 hover:text-${project.color}-300 transition-colors`}
                            whileHover={{ x: 2 }}
                          >
                            <FaExternalLinkAlt className="h-4 w-4 flex-shrink-0" />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                        <motion.a
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                          whileHover={{ x: 2 }}
                        >
                          <FaGithub className="h-4 w-4 flex-shrink-0" />
                          <span>Source Code</span>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/henrybulimo"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all group overflow-hidden"
          >
            <FaGithub className="h-5 w-5 relative z-10" />
            <span className="relative z-10">Explore Full Portfolio on GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            {/* Animated scanline */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[scanline_3s_linear_infinite]"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-purple-700 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></div>
          </a>
        </motion.div>
      </div>

      {/* Cyberpunk Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-400/50 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-purple-400/50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-purple-400/50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyan-400/50 pointer-events-none"></div>
    </section>
  );
}
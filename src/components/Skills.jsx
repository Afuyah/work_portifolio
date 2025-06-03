import { motion, useReducedMotion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CpuChipIcon, 
  WrenchScrewdriverIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const skills = [
  {
    category: 'Frontend',
    icon: <CodeBracketIcon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />,
    items: [
      { name: 'React', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Bootstrap', level: 96 },
      { name: 'HTML/CSS', level: 85 }
    ],
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-400/30'
  },
  {
    category: 'Backend',
    icon: <ServerIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />,
    items: [
      { name: 'Python', level: 90 },
      { name: 'Flask', level: 85 },
      { name: 'FastAPI', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'PostgreSQL', level: 85 }
    ],
    color: 'from-purple-500 to-fuchsia-600',
    borderColor: 'border-purple-400/30'
  },
  {
    category: 'Data Science',
    icon: <CpuChipIcon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400" />,
    items: [
      { name: 'Machine Learning', level: 80 },
      { name: 'AI Development', level: 75 },
      { name: 'Data Analysis', level: 85 },
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 85 }
    ],
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-400/30'
  },
  {
    category: 'DevOps',
    icon: <WrenchScrewdriverIcon className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />,
    items: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'Linux', level: 85 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 75 }
    ],
    color: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-400/30'
  }
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-gray-950 py-16 sm:py-28 px-4 sm:px-6 md:px-16 overflow-hidden" id="skills">
      {/* Cyberpunk grid background - hidden on mobile */}
      <div className="hidden sm:block absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAgTSAwIDIwIEwgNjAgMjAgTSAyMCAwIEwgMjAgNjAgTSAwIDMwIEwgNjAgMzAgTSAzMCAwIEwgMzAgNjAgTSAwIDQwIEwgNjAgNDAgTSA0MCAwIEwgNDAgNjAgTSAwIDUwIEwgNjAgNTAgTSA1MCAwIEwgNTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMjU1LDEwMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>
      
      {/* Neon glow effects - simplified on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neon border lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        
        {/* Animated neon particles - only on desktop */}
        {!shouldReduceMotion && window.innerWidth > 640 && [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
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

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          viewport={{ once: true }}
        >
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-white sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              <span className="drop-shadow-[0_0_3px_rgba(34,211,238,0.5)] sm:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">Technical Expertise</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            My toolkit for building exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: shouldReduceMotion ? 0 : index * 0.1, 
                duration: shouldReduceMotion ? 0 : 0.5 
              }}
              viewport={{ once: true }}
            >
              {/* Skill card - simplified on mobile */}
              <div className={`h-full bg-gray-900/80 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border ${skillSet.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 group-hover:bg-gray-900 backdrop-blur-sm relative overflow-hidden`}>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 relative z-10">
                  <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${skillSet.color} text-white shadow-md group-hover:shadow-${skillSet.color.split(' ')[0].split('-')[1]}-400/50 transition-all`}>
                    {skillSet.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{skillSet.category}</h3>
                </div>
                
                <ul className="space-y-3 sm:space-y-4 relative z-10">
                  {skillSet.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      className="relative"
                      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: shouldReduceMotion ? 0 : 0.1 + (i * 0.03),
                        duration: shouldReduceMotion ? 0 : 0.3
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                          {item.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2">
                        <motion.div
                          className={`h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${skillSet.color}`}
                          initial={{ width: shouldReduceMotion ? `${item.level}%` : 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ 
                            delay: shouldReduceMotion ? 0 : 0.2 + (i * 0.03),
                            duration: shouldReduceMotion ? 0 : 0.6
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills callout - simplified on mobile */}
        <motion.div
          className="mt-12 sm:mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 text-center border border-cyan-400/20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-gray-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-xs mb-3 sm:mb-4 border border-cyan-400/20">
            <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
            <span className="text-xs sm:text-sm font-medium text-amber-400">Continuous Learning</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Always Expanding My Skillset</h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
            I'm constantly exploring new technologies like Three.js, WebAssembly, and advanced AI/ML techniques to stay at the forefront of development.
          </p>
        </motion.div>
      </div>

      {/* Cyberpunk Corner Accents - hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-16 sm:w-32 h-16 sm:h-32 border-t-2 border-l-2 border-cyan-400/50 pointer-events-none"></div>
      <div className="hidden sm:block absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 border-t-2 border-r-2 border-purple-400/50 pointer-events-none"></div>
    </section>
  );
}
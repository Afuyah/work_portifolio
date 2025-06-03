import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CpuChipIcon, 
  WrenchScrewdriverIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const skills = [
  {
    category: 'Frontend Engineering',
    icon: <CodeBracketIcon className="h-6 w-6 text-cyan-400" />,
    items: [
      { name: 'React', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Next.js', level: 85 }
    ],
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-400/30'
  },
  {
    category: 'Backend Development',
    icon: <ServerIcon className="h-6 w-6 text-purple-400" />,
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
    category: 'Data Science & AI',
    icon: <CpuChipIcon className="h-6 w-6 text-emerald-400" />,
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
    category: 'DevOps & Tools',
    icon: <WrenchScrewdriverIcon className="h-6 w-6 text-amber-400" />,
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
  return (
    <section className="relative bg-gray-950 py-28 px-6 md:px-16 overflow-hidden" id="skills">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAgTSAwIDIwIEwgNjAgMjAgTSAyMCAwIEwgMjAgNjAgTSAwIDMwIEwgNjAgMzAgTSAzMCAwIEwgMzAgNjAgTSAwIDQwIEwgNjAgNDAgTSA0MCAwIEwgNDAgNjAgTSAwIDUwIEwgNjAgNTAgTSA1MCAwIEwgNTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMjU1LDEwMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>
      
      {/* Neon glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neon border lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        
        {/* Animated neon particles */}
        {[...Array(20)].map((_, i) => (
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
              x: [0, (Math.random() - 0.5) * 50],
              y: [0, (Math.random() - 0.5) * 50],
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

      {/* Neon blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            <span className="drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">Technical Expertise</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My toolkit for building exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skillSet.color} opacity-0 group-hover:opacity-20 rounded-xl blur-md transition-opacity duration-500 -z-10`} />
              
              {/* Skill card */}
              <div className={`h-full bg-gray-900/80 p-8 rounded-xl border ${skillSet.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 group-hover:bg-gray-900 backdrop-blur-sm relative overflow-hidden`}>
                {/* Holographic grid overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skillSet.color} text-white shadow-md group-hover:shadow-${skillSet.color.split(' ')[0].split('-')[1]}-400/50 transition-all`}>
                    {skillSet.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillSet.category}</h3>
                </div>
                
                <ul className="space-y-4 relative z-10">
                  {skillSet.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      className="relative"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skillSet.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ delay: 0.3 + (i * 0.05), duration: 0.8 }}
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

        {/* Cyberpunk skills callout */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-center border border-cyan-400/20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Scanlines */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbGluZXMpIiBvcGFjaXR5PSIwLjA1Ii8+PHBhdHRlcm4gaWQ9ImxpbmVzIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQgMCBMIDAgNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L3N2Zz4=')]"></div>
          
          <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full shadow-xs mb-4 border border-cyan-400/20">
            <SparklesIcon className="h-5 w-5 text-amber-400" />
            <span className="text-sm font-medium text-amber-400">Continuous Learning</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Always Expanding My Skillset</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm constantly exploring new technologies like Three.js, WebAssembly, and advanced AI/ML techniques to stay at the forefront of development.
          </p>
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
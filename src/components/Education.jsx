import { motion, useReducedMotion } from 'framer-motion';
import { AcademicCapIcon, BookOpenIcon, LightBulbIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const educationData = [
  {
    institution: 'Technical University of Mombasa',
    degree: 'Bachelor of Information Communication Technology (B.Tech)',
    specialization: 'Software Application Building & Software Development',
    period: '2015 – 2021',
    location: 'Mombasa, Kenya',
    highlights: [
      'Focused on software development, system design, and application engineering',
      'Comprehensive training in full-stack development methodologies',
      'Acquired expertise in building scalable software solutions',
    ],
    icon: <CodeBracketIcon className="h-6 w-6 text-cyan-400" />,
    color: 'cyan'
  },
  {
    institution: 'Emusire Boys High School',
    degree: 'Kenya Certificate of Secondary Education (KCSE)',
    period: '2010 – 2014',
    location: 'Vihiga, Kenya',
    highlights: [
      'Completed secondary education with focus on core sciences',
      'Strong foundation in Computer Studies, Mathematics, and Physics',
      'Developed foundational problem-solving skills',
      'Participated in technical and innovation clubs',
    ],
    icon: <BookOpenIcon className="h-6 w-6 text-purple-400" />,
    color: 'purple'
  },
];

export default function Education() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section className="relative bg-gray-950 py-16 sm:py-28 px-4 sm:px-6 md:px-16 overflow-hidden" id="education">
      {/* Cyberpunk grid background - hidden on mobile */}
      <div className="hidden sm:block absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAgTSAwIDIwIEwgNjAgMjAgTSAyMCAwIEwgMjAgNjAgTSAwIDMwIEwgNjAgMzAgTSAzMCAwIEwgMzAgNjAgTSAwIDQwIEwgNjAgNDAgTSA0MCAwIEwgNDAgNjAgTSAwIDUwIEwgNjAgNTAgTSA1MCAwIEwgNTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMjU1LDEwMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>
      
      {/* Neon glow effects - reduced on mobile */}
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
            animate={shouldReduceMotion ? {} : {
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
            animate={shouldReduceMotion ? {} : {
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

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          viewport={{ once: true }}
        >

        

        
                         <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-white sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
  <span className="drop-shadow-[0_0_3px_rgba(34,211,238,0.5)] sm:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">Academic Background</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            My educational journey and foundational knowledge
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline */}
          <div className="space-y-8 sm:space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.15, duration: shouldReduceMotion ? 0 : 0.6 }}
                viewport={{ once: true }}
              >
                {/* Cyberpunk timeline decoration - simplified on mobile */}
                <div className="absolute left-6 sm:left-8 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-transparent origin-top group-first:origin-center group-last:h-1/2"></div>
                <motion.div 
                  className="absolute left-4 sm:left-6 top-6 h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 sm:border-4 border-gray-900 bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg z-10 group-hover:shadow-cyan-400/30 transition-all duration-300"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
                >
                  {!shouldReduceMotion && (
                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping group-hover:bg-cyan-400/40 transition-all duration-300"></div>
                  )}
                </motion.div>

                <div className="relative pl-12 sm:pl-20 pb-8 sm:pb-10">
                  {/* Period badge */}
                  <motion.div 
                    className="absolute left-0 top-0 px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-900 text-xs font-bold rounded-full border border-cyan-400/20 shadow-sm text-cyan-300 z-10"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  >
                    {edu.period}
                  </motion.div>

                  {/* Cyberpunk education card */}
                  <motion.div 
                    className={`bg-gray-900/80 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-${edu.color}-400/20 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-${edu.color}-400/50 backdrop-blur-sm relative overflow-hidden`}
                    whileHover={shouldReduceMotion ? {} : { y: -5 }}
                  >
                    {/* Holographic grid overlay - hidden on mobile */}
                    <div className="hidden sm:block absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
                    
                    {/* Glow effect - reduced on mobile */}
                    <div className={`absolute -inset-1 bg-gradient-to-r from-${edu.color}-500/10 to-purple-500/10 rounded-lg sm:rounded-xl blur-sm opacity-0 group-hover:opacity-70 sm:group-hover:opacity-100 transition-opacity duration-500`}></div>

                    <div className="flex items-start gap-4 sm:gap-6 relative z-10">
                      {/* Institution icon - smaller on mobile */}
                      <div className={`hidden sm:flex items-center justify-center p-3 sm:p-4 rounded-lg bg-${edu.color}-900/20 border border-${edu.color}-400/20 text-${edu.color}-400 shadow-inner group-hover:shadow-${edu.color}-400/20 transition-all duration-300`}>
                        {edu.icon || <AcademicCapIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-white">{edu.institution}</h3>
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 bg-${edu.color}-900/30 text-${edu.color}-300 text-xs sm:text-sm font-medium rounded-full border border-${edu.color}-400/20 group-hover:border-${edu.color}-400/50 transition-all duration-300`}>
                            {edu.location}
                          </span>
                        </div>
                        
                        <h4 className={`mt-1 sm:mt-2 text-base sm:text-lg font-semibold text-${edu.color}-400`}>{edu.degree}</h4>
                        
                        {edu.specialization && (
                          <p className={`mt-1 sm:mt-2 text-sm sm:text-base text-gray-300 font-medium group-hover:text-${edu.color}-300 transition-colors`}>
                            <LightBulbIcon className={`h-3 w-3 sm:h-4 sm:w-4 inline-block mr-1 text-${edu.color}-400`} />
                            {edu.specialization}
                          </p>
                        )}
                        
                        <ul className="mt-2 sm:mt-4 space-y-2 sm:space-y-3">
                          {edu.highlights.map((point, i) => (
                            <motion.li 
                              key={i}
                              className="flex items-start text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: shouldReduceMotion ? 0 : 0.3 + (i * 0.1) }}
                              viewport={{ once: true }}
                            >
                              <span className={`inline-block w-1.5 h-1.5 bg-${edu.color}-500 rounded-full mt-1.5 sm:mt-2 mr-1.5 sm:mr-2 group-hover:bg-${edu.color}-400 transition-colors`}></span>
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cyberpunk CTA */}
          <motion.div
            className="mt-12 sm:mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all group overflow-hidden"
            >
              <span className="relative z-10 text-sm sm:text-base">Let's Connect</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              {/* Animated scanline - only on desktop */}
              {!shouldReduceMotion && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[scanline_3s_linear_infinite]"></div>
              )}
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-purple-700 opacity-0 group-hover:opacity-70 sm:group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Cyberpunk Corner Accents - hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-16 sm:w-32 h-16 sm:h-32 border-t-2 border-l-2 border-cyan-400/50 pointer-events-none"></div>
      <div className="hidden sm:block absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 border-t-2 border-r-2 border-purple-400/50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-purple-400/50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyan-400/50 pointer-events-none"></div>
    </section>
  );
}
import { motion, useReducedMotion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  const testimonials = [
    {
      name: 'Kevin OChae',
      position: 'CTO, Kedatrack',
      message: 'Henry transformed our digital infrastructure with his futuristic design thinking. His technical execution is unparalleled.',
      avatar: 'https://www.kedatracklimited.com/static/team/kevin.jpeg',
      color: 'cyan'
    },
    {
      name: 'Muchiri Erick',
      position: 'CEO, Nourisha',
      message: 'A true visionary. The sleek, modern systems Henry delivered exceeded all our expectations and set new standards.',
      avatar: 'https://i.pravatar.cc/150?img=4',
      color: 'purple'
    },
    {
      name: 'Dorcus Teddy',
      position: 'Director, BhaTek',
      message: 'Henry combines rare technical depth with exceptional design sensibility. Our team was consistently impressed.',
      avatar: 'https://i.pravatar.cc/150?img=5',
      color: 'blue'
    },
  ];

  return (
    <section className="relative bg-gray-950 py-16 sm:py-28 px-4 sm:px-6 md:px-16 overflow-hidden" id="testimonials">
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

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-white sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
  <span className="drop-shadow-[0_0_3px_rgba(34,211,238,0.5)] sm:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">Client Voices</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            What industry leaders say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: shouldReduceMotion ? 0 : idx * 0.1, 
                duration: shouldReduceMotion ? 0 : 0.5 
              }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`h-full bg-gray-900/80 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-${t.color}-400/20 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-${t.color}-400/50 backdrop-blur-sm relative overflow-hidden`}>
                {/* Holographic grid overlay - hidden on mobile */}
                <div className="hidden sm:block absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
                
                <FaQuoteLeft className={`text-${t.color}-400 text-xl sm:text-2xl mb-3 sm:mb-4 opacity-70`} />
                
                <div className="flex items-center mb-3 sm:mb-4 gap-3 sm:gap-4 relative z-10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-800 shadow-sm object-cover group-hover:border-cyan-400 transition-colors duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">{t.name}</h4>
                    <p className={`text-xs text-${t.color}-300`}>{t.position}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 relative z-10">
                  "{t.message}"
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto relative z-10">
                  <span>Verified Client</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 sm:mt-12 text-center text-xs sm:text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
          viewport={{ once: true }}
        >
          <p>All testimonials are from verified clients and partners</p>
        </motion.div>
      </div>

      {/* Cyberpunk Corner Accents - hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-16 sm:w-32 h-16 sm:h-32 border-t-2 border-l-2 border-cyan-400/50 pointer-events-none"></div>
      <div className="hidden sm:block absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 border-t-2 border-r-2 border-purple-400/50 pointer-events-none"></div>
    </section>
  );
}
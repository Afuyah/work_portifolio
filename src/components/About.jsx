import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, LanguageIcon, CalendarIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <section className="relative bg-gray-950 py-28 px-6 md:px-16 overflow-hidden" id="about">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAgTSAwIDIwIEwgNjAgMjAgTSAyMCAwIEwgMjAgNjAgTSAwIDMwIEwgNjAgMzAgTSAzMCAwIEwgMzAgNjAgTSAwIDQwIEwgNjAgNDAgTSA0MCAwIEwgNDAgNjAgTSAwIDUwIEwgNjAgNTAgTSA1MCAwIEwgNTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMjU1LDEwMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>
      
      {/* Neon glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neon border lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-pink-500/30 to-transparent"></div>
        
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
          className="flex flex-col md:flex-row items-center gap-16 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          {/* Cyberpunk Profile Image */}
          <motion.div
            className="relative w-56 h-56 md:w-64 md:h-64 group"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            {/* Neon border effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-500"></div>
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/50 transition-all duration-500"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            {/* Holographic glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-purple-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Profile image with scanlines */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-gray-900 shadow-lg h-full w-full group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://www.kedatracklimited.com/static/team/henry1.jpeg"
                alt="Henry Bulimo"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbGluZXMpIiBvcGFjaXR5PSIwLjA1Ii8+PHBhdHRlcm4gaWQ9ImxpbmVzIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQgMCBMIDAgNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L3N2Zz4=')]"></div>
            </div>
            
            {/* Floating neon badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg border border-cyan-400/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
            >
              <span className="text-sm font-bold flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available
              </span>
            </motion.div>
          </motion.div>

          {/* Content area */}
          <motion.div
            className="flex-1"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 "
              variants={item}
            >
              <span className="drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">About Me</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              variants={item}
            >
              I'm <span className="font-semibold text-white neon-text-white">Henry Bulimo</span> — a full-stack developer, software engineer, and IT assistant based in Mombasa, Kenya. I specialize in building scalable applications, managing IT infrastructure, and delivering user-focused digital solutions. With a growing edge in machine learning and AI, I merge practical innovation with emerging tech to solve real-world problems.
            </motion.p>

            {/* Cyberpunk info cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              variants={container}
            >
              {[
                {
                  icon: <MapPinIcon className="w-5 h-5 text-cyan-400" />,
                  title: "Location",
                  value: "Mombasa, Kenya",
                  color: "cyan"
                },
                {
                  icon: <EnvelopeIcon className="w-5 h-5 text-purple-400" />,
                  title: "Email",
                  value: "afuya.b@gmail.com",
                  color: "purple"
                },
                {
                  icon: <LanguageIcon className="w-5 h-5 text-blue-400" />,
                  title: "Languages",
                  value: "English, Swahili",
                  color: "blue"
                },
                {
                  icon: <CalendarIcon className="w-5 h-5 text-pink-400" />,
                  title: "Availability",
                  value: "Full-time & Freelance",
                  color: "pink"
                }
              ].map((info, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center gap-3 p-4 bg-gray-900/50 border border-${info.color}-400/20 rounded-xl hover:shadow-lg hover:shadow-${info.color}-500/10 transition-all group`}
                  variants={item}
                  whileHover={{ y: -3 }}
                >
                  <div className={`p-3 rounded-lg bg-${info.color}-900/20 border border-${info.color}-400/20 text-${info.color}-400 group-hover:border-${info.color}-400/50 transition-all`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 group-hover:text-${info.color}-300 transition-colors">{info.title}</p>
                    <p className="font-medium text-white group-hover:text-${info.color}-200 transition-colors">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Cyberpunk Download Button */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="/Henry_Bulimo_CV.pdf"
                download
                className="relative inline-flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10">Download CV</span>
                <ArrowDownTrayIcon className="w-5 h-5 group-hover:animate-bounce relative z-10" />
                
                {/* Neon hover effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-purple-700 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></span>
                
                {/* Animated scanline */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[scanline_3s_linear_infinite]"></div>
              </a>
            </motion.div>
          </motion.div>
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

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};
import { motion, useReducedMotion } from 'framer-motion';
import { FiSend, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative bg-gray-950 py-16 sm:py-28 px-4 sm:px-6 md:px-16 overflow-hidden">
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

      <div className="max-w-4xl mx-auto relative">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          viewport={{ once: true }}
        >
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-white sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
  <span className="drop-shadow-[0_0_3px_rgba(34,211,238,0.5)] sm:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">Let's Connect</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            Have a project or want to collaborate? I'm just one message away.
          </p>
        </motion.div>

        {/* Cyberpunk Contact Form */}
        <motion.form
          action="https://formspree.io/f/xwpbkokv"
          method="POST"
          className="space-y-4 sm:space-y-6 bg-gray-900/80 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-cyan-400/20 backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
          viewport={{ once: true }}
        >
          {/* Holographic grid overlay - hidden on mobile */}
          <div className="hidden sm:block absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
          
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl blur-sm opacity-0 hover:opacity-70 sm:hover:opacity-100 transition-opacity duration-500"></div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 relative z-10">
            {/* Name Field */}
            <motion.div 
              className="relative"
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-cyan-400">
                <FiUser className="text-sm sm:text-base" />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-800 border border-cyan-400/30 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-gray-500 text-sm sm:text-base"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div 
              className="relative"
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-purple-400">
                <FiMail className="text-sm sm:text-base" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-800 border border-purple-400/30 text-white rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-gray-500 text-sm sm:text-base"
              />
            </motion.div>
          </div>

          {/* Subject Field */}
          <motion.div 
            className="relative"
            whileHover={shouldReduceMotion ? {} : { y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute left-3 sm:left-4 top-3 sm:top-4 text-blue-400">
              <FiMessageSquare className="text-sm sm:text-base" />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-800 border border-blue-400/30 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-500 text-sm sm:text-base"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div 
            className="relative"
            whileHover={shouldReduceMotion ? {} : { y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute left-3 sm:left-4 top-3 sm:top-4 text-cyan-400">
              <FiMessageSquare className="text-sm sm:text-base" />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-800 border border-cyan-400/30 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-gray-500 text-sm sm:text-base"
            ></textarea>
          </motion.div>

          {/* Cyberpunk Submit Button */}
          <motion.div
            className="pt-2 sm:pt-4"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
          >
            <button
              type="submit"
              className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <FiSend className="text-sm sm:text-base relative z-10" />
              <span className="relative z-10 text-sm sm:text-base">Send Message</span>
              {/* Animated scanline - only on desktop */}
              {!shouldReduceMotion && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[scanline_3s_linear_infinite]"></div>
              )}
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-purple-700 opacity-0 group-hover:opacity-70 sm:group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></div>
            </button>
          </motion.div>
        </motion.form>

        {/* Additional Contact Info */}
        <motion.div
          className="mt-12 sm:mt-16 text-center text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
          viewport={{ once: true }}
        >
          <p>Prefer email? Reach me directly at <a href="mailto:henrybulimo@gmail.com" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">henrybulimo@gmail.com</a></p>
        </motion.div>
      </div>

      {/* Cyberpunk Corner Accents - hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-16 sm:w-32 h-16 sm:h-32 border-t-2 border-l-2 border-cyan-400/50 pointer-events-none"></div>
      <div className="hidden sm:block absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 border-t-2 border-r-2 border-purple-400/50 pointer-events-none"></div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gray-950 py-28 px-6 md:px-16 overflow-hidden">
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

      <div className="max-w-4xl mx-auto relative">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 ">
            <span className="drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">Let's Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            Have a project or want to collaborate? I'm just one message away.
          </p>
        </motion.div>

        {/* Cyberpunk Contact Form */}
        <motion.form
          action="https://formspree.io/f/xwpbkokv"
          method="POST"
          className="space-y-6 bg-gray-900/80 p-8 md:p-10 rounded-2xl shadow-lg border border-cyan-400/20 backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Holographic grid overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
          
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl blur-sm opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {/* Name Field */}
            <motion.div 
              className="relative"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">
                <FiUser className="text-lg" />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-cyan-400/30 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-gray-500"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div 
              className="relative"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                <FiMail className="text-lg" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-purple-400/30 text-white rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-gray-500"
              />
            </motion.div>
          </div>

          {/* Subject Field */}
          <motion.div 
            className="relative"
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute left-4 top-4 text-blue-400">
              <FiMessageSquare className="text-lg" />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-blue-400/30 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-500"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div 
            className="relative"
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute left-4 top-4 text-cyan-400">
              <FiMessageSquare className="text-lg" />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-cyan-400/30 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-gray-500"
            ></textarea>
          </motion.div>

          {/* Cyberpunk Submit Button */}
          <motion.div
            className="pt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <FiSend className="text-lg relative z-10" />
              <span className="relative z-10">Send Message</span>
              {/* Animated scanline */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[scanline_3s_linear_infinite]"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-purple-700 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></div>
            </button>
          </motion.div>
        </motion.form>

        {/* Additional Contact Info */}
        <motion.div
          className="mt-16 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>Prefer email? Reach me directly at <a href="mailto:henrybulimo@gmail.com" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">henrybulimo@gmail.com</a></p>
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
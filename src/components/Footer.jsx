import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 text-white py-16 border-t border-cyan-400/20 overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAgTSAwIDIwIEwgNjAgMjAgTSAyMCAwIEwgMjAgNjAgTSAwIDMwIEwgNjAgMzAgTSAzMCAwIEwgMzAgNjAgTSAwIDQwIEwgNjAgNDAgTSA0MCAwIEwgNDAgNjAgTSAwIDUwIEwgNjAgNTAgTSA1MCAwIEwgNTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMjU1LDEwMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>
      
      {/* Neon glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neon border lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        
        {/* Animated neon particles */}
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 neon-text">
              <span className="drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">Henry Bulimo</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting innovative digital experiences with cutting-edge technology and futuristic design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h4 className="text-gray-300 font-medium mb-6 text-lg border-b border-cyan-400/30 pb-2">Navigation</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <motion.a 
                      href={`/${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-300 font-medium mb-6 text-lg border-b border-purple-400/30 pb-2">Resources</h4>
              <ul className="space-y-3">
                {['Blog', 'Case Studies', 'GitHub', 'Resume'].map((item) => (
                  <li key={item}>
                    <motion.a 
                      href="#" 
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-gray-300 font-medium text-lg border-b border-blue-400/30 pb-2">Connect With Me</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <FaGithub className="text-lg" />, url: 'https://github.com/henrybulimo', color: 'gray' },
                { icon: <FaLinkedin className="text-lg" />, url: 'https://linkedin.com/in/henrybulimo', color: 'blue' },
                { icon: <FaTwitter className="text-lg" />, url: 'https://twitter.com/henrybulimo', color: 'cyan' },
                { icon: <FaEnvelope className="text-lg" />, url: 'mailto:henrybulimo@gmail.com', color: 'purple' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-gray-900 border border-${social.color}-400/30 hover:border-${social.color}-400 flex items-center justify-center text-gray-300 hover:text-${social.color}-400 transition-all group relative overflow-hidden`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${social.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="pt-8 border-t border-cyan-400/20 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          © {currentYear} Henry Bulimo. All rights reserved.
          <div className="mt-2 text-gray-600">
            Built with <span className="text-cyan-400">React</span> & <span className="text-purple-400">Tailwind CSS</span>
          </div>
        </motion.div>
      </div>

      {/* Cyberpunk Corner Accents */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-purple-400/50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyan-400/50 pointer-events-none"></div>
    </footer>
  );
}
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="bg-white py-20 px-6 md:px-16 text-center md:text-left">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* 👤 Image */}
        <motion.div
          className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-lg hover:scale-105 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/profile.jpg"
            alt="Henry Bulimo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ✍️ Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            I'm Henry Bulimo — a full-stack developer with a passion for crafting scalable web apps, intelligent user interfaces, and futuristic digital experiences. I work at the intersection of design, code, and innovation — solving real-world problems with clean, maintainable code and human-first design.
          </p>

          {/* 📍 Quick Info */}
          <ul className="text-gray-600 space-y-2">
            <li><strong>📍 Location:</strong> Nairobi, Kenya</li>
            <li><strong>📧 Email:</strong> henrybulimo@gmail.com</li>
            <li><strong>🗣️ Languages:</strong> English, Swahili</li>
            <li><strong>✅ Available:</strong> Freelance & Remote Projects</li>
          </ul>

          {/* 📄 Download CV */}
          <a
            href="/Henry_Bulimo_CV.pdf"
            download
            className="mt-6 inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-500 transition"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}

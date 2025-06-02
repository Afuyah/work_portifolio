import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'RefurbNest E-Commerce',
    description: 'High-end refurbished electronics store with dynamic specs, payment integration, and admin dashboard.',
    tags: ['Flask', 'Tailwind', 'SQLite', 'PayPal'],
    live: 'https://refurbnest.com',
    code: 'https://github.com/henrybulimo/refurbnest',
  },
  {
    title: 'RUSKEN Charity Website',
    description: 'Donation platform with project management, integrated Paystack/PayPal, and custom CMS.',
    tags: ['React', 'Flask', 'PostgreSQL', 'Vercel'],
    live: 'https://ruskencf2024.org',
    code: 'https://github.com/henrybulimo/rusken',
  },
  {
    title: 'AI Sales Forecaster',
    description: 'Grocery sales time-series forecasting using Prophet, ARIMA, and interactive charts.',
    tags: ['Python', 'Pandas', 'Prophet', 'ARIMA'],
    live: '#',
    code: 'https://github.com/henrybulimo/forecasting',
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          🚀 Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 group border border-transparent hover:border-accent"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition">
                {project.title}
              </h3>
              <p className="text-gray-700 my-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-200 rounded-full px-3 py-1 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-accent text-lg">
                {project.live && project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
                <a href={project.code} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                  <FaGithub /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

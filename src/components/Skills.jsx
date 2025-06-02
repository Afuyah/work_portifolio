import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript (ES6+)'],
  },
  {
    category: 'Backend',
    items: ['Python', 'Flask', 'FastAPI', 'Node.js', 'PostgreSQL'],
  },
  {
    category: 'Tools & Other',
    items: ['Git', 'GitHub', 'Linux', 'Figma', 'Vercel', 'Render', 'Netlify'],
  },
];

export default function Skills() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          🛠️ My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 hover:bg-accent hover:text-white rounded-xl p-6 shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4">{skillSet.category}</h3>
              <ul className="space-y-2 text-left text-gray-700 hover:text-white">
                {skillSet.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-accent">▹</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

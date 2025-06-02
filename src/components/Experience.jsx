import ExperienceItem from './ExperienceItem';

const experiences = [
  {
    year: '2023 - Present',
    role: 'Lead Full Stack Developer',
    company: 'RefurbNest',
    description:
      'Architected a scalable e-commerce system using Flask + React. Led a team of 4 developers and integrated secure payment systems.',
  },
  {
    year: '2021 - 2023',
    role: 'Software Engineer',
    company: 'Bulimo Tech Solutions',
    description:
      'Developed inventory, POS, and analytics dashboards for SMEs using Python, Flask, and PostgreSQL.',
  },
  {
    year: '2020 - 2021',
    role: 'Freelance Developer',
    company: 'Upwork/Fiverr',
    description:
      'Worked with international clients building portfolio websites, task managers, and AI-powered tools using modern web tech.',
  },
];

export default function Experience() {
  return (
    <section className="bg-white py-20 px-6 md:px-16 text-primary" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          🧠 Experience
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

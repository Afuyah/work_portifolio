import { motion, useReducedMotion } from 'framer-motion';
import { BriefcaseIcon, RocketLaunchIcon, CodeBracketIcon, CommandLineIcon, BuildingOfficeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    year: '2023 - Present',
    role: 'Lead Full Stack Developer',
    company: 'KedaTrack Limited',
    logo: 'https://www.kedatracklimited.com/static/logo34.png',
    description: 'Leading development at a fleet management and IoT company. Designed and deployed scalable fleet systems, dashboards, and custom APIs.',
  },
  {
    year: '2023',
    role: 'Lead Developer',
    company: 'RUSKEN Charitable Foundation',
    logo: 'https://www.ruskencf2024.org/static/images/Rusken-Charity-Foundation.png',
    description: 'Built ruskencf.org — a fully responsive donation platform with M-Pesa & PayPal integration. Supported admin controls and donor tracking.',
  },
  {
    year: '2022 - Present',
    role: 'Lead Software Developer',
    company: 'BhaTek Software Solutions',
    logo: '/logos/bhatek.png',
    description: 'Led the development of over 50 POS and retail systems for clients. Oversaw deployments, custom reports, and training for SMEs.',
  },
  {
    year: '2022',
    role: 'Full Stack Developer',
    company: 'Nourisha Groceries',
    logo: '/logos/nourisha.png',
    description: 'Created an end-to-end grocery eCommerce application with order management, secure checkout, and responsive UI/UX.',
  },
  {
    year: '2020 - 2022',
    role: 'Freelance Developer',
    company: 'Upwork & Fiverr',
    logo: 'https://www.upwork.com/ab/jobs-home',
    description: 'Delivered custom web solutions for clients worldwide — including task managers, company sites, and ML-powered tools.',
  },
  {
    year: '2017',
    role: 'IT Assistant (Intern)',
    company: 'Kenya Revenue Authority (KRA)',
    logo: 'https://www.kra.go.ke/templates/kra/images/kra/logoKRA.webp',
    description: 'Supported end-user systems and resolved technical issues. Gained valuable experience working in a large-scale enterprise IT setting.',
  },
];

const ExperienceItem = ({ year, role, company, logo, description, index }) => {
  const shouldReduceMotion = useReducedMotion();
  
  const iconMap = {
    'KedaTrack Limited': <RocketLaunchIcon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />,
    'RUSKEN Charitable Foundation': <GlobeAltIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />,
    'BhaTek Software Solutions': <CommandLineIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />,
    'Nourisha Groceries': <BuildingOfficeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-pink-400" />,
    'Upwork & Fiverr': <CodeBracketIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />,
    'Kenya Revenue Authority (KRA)': <BriefcaseIcon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
  };

  const companyColors = {
    'KedaTrack Limited': 'cyan',
    'RUSKEN Charitable Foundation': 'purple',
    'BhaTek Software Solutions': 'blue',
    'Nourisha Groceries': 'pink',
    'Upwork & Fiverr': 'green',
    'Kenya Revenue Authority (KRA)': 'yellow'
  };

  const color = companyColors[company] || 'indigo';

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Timeline decoration - simplified on mobile */}
      <div className="absolute left-4 sm:left-8 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-transparent origin-top group-first:origin-center group-last:h-1/2" />
      <motion.div 
        className="absolute left-2 sm:left-6 top-6 h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 sm:border-4 border-gray-900 bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg z-10 group-hover:shadow-cyan-400/30 transition-all duration-300"
        whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
      >
        {!shouldReduceMotion && (
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping group-hover:bg-cyan-400/40 transition-all duration-300"></div>
        )}
      </motion.div>

      <div className="relative pl-10 sm:pl-20 pb-8 sm:pb-10">
        {/* Year badge - smaller on mobile */}
        <motion.div 
          className="absolute left-0 top-0.5 px-2 py-0 sm:px-3 sm:py-0 bg-gray-900 text-xs font-bold rounded-full border border-cyan-400/20 shadow-sm text-cyan-300 z-10"
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
        >
          {year}
        </motion.div>

        {/* Experience card - simplified on mobile */}
        <motion.div 
          className={`bg-gray-900/80 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-${color}-400/20 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-${color}-400/50 group-hover:bg-gray-900 backdrop-blur-sm relative overflow-hidden`}
          whileHover={shouldReduceMotion ? {} : { y: -3 }}
        >
          {/* Holographic grid overlay - hidden on mobile */}
          <div className="hidden sm:block absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI11LDAuMTMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
          
          {/* Glow effect - reduced on mobile */}
          <div className={`absolute -inset-1 bg-gradient-to-r from-${color}-500/10 to-purple-500/10 rounded-lg sm:rounded-xl blur-sm opacity-0 group-hover:opacity-70 sm:group-hover:opacity-100 transition-opacity duration-500`}></div>
          
          <div className="flex items-start gap-3 sm:gap-4 relative z-10">
            {/* Logo/icon - hidden on mobile */}
            <div className={`hidden sm:flex items-center justify-center p-2 sm:p-3 rounded-lg bg-${color}-900/20 border border-${color}-400/20 text-${color}-400 shadow-inner group-hover:shadow-${color}-400/20 transition-all duration-300`}>
              {logo ? (
                <img src={logo} alt="logo" className="h-6 w-6 sm:h-8 sm:w-8 object-contain" />
              ) : (
                iconMap[company] || <BriefcaseIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">{role}</h3>
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 bg-${color}-900/30 text-${color}-300 text-xs sm:text-sm font-medium rounded-full border border-${color}-400/20 group-hover:border-${color}-400/50 transition-all duration-300`}>
                  {company}
                </span>
              </div>
              
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">{description}</p>
              
              {/* Tech stack pills - smaller on mobile */}
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
                {getTechStack(company).map((tech, i) => (
                  <motion.span 
                    key={i}
                    className={`px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-medium bg-gray-800 border border-${color}-400/20 rounded-full text-${color}-300 group-hover:border-${color}-400/50 transition-all duration-300`}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const getTechStack = (company) => {
  const stacks = {
    'KedaTrack Limited': ['React', 'Node.js', 'IoT', 'MongoDB', 'AWS'],
    'RUSKEN Charitable Foundation': ['Next.js', 'Stripe', 'M-Pesa', 'Firebase'],
    'BhaTek Software Solutions': ['Python', 'Django', 'PostgreSQL', 'Docker'],
    'Nourisha Groceries': ['React', 'Express', 'MongoDB', 'Redux'],
    'Upwork & Fiverr': ['JavaScript', 'Python', 'Flask', 'MySQL'],
    'Kenya Revenue Authority (KRA)': ['IT Support', 'Windows', 'Networking']
  };
  return stacks[company] || [];
};

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section className="relative bg-gray-950 py-16 sm:py-28 px-4 sm:px-6 md:px-16 overflow-hidden" id="experience">
      {/* Cyberpunk decorative elements - reduced on mobile */}
      <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-xl sm:blur-3xl opacity-10 sm:opacity-20 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-36 sm:w-72 h-36 sm:h-72 bg-purple-500/10 rounded-full mix-blend-screen filter blur-xl sm:blur-3xl opacity-10 sm:opacity-20 -z-0"></div>
      
      {/* Animated grid background - hidden on mobile */}
      <div className="hidden sm:block absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAgTSAwIDIwIEwgNjAgMjAgTSAyMCAwIEwgMjAgNjAgTSAwIDMwIEwgNjAgMzAgTSAzMCAwIEwgMzAgNjAgTSAwIDQwIEwgNjAgNDAgTSA0MCAwIEwgNDAgNjAgTSAwIDUwIEwgNjAgNTAgTSA1MCAwIEwgNTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMjU1LDEwMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>
      
      {/* Neon border accents - hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-16 sm:w-32 h-16 sm:h-32 border-t-2 border-l-2 border-cyan-400/30 pointer-events-none"></div>
      <div className="hidden sm:block absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 border-t-2 border-r-2 border-purple-400/30 pointer-events-none"></div>
      <div className="hidden sm:block absolute bottom-0 left-0 w-16 sm:w-32 h-16 sm:h-32 border-b-2 border-l-2 border-purple-400/30 pointer-events-none"></div>
      <div className="hidden sm:block absolute bottom-0 right-0 w-16 sm:w-32 h-16 sm:h-32 border-b-2 border-r-2 border-cyan-400/30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-white sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
  <span className="drop-shadow-[0_0_3px_rgba(34,211,238,0.5)] sm:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
    Professional Journey
  </span>
</h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            My career path through innovative companies and challenging projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Main timeline */}
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} index={index} {...exp} />
            ))}
          </div>

          {/* CTA - smaller on mobile */}
          <motion.div
            className="mt-12 sm:mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="relative inline-flex items-center gap-1 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all group overflow-hidden"
            >
              <span className="relative z-10 text-sm sm:text-base">Let's Build Together</span>
             



              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              {/* Animated scanline */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[scanline_3s_linear_infinite]"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-purple-700 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
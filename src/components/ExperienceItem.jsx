export default function ExperienceItem({ year, role, company, description }) {
  return (
    <div className="relative pl-10 pb-12 border-l-4 border-accent">
      <div className="absolute left-[-10px] top-1 w-5 h-5 rounded-full bg-accent border-2 border-white shadow-lg"></div>
      <h3 className="text-xl font-semibold text-primary">
        {role} @ <span className="text-accent">{company}</span>
      </h3>
      <span className="text-sm text-gray-500 italic">{year}</span>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
}

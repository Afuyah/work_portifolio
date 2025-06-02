export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left: Signature */}
        <div className="text-center md:text-left text-sm">
          © {currentYear} <span className="font-semibold text-accent">Henry Bulimo</span>. All rights reserved.
        </div>

        {/* Center: Quick links */}
        <div className="flex space-x-4 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/skills" className="hover:underline">Skills</a>
          <a href="/experience" className="hover:underline">Experience</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        {/* Right: Social links */}
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/henrybulimo" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/henrybulimo" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:henrybulimo@gmail.com" className="hover:text-accent transition">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

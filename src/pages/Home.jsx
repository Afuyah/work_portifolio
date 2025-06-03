import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Testimonials />
    </>
  );
}

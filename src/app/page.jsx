'use client'

import Link from "next/link";
import { useState , useEffect , useRef , RefObject } from "react";
import "./styles/home.css"


// Import section components
import HomeSection from "./pages/home/page";
import About from "./pages/about/page";
import TechStack from "./pages/tech-stack/page";
// import Projects from "./pages/projects/page";
import Contact from "./pages/contact/page";


export default function Home() {

  const [activeLink , setActiveLink] = useState('#home');
  const [clickingNavLink, setClickingNavLink] = useState(false);

    // Create refs for sections
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const techStackRef = useRef(null);
    // const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const sections = [
      { id: "#home", title: "Home", ref: homeRef },
      { id: "#about", title: "About", ref: aboutRef },
      { id: "#tech-stack", title: "Tech Stack", ref: techStackRef },
      // { id: "#projects", title: "Projects", ref: projectsRef },
      { id: "#contact", title: "Contact", ref: contactRef },
    ];
  

//intersection observer

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !clickingNavLink) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach(({ ref }) => {
    if (ref.current) observer.observe(ref.current);
  });

  return () => observer.disconnect();
}, [clickingNavLink]);

// handling the nav linkl click

const handleNavClick = (id) => {
  setClickingNavLink(true); // Disable smooth scroll behavior
  setActiveLink(id);

  // Use native scroll behavior (without smooth scroll)
  document.querySelector(id)?.scrollIntoView({ behavior: "auto" });
  setTimeout(() => setClickingNavLink(false), 500);
};






  return (
   <div className='home-container'>
      <div className='sidenav-container'>
        <nav className='sidenav'>
        {sections.map((section) => (
            <Link
              key={section.id}
              href={section.id}
              className={activeLink === section.id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(section.id);
              }}
            >
              {section.title}
            </Link>
          ))}
        </nav>
      </div>
      
      {/*section contents */}
      <div className="section-container">
        <div id="home" ref={homeRef}>
          <HomeSection />
        </div>
        <div id="about" ref={aboutRef}>
          <About />
        </div>
        <div id="tech-stack" ref={techStackRef}>
          <TechStack />
        </div>
        {/* <div id="projects" ref={projectsRef}>
          <Projects />
        </div> */}
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

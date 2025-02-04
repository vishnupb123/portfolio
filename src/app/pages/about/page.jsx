'use client'
import { useState, useRef, useEffect } from "react";
import "../../styles/about.css";

export default function About() {
  const [journeyMode, setJourneyMode] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const journeyWrapperRef = useRef(null);
  const journeyContainerRef = useRef(null);

  // Calculate max horizontal scroll when journey mode is activated
  useEffect(() => {
    if (journeyMode && journeyWrapperRef.current && journeyContainerRef.current) {
      const max =
        journeyContainerRef.current.scrollWidth -
        journeyWrapperRef.current.clientWidth;
      setMaxScroll(max);
      setScrollOffset(0);
    }
  }, [journeyMode]);

  // Attach a non-passive native wheel listener to intercept vertical scrolling
  useEffect(() => {
    const wrapper = journeyWrapperRef.current;
    if (journeyMode && wrapper) {
      const wheelHandler = (e) => {
        if (
          (e.deltaY > 0 && scrollOffset < maxScroll) ||
          (e.deltaY < 0 && scrollOffset > 0)
        ) {
          e.preventDefault();
          e.stopPropagation();
          const newOffset = Math.min(
            Math.max(scrollOffset + e.deltaY, 0),
            maxScroll
          );
          setScrollOffset(newOffset);
        }
      };
      wrapper.addEventListener("wheel", wheelHandler, { passive: false });
      return () => {
        wrapper.removeEventListener("wheel", wheelHandler);
      };
    }
  }, [journeyMode, scrollOffset, maxScroll]);

  const handleJourneyClick = () => {
    setJourneyMode(true);
  };

  const handleBackClick = () => {
    setJourneyMode(false);
    setScrollOffset(0);
  };

  return (
    <section id="about" className={`content-section ${journeyMode ? "journey-mode" : ""}`}>
      <div className="about-container">
        {/* INITIAL MODE */}
        {!journeyMode && (
          <div className="about-intro">
            <h2>Who am I?</h2>
            <p>
              I am Vishnu PB, a passionate Full-Stack Developer specializing in the MERN stack.
              My journey has been shaped by rigorous academics, enriching internships, and hands-on professional experiences.
              I invite you to scroll through the phases of my career and life, each representing a stepping stone toward innovation and growth.
            </p>
            <button className="journey-btn" onClick={handleJourneyClick}>
              See My Journey
            </button>
          </div>
        )}

        {/* JOURNEY MODE */}
        {journeyMode && (
          <div className="journey-mode-container">
            <button className="back-btn" onClick={handleBackClick}>
              Back
            </button>
            <div className="journey-wrapper" ref={journeyWrapperRef}>
              <div
                className="journey-container"
                ref={journeyContainerRef}
                style={{ transform: `translateX(-${scrollOffset}px)` }}
              >
                {/* Card 1: Bachelor Degree */}
                <div className="journey-section">
                  <div className="card-text">
                    <h3>Bachelor Degree</h3>
                    <p>
                      My academic journey began at Calicut University where I pursued a BSc in Computer Science.
                      Here I built a solid foundation in coding, algorithms, and systems design.
                    </p>
                    <ul>
                      <li>Graduated with distinction while balancing multiple projects.</li>
                      <li>Developed innovative software projects that were recognized by faculty.</li>
                      <li>Engaged in extracurricular tech clubs that enriched my learning.</li>
                    </ul>
                    <p>
                      These formative years instilled in me a passion for technology and problem-solving, paving the way for my future endeavors.
                    </p>
                  </div>
                  <div className="card-images">
                    <img src="/assets/images/college2.jpeg" alt="Graduation ceremony" />
                    <img src="/assets/images/college1.jpeg" alt="University campus" />
                  </div>
                </div>

                {/* Card 2: Internship Experience */}
                <div className="journey-section">
                  <div className="card-text">
                    <h3>Internship Experience</h3>
                    <p>
                      My internship was the bridge between academic theories and the real-world application of technology.
                      Working in a dynamic startup environment, I was immersed in the world of modern web development.
                    </p>
                    <ul>
                      <li>Collaborated on cross-functional teams to build robust applications.</li>
                      <li>Learned agile methodologies and iterative development cycles.</li>
                      <li>Refined my skills in both front-end and back-end development.</li>
                    </ul>
                    <p>
                      This period was pivotal, as it boosted my confidence in tackling complex problems and set the stage for a professional career.
                    </p>
                  </div>
                  <div className="card-images">
                    <img src="/assets/images/internship1.jpg" alt="Coding session" />
                    <img src="/assets/images/internship2.jpg" alt="Team collaboration" />
                    {/* <img src="/images/internship3.jpg" alt="Project meeting" /> */}
                  </div>
                </div>

                {/* Card 3: Full-Time Placement */}
                <div className="journey-section">
                  <div className="card-text">
                    <h3>Full-Time Placement</h3>
                    <p>
                      Transitioning into the professional world, I landed a full-time role as a software developer.
                      In this phase, I contributed to the development of scalable applications using the MERN stack.
                    </p>
                    <ul>
                      <li>Worked on high-impact projects for a leading tech firm.</li>
                      <li>Enhanced my coding skills while mentoring junior developers.</li>
                      <li>Adopted best practices in code optimization and testing.</li>
                    </ul>
                    <p>
                      This experience deepened my technical expertise and honed my ability to collaborate effectively in a professional setting.
                    </p>
                  </div>
                  <div className="card-images">
                    <img src="/assets/images/work1.jpg" alt="Office environment" />
                    <img src="/assets/images/work2.jpg" alt="Team brainstorming" />
                  </div>
                </div>

                {/* Card 4: Resignation */}
                <div className="journey-section">
                  <div className="card-text">
                    <h3>Resignation</h3>
                    <p>
                      After years of valuable experience, I took the courageous step of resigning from my full-time position.
                      This period was characterized by introspection and the desire to pursue my dreams without compromise.
                    </p>
                    <ul>
                      <li>Reassessed my career goals and aspirations.</li>
                      <li>Explored opportunities to innovate and lead in emerging tech fields.</li>
                      <li>Committed to personal growth and advanced learning.</li>
                    </ul>
                    <p>
                      My resignation was not an end, but a new beginning—one that sparked the pursuit of advanced education and transformative ideas.
                    </p>
                  </div>
                  <div className="card-images">
                    <img src="/assets/images/resignation.jpeg" alt="Deep in thought" />
                    <img src="/assets/images/resignation2.jpg" alt="New beginnings" />
                  </div>
                </div>

                {/* Card 5: Masters in AI - DBS */}
                <div className="journey-section">
                  <div className="card-text">
                    <h3>Masters in AI - DBS</h3>
                    <p>
                      My quest for advanced knowledge led me to Ireland, where I embarked on a Master's journey in Artificial Intelligence.
                      Immersed in cutting-edge research and innovative projects, I continue to push the boundaries of technology.
                    </p>
                    <ul>
                      <li>Engaged in research projects that explore AI and machine learning.</li>
                      <li>Collaborated with world-class professors and industry experts.</li>
                      <li>Developed solutions that leverage data-driven insights to solve real-world problems.</li>
                    </ul>
                    <p>
                      This phase represents my ongoing commitment to learning and my vision to drive the future of intelligent technologies.
                    </p>
                  </div>
                  <div className="card-images">
                    <img src="/assets/images/DBS3.jpg" alt="Campus in Ireland" />
                    {/* <img src="/assets/images/DBS2.jpg" alt="AI research lab" /> */}
                    <img src="/assets/images/DBS.jpeg" alt="Project demonstration" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

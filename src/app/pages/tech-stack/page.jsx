'use client'
import "../../styles/tech-stack.css";

const techStack = [
  { name: "HTML", image: "/assets/images/html.png" },
  { name: "CSS", image: "/assets/images/css.png" },
  { name: "Next.js", image: "/assets/images/nextjs.png" },
  { name: "React", image: "/assets/images/reactjs.png" },
  { name: "Node.js", image: "/assets/images/nodejs.png" },
  { name: "Express.js", image: "/assets/images/expressjs.png" },
  { name: "MongoDB", image: "/assets/images/mongodb.png" },
  { name: "Python", image: "/assets/images/python.png" },
  { name: "TensorFlow", image: "/assets/images/tensorflow.png" },
  { name: "PyTorch", image: "/assets/images/pytorch.png" },
  { name: "Docker", image: "/assets/images/docker.png" },
  { name: "Git", image: "/assets/images/git.png" },
  { name: "Kubernetes", image: "/assets/images/kubernetes.png" },
  { name: "AWS", image: "/assets/images/aws.png" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="content-section">
      <h2 className="section-title">Tech Stack</h2>
      <p className="section-description">
        Technologies and tools I specialize in for full-stack and AI/ML development.
      </p>
      <div className="tech-grid">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-card">
            <img src={tech.image} alt={tech.name} className="tech-icon" />
            <h3 className="tech-title">{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

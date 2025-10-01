import "../stylesheets/Skill.css";
import SkillCard from "./SkillCard";
import Cube from "./Cube";

function Skill() {
  return (
    <div className="skill-container">
      <div className="interactive-container">
        <Cube />
      </div>
      <div className="skill-card-container">
        <SkillCard
          title="Frontend Development"
          text="React Hooks Context TailwindCSS Responsive Design Framer Motion"
        />
        <SkillCard
          title="Backend Development"
          text="Node.js Express MySQL MongoDB REST APIs Authentication"
        />
        <SkillCard
          title="Real-time & Architecture"
          text="Socket.io Modular Design Service Layer Security Patterns Middleware"
        />
        <SkillCard
          title="DevOps & Quality"
          text="Render Vercel Railway Jest Git Production Deployment"
        />
        <SkillCard
          title="Approach"
          text="Full-Stack Ownership Clean Code Problem Solving Scalability"
        />
      </div>
    </div>
  );
}

export default Skill;

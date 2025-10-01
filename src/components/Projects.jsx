import "../stylesheets/Projects.css";
import Card from "./Card";
import crmClusterLogo from "../assets/FoxImage.png";
import crmLanding from "../assets/crmLanding.png";
import Hero from "../assets/Hero.jpg";
import devLaunch from "../assets/devLaunch.png";
import portfolio from "../assets/portfolio.png";
import portFolioPage from "../assets/portfolioPage.png";

function Projects() {
  return (
    <div className="project-container">
      <Card
        photo={crmClusterLogo}
        photo2={crmLanding}
        alt="crm logo image"
        alt2="crm landing image"
        tech="React • Vite • Node.js • Socket.io • Express • MySQL • JWT Auth • TailwindCSS • Jest • Render • Vercel • Railway"
        projectN="CRM Cluster"
        projectD="Production-ready CRM with real-time team collaboration — engineered with granular role-based permissions, WebSocket architecture, and modular backend design. Battle-tested with automated testing and deployment-ready."
        link="https://crm-cluster.vercel.app"
      />

      <Card
        photo={Hero}
        photo2={devLaunch}
        alt="contact hero image"
        alt2="contact hero page"
        tech="React • Vite • Node.js • Express • Resend API • SASS • Express Validator • Render • Github Pages"
        projectN="To-do List"
        projectD="High-conversion landing pages with bulletproof contact systems — built for speed, deliverability, and professional client communication. Optimized for mobile-first experiences and guaranteed email delivery."
        link="https://abdiel-code.github.io/devlaunch-landing/"
      />

      <Card
        photo={portfolio}
        photo2={portFolioPage}
        alt="portfolio hero section"
        alt2="portfolio page"
        tech="React • Vite • CSS • GitHub Pages"
        projectN="Portfolio Site"
        projectD="Interactive portfolio experience with 3D elements, parallax scrolling, and fluid animations — showcasing modern web design principles and performance optimization."
        link="https://abdiel-code.github.io/abdiel-codes/"
      />
    </div>
  );
}

export default Projects;

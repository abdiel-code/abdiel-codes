import { useState } from "react";
import "../stylesheets/Sidebar.css";
import NavButton from "./NavButton";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigateTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const targetPosition = section.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <>
      <nav className="navigation-container">
        <button className="hamburger-button" onClick={toggleMenu}>
          ☰
        </button>

        <div className="first-section">
          <p className="logo">Abdiel Flores</p>
        </div>
      </nav>

      {isOpen && <div className="sidebar-overlay" onClick={toggleMenu}></div>}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <NavButton
          class="home-button button"
          symbol="#"
          name="Home"
          link={() => navigateTo("home")}
        />
        <NavButton
          class="about-me-button button"
          symbol="#"
          name="About-me"
          link={() => navigateTo("about-me")}
        />
        <NavButton
          class="projects-button button"
          symbol="#"
          name="Projects"
          link={() => navigateTo("projects")}
        />
        <NavButton
          class="skills-button button"
          symbol="#"
          name="Skills"
          link={() => navigateTo("skills")}
        />
        <NavButton
          class="contact-button button"
          symbol="#"
          name="Contact"
          link={() => navigateTo("contact")}
        />
      </div>
    </>
  );
}

export default Sidebar;

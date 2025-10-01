import "../stylesheets/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          Built with React & CSS • Deployed on Github Pages
        </p>
        <p className="footer-copyright">
          © {currentYear} Abdiel Flores. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

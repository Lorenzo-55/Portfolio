import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import "./navbar.css";

type NavbarProps = {
  activeSection: string;
  scrollTo: (id: string) => void;
};

function Navbar({ activeSection, scrollTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <button className="logo" onClick={() => handleNavClick("home")}>
          Lorenzo Frattini
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open navigation menu"
        >
          <HiOutlineBars3 />
        </button>

        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <button
            className={activeSection === "about" ? "active" : ""}
            onClick={() => handleNavClick("about")}
          >
            About
          </button>

          <button
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </button>

          <button
            className={activeSection === "experience" ? "active" : ""}
            onClick={() => handleNavClick("experience")}
          >
            Experience
          </button>

          <button
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </button>

          <button
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
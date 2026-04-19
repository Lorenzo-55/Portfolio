//src/components/navbar/navbar.tsx

import "./Navbar.css";

type NavbarProps = {
  activeSection: string;
  scrollTo: (id: string) => void;
};

function Navbar({ activeSection, scrollTo }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <button className="logo" onClick={() => scrollTo("home")}>
          Lorenzo Frattini
        </button>

        <div className="nav-links">
          <button
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollTo("about")}
          >
            About
          </button>

          <button
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => scrollTo("skills")}
          >
            Skills
          </button>

          <button
            className={activeSection === "experience" ? "active" : ""}
            onClick={() => scrollTo("experience")}
          >
            Experience
          </button>

          <button
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => scrollTo("projects")}
          >
            Projects
          </button>

          <button
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
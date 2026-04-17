import "./landingpage.css";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";
import Card from "../../components/card/Card";

import { useEffect, useState } from "react";

function LandingPage() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbar = document.querySelector(".navbar") as HTMLElement | null;
    const navbarHeight = navbar?.offsetHeight ?? 0;

    const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight - 12;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <div className="logo">Lorenzo Frattini</div>

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







      <main>
        <section className="section hero" id="about">
          <div className="hero-content">
            <p className="hero-kicker">Hello, I’m</p>
            <h1>Lorenzo</h1>
            <p className="subtitle">Full-Stack Developer</p>
            <p className="hero-description">
              Passionate about building clean, responsive, and practical digital
              solutions with modern technologies. I focus on creating polished
              user experiences and full-stack applications that solve real
              problems.
            </p>

            <div className="hero-actions">
              <a
                className="hero-button primary"
                href="/Lorenzo_CV.pdf"
                download
              >
                Download Resume
              </a>
              <a className="hero-button secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              className="hero-image"
              src={`${import.meta.env.BASE_URL}Photo2.jpg`}
              alt="Portrait"
            />
          </div>
        </section>







        {/* divider */}
        <div className="section-divider" />

        {/* about me */}
        <section id="about" className="section about-section">
          <div className="about-inner">
            <h2 className="about-heading">About Me</h2>

            <p className="about-text">
              Computer Science graduate focused on building modern web applications.
              Strong in React, backend APIs, and structured system design. Experience
              working across full-stack environments, from UI to deployment.
            </p>

            <p className="about-text">
              Currently developing a tourism platform with scalable architecture and
              clean UI/UX principles, while continuing to expand into more advanced
              backend systems and real-world deployments.
            </p>
          </div>
        </section>







        {/* divider */}
        <div className="section-divider" />

        <section id="experience" className="section experience-section">
          <h2 className="experience-heading">Experience</h2>

          <div className="experience-list">
            <div className="experience-row">
              <div className="experience-marker">
                <div className="experience-icon">
                  <FaCode />
                </div>
                <span className="experience-line" />
              </div>

              <div className="experience-content">
                <h3>Freelance Web Developer</h3>
                <p className="experience-accent">React • Laravel • MySQL</p>
                <p className="experience-date">(March 2026 - Present)</p>
                <p>
                  Building a tourism website with a modern frontend and structured
                  backend setup, with temporary deployment through GitHub Pages.
                </p>
                
              </div>
            </div>

            <div className="experience-row">
              <div className="experience-marker">
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
                <span className="experience-line" />
              </div>

              <div className="experience-content">
                <h3>Six Digit Club Sdn. Bhd.</h3>
                <p className="experience-accent">Full Stack Web Developer Intern</p>
                <p className="experience-date">(July 2025 - Oct 2025)</p>
                <p>
                  Worked on company web development projects using Flask, React,
                  backend APIs, frontend components, and server-side tasks.
                </p>
                
              </div>
            </div>

            <div className="experience-row">
              <div className="experience-marker">
                <div className="experience-icon">
                  <FaGraduationCap />
                </div>
              </div>

              <div className="experience-content">
                <h3>Bachelor of Computer Science (BSc Hons)</h3>
                <p className="experience-accent">Mila University, Malaysia</p>
                <p className="experience-date">(Oct 2022 - Oct 2025)</p>
                <p>
                  Graduated with valuable knowledge of programming fundamentals,
                  learning JavaScript, C++, C# and much more.
                </p>
                
              </div>
            </div>
          </div>
        </section>








        {/* divider */}
        <div className="section-divider" />

        <section id="projects" className="section projects-section">
          <h2 className="projects-heading">Projects</h2>

          <div className="projects-grid">
            <Card
              title="Restaurant Management System"
              subtitle="C# • XAML • SQLite"
              description="Desktop application for orders, stock tracking, billing, and reporting."
              image={`${import.meta.env.BASE_URL}project-images/restaurant.jpg`}
              github="https://github.com/yourusername/project1"
              live="https://your-live-site.com"
              docs="https://your-docs-link.com"
            />

            <Card
              title="Stock Market Trend Prediction"
              subtitle="Python • Machine Learning"
              description="Predictive model built on historical OHLCV data for market trend forecasting."
              image={`${import.meta.env.BASE_URL}project-images/stock.jpg`}
              github="https://github.com/yourusername/project2"
              live="https://your-live-site.com"
              docs="https://your-docs-link.com"
            />

            <Card
              title="Tourism Website"
              subtitle="React • Laravel • MySQL"
              description="Modern tourism platform with structured content and clean UI."
              image={`${import.meta.env.BASE_URL}project-images/tourism.jpg`}
              github="https://github.com/yourusername/project3"
              live="https://your-live-site.com"
              docs="https://your-docs-link.com"
            />

            <Card
              title="Crypto Web Platform"
              subtitle="Flask • React • APIs"
              description="Frontend and backend work for analytics tools and API-driven pages."
              image={`${import.meta.env.BASE_URL}project-images/crypto.jpg`}
              github="https://github.com/yourusername/project4"
              live="https://your-live-site.com"
              docs="https://your-docs-link.com"
            />
          </div>
        </section>








        <section id="skills" className="section">
          <h2>Skills</h2>
          <p>React, Python, SQL, etc.</p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="links">
            <a href="mailto:your@email.com">Email</a>
            <a href="https://github.com/yourusername">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
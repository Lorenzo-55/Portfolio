import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <div className="logo">Lorenzo Frattini</div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
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
              src="/Photo2.jpg"
              alt="Portrait"
            />
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <p>Internship, freelance, or relevant work experience.</p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>

          <div className="projects">
            <div className="card">
              <h3>Project One</h3>
              <p>Short description of what it does.</p>
              <p className="tech">React • Flask • PostgreSQL</p>
              <div className="links">
                <a href="#">Live</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <p>Your degree, university, etc.</p>
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

export default App;
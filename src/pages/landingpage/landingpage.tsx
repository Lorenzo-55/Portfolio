//src/pages/landingpage/landingpage.tsx

import "./landingpage.css";
import { FaGraduationCap, FaCode } from "react-icons/fa";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/navbar";

import { FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

import { FaJs, FaPython, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaLinux } from "react-icons/fa";

import {
  SiTypescript,
  SiSharp,
  SiReact,
  SiFlask,
  SiLaravel,
  SiVite,
  SiTailwindcss,
  SiRedux,
  SiGithub,
  SiMysql,
  SiSqlite,
  SiDotnet,
  SiPhp
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LandingPage() {
  const [activeSection, setActiveSection] = useState("about");
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const targetId = location.state?.scrollToSection;
    if (!targetId) return;

    const scrollAfterRender = () => {
      const element = document.getElementById(targetId);
      if (!element) {
        requestAnimationFrame(scrollAfterRender);
        return;
      }

      const navbar = document.querySelector(".navbar") as HTMLElement | null;
      const navbarHeight = navbar?.offsetHeight ?? 0;

      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        12;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      navigate(location.pathname, { replace: true, state: {} });
    };

    requestAnimationFrame(scrollAfterRender);
  }, [location.state, location.pathname, navigate]);


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
    const sections = Array.from(document.querySelectorAll("main section[id]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const animatedElements = Array.from(
      document.querySelectorAll(".section, .section-divider, .footer")
    );

    animatedElements.forEach((element) => {
      element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <Navbar activeSection={activeSection} scrollTo={scrollTo} />



      <main>
        <section className="section hero" id="home">
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
              <button
                className="hero-button secondary"
                onClick={() => scrollTo("contact")}
              >
                Contact Me
              </button>
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
          <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">
                A quick introduction to who I am and what I do
              </p>

          <div className="about-layout">
            <div className="about-inner">
              <p className="about-text">
                Hi, my name is Lorenzo, and I’m a full-stack developer who enjoys building
                things that actually work well in real-world scenarios. I started out being
                curious about how software works behind the scenes, and that naturally led
                me into backend development, APIs, and system design.
              </p>

              <p className="about-text">
                I have an international background, being an Italian citizen who grew up in
                Sri Lanka, which has shaped the way I approach problem-solving and working
                across different environments. Over time, I’ve worked on a mix of projects,
                from a desktop restaurant management system to a machine learning model for
                stock prediction, and more recently full-stack web platforms.
              </p>

              <p className="about-text">
                I mainly use React, Flask, C#, Python, and SQL, and I focus on keeping my
                code clean, structured, and scalable. I’ve also had the chance to work on
                real projects during my internship and freelance work, including a crypto
                trading platform and a tourism website. I like working across the full
                stack, but I especially enjoy the logic and problem-solving that comes with
                backend development.
              </p>
            </div>

            <div className="about-side-card">
              <div className="about-stat-card">
                <div className="about-stat-card-inner">
                  <div className="about-stat-item">
                    <h3>5+</h3>
                    <p>Projects</p>
                  </div>

                  <div className="about-stat-item">
                    <h3>6+</h3>
                    <p>Months Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* divider */}
        <div className="section-divider" />

        <section id="skills" className="section skills-section">
          <div className="skills-header">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              My arsenal of tools and technologies I work with across development
            </p>
          </div>

          <div className="skills-grid">
            <div className="skills-block">
              <div className="skills-block-header">
                <h3>Languages</h3>
              </div>

              <div className="skills-tags">
                <span className="skill-tag"><FaHtml5 /> HTML</span>
                <span className="skill-tag"><FaCss3Alt /> CSS</span>
                <span className="skill-tag"><FaJs /> JavaScript</span>
                <span className="skill-tag"><SiTypescript /> TypeScript</span>
                <span className="skill-tag"><FaPython /> Python</span>
                <span className="skill-tag"><SiSharp /> C#</span>
                <span className="skill-tag"><SiPhp /> PHP</span>
                <span className="skill-tag"><FaDatabase /> SQL</span>
              </div>
            </div>

            <div className="skills-block">
              <div className="skills-block-header">
                <h3>Frameworks / Libraries</h3>
              </div>

              <div className="skills-tags">
                <span className="skill-tag"><SiReact /> React</span>
                <span className="skill-tag"><SiFlask /> Flask</span>
                <span className="skill-tag"><SiLaravel /> Laravel</span>
                <span className="skill-tag"><SiVite /> Vite</span>
                <span className="skill-tag"><SiTailwindcss /> Tailwind</span>
                <span className="skill-tag"><SiRedux /> Redux</span>
                <span className="skill-tag"><SiDotnet /> .NET</span>
              </div>
            </div>

            <div className="skills-block">
              <div className="skills-block-header">
                <h3>Tools</h3>
              </div>

              <div className="skills-tags">
                <span className="skill-tag"><FaGitAlt /> Git</span>
                <span className="skill-tag"><SiGithub /> GitHub</span>
                <span className="skill-tag"><SiMysql /> MySQL</span>
                <span className="skill-tag"><SiSqlite /> SQLite</span>
                <span className="skill-tag"><FaLinux /> Linux</span>
                <span className="skill-tag"><VscVscode /> VS Code</span>
              </div>
            </div>
          </div>
        </section>





        {/* divider */}
        <div className="section-divider" />

        <section id="experience" className="section experience-section">
          <h2 className="section-title">Experience</h2>
              <p className="section-subtitle">
                My professional and academic journey so far
              </p>

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
          <h2 className="section-title">Projects</h2>
              <p className="section-subtitle">
                A selection of work I’ve built and contributed to
              </p>

          <div className="projects-grid">
            <Card
              title="Restaurant Management System"
              subtitle="C# • XAML • SQLite"
              description="Desktop application for orders, stock tracking, billing, and reporting."
              image={`${import.meta.env.BASE_URL}/projects/rms/RMS.png`}
              docs="/projects/restaurant-management-system"
            />

            <Card
              title="Tourism Website"
              subtitle="React • Laravel • MySQL"
              description="Modern tourism platform with structured content and clean UI."
              image={`${import.meta.env.BASE_URL}/projects/tourism_site/tourism_site2.png`}
              github="https://github.com/Lorenzo-55/Tourism_site"
              live="https://lorenzo-55.github.io/Tourism_site/"
              docs="/projects/tourism-website"
            />

            <Card
              title="Crypto Web Platform"
              subtitle="Flask • React • APIs"
              description="Frontend and backend work for analytics tools and API-driven pages."
              image={`${import.meta.env.BASE_URL}/projects/astrabot/astrabot.png`}
              docs="/projects/crypto-web-platform"
            />

            <Card
              title="Portfolio Website"
              subtitle="React • Vite • TypeScript"
              description="Personal portfolio website showcasing projects, experience, and technical skills with a clean and responsive design."
              image={`${import.meta.env.BASE_URL}/projects/portfolio.png`}
              github="https://github.com/Lorenzo-55/portfolio"
              live="https://lorenzo-55.github.io/Portfolio/"
              docs="/projects/portfolio-website"
            />

            <Card
              title="Crypto Analysis Platform"
              subtitle="Python • Web Scraping • APIs • React"
              description="Crypto analysis platform with real-time data, scraping pipelines, and structured analytics tools."
              image={`${import.meta.env.BASE_URL}/projects/datascrapping/hero.png`}
              docs="/projects/data-scraping-platform"
            />
          </div>
        </section>






        {/* divider */}
        <div className="section-divider" />

        <section id="contact" className="section contact-section">
          <div className="contact-header">
            <h2 className="section-title">Contact Me</h2>
            <p className="section-subtitle">
              Let’s connect and build something useful together
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-left">
              <h3>Get In Touch</h3>
              <p className="contact-description">
                I’m open to job opportunities, freelance work, and projects where I can
                contribute across the full stack. If you’re looking for a developer who
                enjoys building practical and well-structured solutions, feel free to
                reach out.
              </p>

              <div className="contact-availability-card">
                <div className="contact-availability-badge">
                  <span className="contact-status-dot" />
                  <span>Available for Jobs & Work</span>
                </div>

                <p>
                  Currently open to full-time roles, internships, freelance work, and
                  collaborative development projects.
                </p>
              </div>
            </div>

            <div className="contact-right">
              <a className="contact-item" href="tel:+94778052175">
                <span className="contact-icon phone">
                  <HiOutlinePhone />
                </span>
                <span className="contact-text">+94 77 805 2175</span>
              </a>

              <a className="contact-item" href="mailto:LorenzoFrattini555@gmail.com">
                <span className="contact-icon email">
                  <HiOutlineMail />
                </span>
                <span className="contact-text">LorenzoFrattini555@gmail.com</span>
              </a>

              <a
                className="contact-item"
                href="https://github.com/Lorenzo-55"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon github">
                  <FaGithub />
                </span>
                <span className="contact-text">GitHub</span>
              </a>

              <a
                className="contact-item"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon linkedin">
                  <FaLinkedin />
                </span>
                <span className="contact-text">LinkedIn</span>
              </a>

              <div className="contact-item contact-item-static">
                <span className="contact-icon work">
                  <FaBriefcase />
                </span>
                <span className="contact-text contact-highlight">
                  Open to jobs and freelance work
                </span>
              </div>
            </div>
          </div>
        </section>


        <footer className="footer">
          <div className="footer-inner">
            <p>© {new Date().getFullYear()} Lorenzo Frattini</p>
            <p>Developed with React</p>
          </div>
        </footer>

        
      </main>
    </>
  );
}

export default LandingPage;
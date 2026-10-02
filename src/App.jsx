import { useEffect } from 'react';
import './App.css';
import GomycodeExperience from './components/GomycodeExperience';

const projects = [
  {
    number: '01',
    name: 'BOOKLY',
    category: 'Booking Web App',
    description:
      'A modern booking experience designed for service businesses and appointment-based experiences.',
    image: '/projects/bookly.png',
    accent: 'bookly',
    link: 'https://bookly-swart.vercel.app/',
  },
  {
    number: '02',
    name: 'AURA',
    category: 'Architecture Portfolio',
    description:
      'A premium editorial-style website created for an architecture and creative studio.',
    image: '/projects/aura.png',
    accent: 'aura',
    link: 'https://aura-architecture-portfolio.vercel.app/',
  },
  {
    number: '03',
    name: 'VELA',
    category: 'Fashion E-commerce',
    description:
      'A fashion storefront inspired by modern premium retail experiences like Zara.',
    image: '/projects/vela.png',
    accent: 'vela',
    link: 'https://vela-kohl-alpha.vercel.app/',
  },
  {
    number: '04',
    name: 'NOVA',
    category: 'Business Website',
    description:
      'A modern digital product experience focused on clean structure, strong typography and conversion.',
    image: '/projects/nova.png',
    accent: 'nova',
    link: 'https://nova-phi-rust.vercel.app/',
  },
  {
    number: '05',
    name: 'StudyMind AI',
    category: 'AI Learning Platform · Ongoing',
    description:
      'An AI-powered learning platform combining study tools, quizzes, flashcards and a modern student dashboard.',
    image: '/projects/studymind.png',
    accent: 'studymind',
    link: null,
  },
];



function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);

  return (
    <div className="portfolio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="hero">
        <nav className="navbar reveal reveal-delay-1">
          <a href="/" className="logo">
            SAFI<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-cta">
            Start a project <span>↗</span>
          </a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow reveal reveal-delay-2">
            WEB DEVELOPER · UI/UX · FRONTEND
          </p>

          <h1 className="hero-title">
            <span className="hero-line">
              <span className="word reveal reveal-delay-3">I build</span>
            </span>

            <span className="hero-line">
              <span className="word muted reveal reveal-delay-4">
                digital experiences
              </span>
            </span>

            <span className="hero-line">
              <span className="word reveal reveal-delay-5">
                that stand out.
              </span>
            </span>
          </h1>

          <div className="hero-bottom reveal reveal-delay-6">
            <p className="hero-description">
              Modern websites and web applications built with strong visual
              identity, responsive interfaces and attention to detail.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-button">
                View my work <span>↓</span>
              </a>

              <a href="#contact" className="secondary-button">
                Let's work together <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* WORK */}
        <section id="work" className="section work-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>

              <h2>
                A collection of
                <span> digital experiences.</span>
              </h2>
            </div>

            <p className="section-intro">
              Different industries. Different challenges. One focus:
              building websites that feel intentional.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.accent}`}
                key={project.name}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>

                  {project.link ? (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit site ↗
                    </a>
                  ) : (
                    <span className="project-status">Ongoing</span>
                  )}
                </div>

                <a
                  className="project-image"
                  href={project.link || '#'}
                  target={project.link ? '_blank' : undefined}
                  rel={project.link ? 'noreferrer' : undefined}
                  onClick={(event) => {
                    if (!project.link) {
                      event.preventDefault();
                    }
                  }}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} project preview`}
                  />

                  <div className="image-overlay">
                    <span>
                      {project.link ? 'Open project ↗' : 'Ongoing project'}
                    </span>
                  </div>
                </a>

                <div className="project-info">
                  <p className="project-category">{project.category}</p>

                  <h3>{project.name}</h3>

                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
              <GomycodeExperience />
        {/* SERVICES */}
        <section id="services" className="section services-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SERVICES</p>

              <h2>
                From idea to
                <span> polished experience.</span>
              </h2>
            </div>
          </div>

          <div className="services-grid">
            <div className="service">
              <span>01</span>

              <div>
                <h3>Web Development</h3>

                <p>
                  Responsive websites and web applications built with modern
                  frontend technologies.
                </p>
              </div>
            </div>

            <div className="service">
              <span>02</span>

              <div>
                <h3>UI / UX</h3>

                <p>
                  Interfaces designed around clarity, visual hierarchy and a
                  strong user experience.
                </p>
              </div>
            </div>

            <div className="service">
              <span>03</span>

              <div>
                <h3>E-commerce</h3>

                <p>
                  Product-focused online stores designed to feel premium and
                  easy to navigate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="about-grid">
            <div>
              <p className="eyebrow">ABOUT</p>

              <h2>
                Development with a
                <span> designer's eye.</span>
              </h2>
            </div>

            <div className="about-copy">
              <p>
                I'm a web developer focused on creating modern, responsive
                websites and digital products for businesses and brands.
              </p>

              <p>
                I combine frontend development, interface design and attention
                to detail to turn ideas into polished digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <p className="eyebrow">LET'S WORK TOGETHER</p>

            <h2>
              Have a project
              <span> in mind?</span>
            </h2>

            <p className="contact-description">
              Tell me what you're building, what you need, and what you're
              trying to achieve. I'll get back to you and we can take it from
              there.
            </p>

            <div className="contact-actions">
              
              <a
                href="mailto:nasraouisafi3@gmail.com"
                className="email-link"
              >
                nasraouisafi3@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/safi-edin-nasraoui-423871376/"
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

                <a
                  href="https://www.upwork.com/freelancers/~01104f8d972a934b8e?mp_source=share"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Upwork ↗
                </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;


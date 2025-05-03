import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <div className="logo">
            <h1>Major Fabro</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>About</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')}>Projects</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Ngaboyimanzi Pacifique</h1>
            <h2>Software Developer</h2>
            <div className="social-links">
              <a href="https://instagram.com/major_fabro" target="_blank" rel="noopener noreferrer" className="social-link">@major_fabro</a>
            </div>
            <div className="cta-buttons">
              <a href="#projects" className="btn primary">View Projects</a>
              <a href="/resume.pdf" className="btn secondary">Download CV</a>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <p>I am Major Fabro, an experienced Software Developer with expertise in design, installation, testing and maintenance of software systems. Equipped with a diverse and promising skill-set. Proficient in various platforms and programming languages. Experienced with cutting-edge development tools and procedures.</p>
            
            <div className="skills">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>PHP</li>
                  <li>Node.js</li>
                  <li>Laravel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Super School</h3>
              <p>A comprehensive software solution for educational institutions to manage admin and academics.</p>
              <a href="https://github.com/chrismanzi12/super-school" className="btn">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>Task Management App</h3>
              <p>An online system for managing and organizing tasks efficiently.</p>
              <a href="https://github.com/chrismanzi12/task-manager" className="btn">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>Language Translator</h3>
              <p>Software that supports the process of transferring the meaning of a message from one language to another.</p>
              <a href="https://github.com/chrismanzi12/language-translator" className="btn">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>Weather App</h3>
              <p>Predicts the conditions of the atmosphere for a given location and time using science and technology.</p>
              <a href="https://github.com/chrismanzi12/weather-app" className="btn">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>English Dictionary</h3>
              <p>A mobile or web app providing definitions, explanations, and related information for English words.</p>
              <a href="https://github.com/chrismanzi12/english-dictionary" className="btn">View on GitHub</a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:nacifique@gmail.com">nacifique@gmail.com</a>
            </div>
            <div className="contact-item">
              <strong>Call / WhatsApp:</strong>
              <a href="tel:+250786571460">+250 786 571 460</a>
            </div>
            <div className="contact-item">
              <strong>GitHub:</strong>
              <a href="https://github.com/chrismanzi12" target="_blank" rel="noopener noreferrer">github.com/chrismanzi12</a>
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong>
              <a href="https://linkedin.com/in/ngaboyimanzi-pacifique" target="_blank" rel="noopener noreferrer">linkedin.com/in/ngaboyimanzi-pacifique</a>
            </div>
            <div className="contact-item">
              <strong>Instagram:</strong>
              <a href="https://instagram.com/major_fabro" target="_blank" rel="noopener noreferrer">@major_fabro</a>
            </div>
            <div className="contact-item">
              <strong>YouTube:</strong>
              <a href="https://youtube.com/@toptechmediatv" target="_blank" rel="noopener noreferrer">Top Tech Media TV</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Major Fabro</p>
      </footer>
    </div>
  )
}

export default App

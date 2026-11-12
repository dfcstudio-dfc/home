import { useEffect, useState } from 'react'
import './App.css'
import About from './sections/About.jsx'
import Blog from './sections/Blog.jsx'
import Contact from './sections/Contact.jsx'
import Projects from './sections/Projects.jsx'
import Services from './sections/Services.jsx'
import brandImage from './assets/dfc-logo-1.png'

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
]

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const sections = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="DFC, inicio">
          <img className="brand__image" src={brandImage} alt="DFC" />
        </a>

        <nav
          className={`site-nav${isMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Navegación principal"
        >
          {navigation.map(({ label, href }) => (
            <a
              className={`site-nav__link${activeSection === href.slice(1) ? ' is-active' : ''}`}
              href={href}
              key={label}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        
        <button
          className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <section className="hero section-reveal" id="inicio" data-reveal>
        <div className="hero__content">
          <p className="eyebrow">
            <span className="eyebrow__rule" />
            DFC · TECNOLOGÍA QUE IMPULSA
          </p>

          <h1 className="hero__title">
            <span>Tres mentes.</span>
            <span>Una visión.</span>
            <span>
              <strong>Soluciones </strong> sin límites.
            </span>
          </h1>

          <p className="hero__description">
            Desarrollamos soluciones tecnológicas innovadoras
            <br className="desktop-break" /> para transformar ideas en grandes
            oportunidades.
          </p>

          <div className="hero__actions">
            <a className="button button--gradient" href="#contacto">
              Hablemos de tu proyecto <ArrowIcon />
            </a>
            <a className="button button--outline" href="#proyectos">
              Ver nuestros proyectos
            </a>
          </div>
        </div>

        <a className="scroll-cue" href="#servicios" aria-label="Desplazarse hacia abajo">
          <span className="scroll-cue__line" />
          <span className="scroll-cue__mouse">
            <span />
          </span>
          <span className="scroll-cue__chevron" />
          <span className="scroll-cue__line" />
        </a>
      </section>
      <Services />
      <Projects />
      <About />
      <Blog />
      <Contact />
    </main>
  )
}

export default App

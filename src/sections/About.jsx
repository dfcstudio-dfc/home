import './About.css'
import brandImage from '../assets/dfc-logo.png'

const highlights = [
  {
    title: 'Ideas',
    description: 'Convertimos retos en soluciones.',
    icon: 'code',
  },
  {
    title: 'Equipo',
    description: 'Crecemos contigo en cada etapa.',
    icon: 'team',
  },
  {
    title: 'Propósito',
    description: 'Tecnología con impacto real.',
    icon: 'rocket',
  },
]

function HighlightIcon({ name }) {
  const commonProps = {
    'aria-hidden': true,
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.8,
    viewBox: '0 0 48 48',
  }

  if (name === 'code') {
    return (
      <svg {...commonProps}>
        <path d="m17 14-10 10 10 10m14-20 10 10-10 10m-5-26-5 32" />
      </svg>
    )
  }

  if (name === 'team') {
    return (
      <svg {...commonProps}>
        <circle cx="24" cy="15" r="7" />
        <circle cx="10" cy="20" r="5" />
        <circle cx="38" cy="20" r="5" />
        <path d="M11 40v-4a13 13 0 0 1 26 0v4H11Zm-9-1v-3a9 9 0 0 1 8-9m36 12v-3a9 9 0 0 0-8-9" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M27 8c5-5 10-5 13-5 0 3 0 8-5 13L23 28l-7-7L27 8Z" />
      <path d="m20 13-8 1-6 7 11 1m10 1 1 8-7 6-1-10M15 28c-5 1-7 5-8 10 5-1 8-4 9-9" />
      <circle cx="31" cy="12" r="3" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  )
}

function About() {
  return (
    <section
      className="about section-reveal"
      id="nosotros"
      data-reveal
      aria-labelledby="about-title"
    >
      <div className="about__inner">
        <div className="about__content">
          <p className="about__eyebrow">
            <span />
            NOSOTROS
          </p>
          <h2 className="about__title" id="about-title">
            Innovación, talento
            <br /> y <strong>propósito.</strong>
          </h2>
          <p className="about__intro">
            En DFC creemos en el poder de la tecnología para crear un impacto
            real. Somos un equipo apasionado por desarrollar soluciones,
            automatizar procesos y acompañar ideas en cada etapa.
          </p>

          <div className="about__highlights">
            {highlights.map(({ title, description, icon }) => (
              <article className="about-card" key={title}>
                <span className="about-card__icon">
                  <HighlightIcon name={icon} />
                </span>
                <span className="about-card__copy">
                  <span className="about-card__title">{title}</span>
                  <span className="about-card__description">{description}</span>
                </span>
              </article>
            ))}
          </div>

          <a className="about__cta button button--gradient" href="#contacto">
            Conoce más sobre nosotros <ArrowIcon />
          </a>
        </div>

        <div className="about__visual">
          <img
            className="about__image"
            src={brandImage}
            alt="Logo de DFC sobre un fondo con circuitos"
          />
        </div>
      </div>
    </section>
  )
}

export default About

import './Services.css'

const services = [
  {
    number: '01',
    title: 'Desarrollo de software',
    description:
      'Aplicaciones web, móviles y sistemas personalizados para empresas y emprendedores.',
    icon: 'code',
    href: '#contacto',
  },
  {
    number: '02',
    title: 'Automatización',
    description:
      'Optimización de tareas, integración de herramientas y automatización de procesos.',
    icon: 'gear',
    href: '#contacto',
  },
  {
    number: '03',
    title: 'Transformación digital',
    description:
      'Modernización de procesos y adopción de herramientas digitales.',
    icon: 'cloud',
    href: '#contacto',
  },
  {
    number: '04',
    title: 'Consultoría tecnológica',
    description:
      'Orientación para elegir tecnologías y convertir necesidades en proyectos viables.',
    icon: 'team',
    href: '#contacto',
  },
]

function ServiceIcon({ name }) {
  const commonProps = {
    'aria-hidden': true,
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.8,
    viewBox: '0 0 64 64',
  }

  if (name === 'code') {
    return (
      <svg {...commonProps}>
        <rect x="9" y="10" width="46" height="35" rx="5" />
        <path d="m25 21-8 7 8 7m14-14 8 7-8 7m-5-13-5 12" />
        <path d="M5 53h54l-5-8H10l-5 8Z" />
      </svg>
    )
  }

  if (name === 'gear') {
    return (
      <svg {...commonProps}>
        <path d="m27 6-1 6a21 21 0 0 0-5 2l-5-3-5 5 3 5a21 21 0 0 0-2 5l-6 1v7l6 1a21 21 0 0 0 2 5l-3 5 5 5 5-3a21 21 0 0 0 5 2l1 6h7l1-6a21 21 0 0 0 5-2l5 3 5-5-3-5a21 21 0 0 0 2-5l6-1v-7l-6-1a21 21 0 0 0-2-5l3-5-5-5-5 3a21 21 0 0 0-5-2l-1-6h-7Z" />
        <circle cx="30.5" cy="30.5" r="9" />
      </svg>
    )
  }

  if (name === 'cloud') {
    return (
      <svg {...commonProps}>
        <path d="M20 45H16a11 11 0 0 1-1-22 17 17 0 0 1 32-3 12 12 0 0 1 2 24h-5" />
        <path d="M32 55V31m-9 9 9-9 9 9" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <circle cx="32" cy="19" r="9" />
      <circle cx="13" cy="26" r="7" />
      <circle cx="51" cy="26" r="7" />
      <path d="M14 54v-5a18 18 0 0 1 36 0v5H14Z" />
      <path d="M3 52v-4a12 12 0 0 1 12-12m46 16v-4a12 12 0 0 0-12-12" />
    </svg>
  )
}

function RocketIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 48 48"
    >
      <path d="M28 8c5-5 11-5 14-5 0 3 0 9-5 14L25 29l-8-8L28 8Z" />
      <path d="m22 13-9 1-6 7 11 1m11 1 1 9-7 6-1-11M17 29c-5 1-8 5-9 10 5-1 9-4 10-9m14-17h.1" />
      <circle cx="32" cy="12" r="3" />
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

function Services() {
  return (
    <section
      className="services section-reveal"
      id="servicios"
      data-reveal
      aria-labelledby="services-title"
    >
      <div className="services__inner">
        <div className="services__heading">
          <p className="services__eyebrow">
            <span />
            SERVICIOS
          </p>
          <h2 className="services__title" id="services-title">
            Tecnología que
            <br />
            convierte ideas en <strong>soluciones.</strong>
          </h2>
          <p className="services__intro">
            Diseñamos, desarrollamos e integramos soluciones tecnológicas
            adaptadas a cada necesidad.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <a
              className="service-card"
              href={service.href}
              key={service.number}
            >
              <span className="service-card__icon">
                <ServiceIcon name={service.icon} />
              </span>
              <span className="service-card__content">
                <span className="service-card__title">
                  {service.number}. {service.title}
                </span>
                <span className="service-card__description">
                  {service.description}
                </span>
              </span>
              <span className="service-card__arrow">
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>

        <div className="services__cta">
          <span className="services__cta-icon">
            <RocketIcon />
          </span>
          <p>
            ¿Tienes una idea? Hagámosla realidad <strong>juntos.</strong>
          </p>
          <a className="button button--gradient" href="#contacto">
            Hablemos de tu proyecto <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services

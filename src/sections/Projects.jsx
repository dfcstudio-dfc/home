import './Projects.css'

const projects = [
  {
    id: 'inventory',
    title: 'Sistema de Inventario',
    description: 'Controla tu inventario de forma simple y eficiente.',
    image: '/projects/edon.png',
    imageAlt: 'Vista del sistema de inventario',
  },
  {
    id: 'organization',
    title: 'App de Organización',
    description: 'Organiza tu vida, alcanza tus metas.',
    image: '/projects/edon.png',
    imageAlt: 'Vista de la aplicación de organización',
  },
  {
    id: 'accounting-preview',
    title: 'Sistema Contable',
    description: 'Gestiona tus finanzas de manera inteligente.',
    image: '/projects/edon.º  9png',
    imageAlt: 'Vista del sistema contable',
  },
  {
    id: 'accounting',
    title: 'Sistema Contable',
    description: 'Gestiona tus finanzas de manera inteligente.',
    image: '/projects/edon.png',
    imageAlt: 'Vista del sistema contable',
  }
]

function ProjectPreview({ image, imageAlt, title }) {
  return (
    <div className="project-preview">
      {image ? (
        <img className="project-preview__image" src={image} alt={imageAlt} />
      ) : (
        <div className="project-preview__placeholder">
          <svg aria-hidden="true" fill="none" viewBox="0 0 48 48">
            <rect x="5" y="8" width="38" height="32" rx="5" />
            <circle cx="17" cy="19" r="3" />
            <path d="m8 34 11-10 7 6 6-5 8 9" />
          </svg>
          <span>Imagen de {title}</span>
        </div>
      )}
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  )
}

function Projects() {
  return (
    <section
      className="projects section-reveal"
      id="proyectos"
      data-reveal
      aria-labelledby="projects-title"
    >
      <div className="projects__inner">
        <header className="projects__heading">
          <p className="projects__eyebrow">
            <span />
            PROYECTOS
          </p>
          <h2 className="projects__title" id="projects-title">
            Ideas que se hacen <strong>realidad.</strong>
          </h2>
          <p className="projects__intro">
            Explora algunos de nuestros proyectos y descubre cómo la tecnología
            <br className="projects__desktop-break" /> puede transformar ideas
            en soluciones.
          </p>
        </header>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <ProjectPreview
                image={project.image}
                imageAlt={project.imageAlt}
                title={project.title}
              />
              <div className="project-card__details">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <a
                  className="project-card__link"
                  href="#contacto"
                  aria-label={`Conoce más sobre ${project.title}`}
                >
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>

        <a className="projects__all button button--outline" href="#contacto">
          Ver todos nuestros proyectos <ArrowIcon />
        </a>
      </div>
    </section>
  )
}

export default Projects

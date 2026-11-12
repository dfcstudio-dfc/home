import './Blog.css'

const posts = [
  {
    id: 'angular-novedades',
    category: 'Desarrollo',
    title: 'Angular: novedades que vale la pena conocer',
    excerpt: 'Un vistazo a herramientas y mejoras para crear aplicaciones web.',
    artwork: 'code',
    publishedAt: '6 nov, 2026',
    readTime: '5 min',
  },
  {
    id: 'automatizacion-python',
    category: 'Automatización',
    title: 'Automatiza tareas repetitivas con Python',
    excerpt: 'Ideas prácticas para ahorrar tiempo en tus procesos diarios.',
    artwork: 'automation',
    publishedAt: '28 oct, 2026',
    readTime: '7 min',
  },
  {
    id: 'transformacion-nube',
    category: 'Tecnología',
    title: 'La nube como aliada de tu negocio',
    excerpt: 'Cómo una estrategia cloud ayuda a crecer con más flexibilidad.',
    artwork: 'cloud',
    publishedAt: '20 oct, 2026',
    readTime: '6 min',
  },
  {
    id: 'productividad-ia',
    category: 'Tips',
    title: '5 formas de usar IA para mejorar tu productividad',
    excerpt: 'Pequeñas ideas para integrar inteligencia artificial en tu día.',
    artwork: 'ideas',
    publishedAt: '15 oct, 2026',
    readTime: '4 min',
  },
]

function BlogArtwork({ kind }) {
  const commonProps = {
    'aria-hidden': true,
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 3,
    viewBox: '0 0 360 180',
  }

  if (kind === 'code') {
    return (
      <svg {...commonProps}>
        <rect x="76" y="24" width="208" height="132" rx="14" />
        <path d="M76 58h208M96 42h1m17 0h1m17 0h1M112 83l-16 13 16 13m28-26 16 13-16 13m37-33-14 40" />
        <path d="M189 84h62m-62 24h43m-43 24h54" />
      </svg>
    )
  }

  if (kind === 'automation') {
    return (
      <svg {...commonProps}>
        <path d="m168 28 5-12h14l5 12 11 5 11-6 10 10-6 11 5 11 12 5v14l-12 5-5 11 6 11-10 10-11-6-11 5-5 12h-14l-5-12-11-5-11 6-10-10 6-11-5-11-12-5V75l12-5 5-11-6-11 10-10 11 6 11-5Z" />
        <circle cx="180" cy="82" r="20" />
        <path d="M72 54h38m-38 28h28m-28 28h38m112-56h38m-28 28h28m-38 28h38" />
      </svg>
    )
  }

  if (kind === 'cloud') {
    return (
      <svg {...commonProps}>
        <path d="M106 119h142a31 31 0 0 0 0-62 48 48 0 0 0-91-12 34 34 0 0 0-51 36 20 20 0 0 0 0 38Z" />
        <path d="M180 123V78m-19 18 19-19 19 19" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M180 42a37 37 0 0 0-23 66c8 6 11 12 11 20h24c0-8 3-14 11-20a37 37 0 0 0-23-66Z" />
      <path d="M168 141h24m-20 11h16m-8-134V8m-48 34-10-9m106 9 10-9m-102 48h-14m124 0h-14" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
      <rect x="3" y="5" width="14" height="12" rx="2" />
      <path d="M6.5 3v4m7-4v4M3 9h14m-10 3h2m2 0h2m-6 2h2" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6v4l2.5 1.5" />
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

function Blog() {
  return (
    <section
      className="blog section-reveal"
      id="blog"
      data-reveal
      aria-labelledby="blog-title"
    >
      <div className="blog__inner">
        <header className="blog__heading">
          <p className="blog__eyebrow">
            <span />
            BLOG
          </p>
          <h2 className="blog__title" id="blog-title">
            Aprende, innova y
            <br /> mantente <strong>conectado.</strong>
          </h2>
          <p className="blog__intro">
            Descubre artículos, ideas y novedades sobre tecnología, desarrollo,
            automatización y mucho más.
          </p>
        </header>

        <div className="blog__grid">
          {posts.map((post) => (
            <article className="blog-post" key={post.id}>
              <div className={`blog-post__art blog-post__art--${post.artwork}`}>
                <BlogArtwork kind={post.artwork} />
                <span className="blog-post__category">{post.category}</span>
              </div>
              <div className="blog-post__content">
                <h3 className="blog-post__title">{post.title}</h3>
                <p className="blog-post__excerpt">{post.excerpt}</p>
                <div className="blog-post__footer">
                  <span className="blog-post__meta">
                    <CalendarIcon />
                    {post.publishedAt}
                  </span>
                  <span className="blog-post__meta">
                    <ClockIcon />
                    {post.readTime}
                  </span>
                  <span className="blog-post__arrow">
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="blog__note">
          <span className="blog__note-icon" aria-hidden="true">
            <svg fill="none" viewBox="0 0 28 28">
              <path d="M4 6.5h8a4 4 0 0 1 4 4v13a4 4 0 0 0-4-4H4v-13Zm20 0h-8a4 4 0 0 0-4 4v13a4 4 0 0 1 4-4h8v-13Z" />
            </svg>
          </span>
          <span>Más ideas y novedades, pronto también desde nuestras redes.</span>
          <ArrowIcon />
        </p>
      </div>
    </section>
  )
}

export default Blog

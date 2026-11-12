import './Contact.css'

const socialNetworks = ['github', 'linkedin', 'instagram', 'youtube']

function Icon({ name }) {
  const commonProps = {
    'aria-hidden': true,
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.8,
    viewBox: '0 0 48 48',
  }

  if (name === 'mail') {
    return (
      <svg {...commonProps}>
        <rect x="5" y="10" width="38" height="28" rx="4" />
        <path d="m7 13 17 14 17-14" />
      </svg>
    )
  }

  if (name === 'whatsapp') {
    return (
      <svg {...commonProps}>
        <path d="M24 5a18 18 0 0 0-15 28L6 42l10-3a18 18 0 1 0 8-34Z" />
        <path d="M17 16c1-1 2-1 3 0l2 4-2 2c1 3 4 5 7 6l2-2 4 2c1 1 1 2 0 3-2 3-5 3-8 2-7-2-12-7-13-13-1-2 1-4 3-4Z" />
      </svg>
    )
  }

  if (name === 'chat') {
    return (
      <svg {...commonProps}>
        <path d="M24 6c-10 0-18 7-18 16 0 5 3 9 7 12l-2 8 10-5h3c10 0 18-7 18-15S34 6 24 6Z" />
        <circle cx="16" cy="22" r="1.5" />
        <circle cx="24" cy="22" r="1.5" />
        <circle cx="32" cy="22" r="1.5" />
      </svg>
    )
  }

  if (name === 'user') {
    return (
      <svg {...commonProps}>
        <circle cx="24" cy="16" r="8" />
        <path d="M8 41v-4a16 16 0 0 1 32 0v4H8Z" />
      </svg>
    )
  }

  if (name === 'company') {
    return (
      <svg {...commonProps}>
        <path d="M9 42V9h21v33M30 19h9v23M5 42h38M15 16h4m-4 8h4m-4 8h4m7-16h1m-1 8h1m-1 8h1m8-1h1m-1 7h1" />
      </svg>
    )
  }

  if (name === 'service') {
    return (
      <svg {...commonProps}>
        <rect x="6" y="6" width="13" height="13" rx="2" />
        <rect x="29" y="6" width="13" height="13" rx="2" />
        <rect x="6" y="29" width="13" height="13" rx="2" />
        <rect x="29" y="29" width="13" height="13" rx="2" />
      </svg>
    )
  }

  if (name === 'message') {
    return (
      <svg {...commonProps}>
        <path d="m8 34 3-10L33 2l10 10-22 22-10 3Z" />
        <path d="m27 8 10 10M8 42h34" />
      </svg>
    )
  }

  if (name === 'send') {
    return (
      <svg {...commonProps}>
        <path d="m5 21 37-16-13 38-7-16-17-6Z" />
        <path d="m22 27 20-22" />
      </svg>
    )
  }

  if (name === 'arrow') {
    return (
      <svg {...commonProps}>
        <path d="M5 24h36m-15-15 15 15-15 15" />
      </svg>
    )
  }

  if (name === 'github') {
    return (
      <svg {...commonProps}>
        <path d="M24 5a19 19 0 0 0-6 37v-5c-5 1-6-2-6-2-1-2-2-3-2-3-2-1 0-1 0-1 2 0 3 2 3 2 2 3 5 2 6 1 0-2 1-3 2-4-4 0-9-2-9-9 0-2 1-4 2-5 0-1-1-3 0-6 0 0 2-1 6 2a20 20 0 0 1 10 0c4-3 6-2 6-2 1 3 0 5 0 6 2 1 2 3 2 5 0 7-5 9-9 9 1 1 2 2 2 5v7a19 19 0 0 0-7-37Z" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg {...commonProps}>
        <rect x="6" y="6" width="36" height="36" rx="5" />
        <path d="M14 20v14m0-20v.2M22 34V20m0 6c0-4 9-5 9 1v7" />
      </svg>
    )
  }

  if (name === 'instagram') {
    return (
      <svg {...commonProps}>
        <rect x="6" y="6" width="36" height="36" rx="10" />
        <circle cx="24" cy="24" r="8" />
        <circle cx="35" cy="13" r="1.5" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M43 14a5 5 0 0 0-4-4c-4-1-15-1-15-1s-11 0-15 1a5 5 0 0 0-4 4c-1 4-1 10-1 10s0 7 1 10a5 5 0 0 0 4 4c4 1 15 1 15 1s11 0 15-1a5 5 0 0 0 4-4c1-3 1-10 1-10s0-6-1-10Z" />
      <path d="m20 31 12-7-12-7v14Z" />
    </svg>
  )
}

function ContactCard({ icon, title, children, href }) {
  const content = (
    <>
      <span className="contact-card__icon">
        <Icon name={icon} />
      </span>
      <span className="contact-card__copy">
        <span className="contact-card__title">{title}</span>
        <span className="contact-card__detail">{children}</span>
      </span>
    </>
  )

  if (href) {
    return (
      <a className="contact-card" href={href}>
        {content}
      </a>
    )
  }

  return <div className="contact-card">{content}</div>
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const company = formData.get('company') || 'No especificada'
    const service = formData.get('service') || 'No especificado'
    const message = formData.get('message')
    const subject = encodeURIComponent(`Mensaje web de ${name}`)
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\nEmpresa: ${company}\nServicio: ${service}\n\nMensaje:\n${message}`,
    )

    window.location.href = `mailto:hola@dfc.com?subject=${subject}&body=${body}`
  }

  return (
    <section
      className="contact section-reveal"
      id="contacto"
      data-reveal
      aria-labelledby="contact-title"
    >
      <div className="contact__inner">
        <div className="contact__content">
          <header className="contact__heading">
            <p className="contact__eyebrow">
              <span />
              CONTACTO
            </p>
            <h2 className="contact__title" id="contact-title">
              Hablemos de
              <br />
              tu <strong>proyecto.</strong>
            </h2>
            <p className="contact__intro">
              Estamos aquí para ayudarte. Escríbenos, cuéntanos tu idea y juntos
              encontraremos la mejor solución.
            </p>
          </header>

          <div className="contact__cards">
            <ContactCard
              icon="mail"
              title="Correo electrónico"
              href="mailto:dfcstudio2026@gmail.com"
            >
              dfcstudio2026@gmail.com
            </ContactCard>
            <ContactCard
              icon="whatsapp"
              title="WhatsApp"
              href="https://wa.me/584225431379"
            >
              +58 4225431379
            </ContactCard>
          </div>

          <div className="contact__social">
            <div className="contact__social-icons" aria-label="Redes sociales">
              {socialNetworks.map((network) => (
                <span
                  className="contact__social-icon"
                  key={network}
                  role="img"
                  aria-label={network}
                >
                  <Icon name={network} />
                </span>
              ))}
            </div>
            <p>
              <strong>Síguenos en nuestras redes</strong>
              <span>Próximamente compartiremos nuestros perfiles.</span>
            </p>
          </div>
        </div>

        <div className="contact-form__shell">
          <div className="contact-form__heading">
            <span className="contact-form__heading-icon">
              <Icon name="chat" />
            </span>
            <div>
              <h3>Envíanos un mensaje</h3>
              <p>Completa el formulario y prepara tu mensaje desde tu correo.</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__fields">
              <label className="contact-form__field">
                <span className="contact-form__label">Nombre completo</span>
                <span className="contact-form__input-wrap">
                  <Icon name="user" />
                  <input
                    autoComplete="name"
                    name="name"
                    placeholder="Nombre completo *"
                    required
                  />
                </span>
              </label>

              <label className="contact-form__field">
                <span className="contact-form__label">Correo electrónico</span>
                <span className="contact-form__input-wrap">
                  <Icon name="mail" />
                  <input
                    autoComplete="email"
                    name="email"
                    placeholder="Correo electrónico *"
                    required
                    type="email"
                  />
                </span>
              </label>

              <label className="contact-form__field contact-form__field--full">
                <span className="contact-form__label">Empresa (opcional)</span>
                <span className="contact-form__input-wrap">
                  <Icon name="company" />
                  <input
                    autoComplete="organization"
                    name="company"
                    placeholder="Empresa (opcional)"
                  />
                </span>
              </label>

              <label className="contact-form__field contact-form__field--full">
                <span className="contact-form__label">Servicio de interés</span>
                <span className="contact-form__input-wrap">
                  <Icon name="service" />
                  <select defaultValue="" name="service">
                    <option value="">Servicio de interés</option>
                    <option value="Desarrollo de software">
                      Desarrollo de software
                    </option>
                    <option value="Automatización">Automatización</option>
                    <option value="Transformación digital">
                      Transformación digital
                    </option>
                    <option value="Consultoría tecnológica">
                      Consultoría tecnológica
                    </option>
                    <option value="Otro">Otro</option>
                  </select>
                </span>
              </label>

              <label className="contact-form__field contact-form__field--full contact-form__field--message">
                <span className="contact-form__label">Tu mensaje</span>
                <span className="contact-form__input-wrap">
                  <Icon name="message" />
                  <textarea
                    name="message"
                    placeholder="Cuéntanos sobre tu proyecto *"
                    required
                    rows="4"
                  />
                </span>
              </label>
            </div>

            <button className="contact-form__submit button button--gradient" type="submit">
              <Icon name="send" />
              Enviar mensaje
              <Icon name="arrow" />
            </button>
            <p className="contact-form__note">
              Al enviar se abrirá tu aplicación de correo para completar el envío.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

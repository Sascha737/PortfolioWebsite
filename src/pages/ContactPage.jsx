import { Link } from 'react-router-dom'

export default function ContactPage() {
  return (
    <section className="contact-page">
      <p className="eyebrow eyebrow-dark">Start a conversation</p>
      <h1>Have something in mind?</h1>
      <p>
        Find me on GitHub to explore my work or get in touch. I’m always glad to hear about
        thoughtful projects and good questions.
      </p>
      <a className="button button-dark" href="https://github.com/Sascha737" target="_blank" rel="noreferrer">
        Visit my GitHub <span aria-hidden="true">↗</span>
      </a>
      <Link className="contact-back-link" to="/projects">Or browse the projects</Link>
    </section>
  )
}
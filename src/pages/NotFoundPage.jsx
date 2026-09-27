import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="contact-page not-found-page">
      <p className="eyebrow eyebrow-dark">404 · Page not found</p>
      <h1>This page took a wrong turn.</h1>
      <Link className="button button-dark" to="/">Back to home</Link>
    </section>
  )
}
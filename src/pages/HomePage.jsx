import { Link } from 'react-router-dom'
import { projects } from '../data/portfolio.js'

export default function HomePage() {
  const featuredProject = projects[0]

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(25, 39, 33, .83), rgba(25, 39, 33, .2)), url('/imgs/filler1.jpeg')" }}
      >
        <div className="hero-content">
          <p className="eyebrow">Developer · London, Ontario</p>
          <h1>Your next web app, built better.</h1>
          <p className="hero-copy">
            I’m a full-stack developer who builds production-ready applications, from front-end
            experience through back-end logic and deployment.
          </p>
          <Link className="button button-accent" to="/projects">
            Explore my work <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <span className="hero-index" aria-hidden="true">01 / 04</span>
      </section>

      <section className="section featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">Selected work</p>
            <h2>A project with a purpose.</h2>
          </div>
          <Link className="text-link" to="/projects">
            All projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <article className="featured-project">
          <img src={featuredProject.image} alt={featuredProject.imageAlt} />
          <div className="featured-project-copy">
            <p className="project-category">{featuredProject.category}</p>
            <h3>{featuredProject.name}</h3>
            <p>{featuredProject.description}</p>
            <a className="text-link" href={featuredProject.href} target="_blank" rel="noreferrer">
              View on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </section>

      <section className="statement-band">
        <p>Curious by nature. Thoughtful in execution.</p>
        <Link to="/about">A little about me <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  )
}
import { useSearchParams } from 'react-router-dom'
import { projects } from '../data/portfolio.js'

export default function ProjectsPage() {
  const [searchParams] = useSearchParams()
  const query = (searchParams.get('search') ?? '').trim().toLowerCase()
  const visibleProjects = projects.filter((project) =>
    `${project.name} ${project.category} ${project.description}`.toLowerCase().includes(query),
  )

  return (
    <>
      <section className="page-intro page-intro-green projects-intro">
        <p className="eyebrow">Selected work</p>
        <h1>Projects</h1>
        <p>Small ideas, carefully built into useful things.</p>
      </section>
      <section className="section projects-section" aria-live="polite">
        {query && <p className="search-summary">Results for “{searchParams.get('search')}”</p>}
        {visibleProjects.length > 0 ? (
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  <span className="project-card-index">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="project-card-copy">
                  <p className="project-category">{project.category}</p>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                    View on GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p className="eyebrow eyebrow-dark">No matches</p>
            <h2>Nothing found for that search.</h2>
            <p>Try another project name or search term.</p>
          </div>
        )}
      </section>
    </>
  )
}
import { biography, education, skills } from '../data/portfolio.js'

export default function AboutPage() {
  return (
    <>
      <section className="page-intro page-intro-green">
        <p className="eyebrow">A little context</p>
        <h1>Curiosity, made practical.</h1>
        <p>{biography}</p>
      </section>

      <section className="section education-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">The foundation</p>
            <h2>Education</h2>
          </div>
          <span className="section-number">01</span>
        </div>
        <div className="education-list">
          {education.map((item) => (
            <a
              className="education-item"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.institution}
            >
              <img src={item.image} alt={item.imageAlt} />
              <div className="education-copy">
                <p className="project-category">{item.years}</p>
                <h3>{item.institution}</h3>
                <p>{item.credential}</p>
                <p className="education-details">{item.details}</p>
              </div>
              <span className="education-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <div className="section skills-inner">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Tools of the trade</p>
              <h2>Skills &amp; languages</h2>
            </div>
            <span className="section-number">02</span>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article className="skill-item" key={skill.name}>
                <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
                <img src={skill.image} alt="" loading="lazy" />
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
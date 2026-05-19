import type { Experience } from '../content/resume'

interface ExperienceItemProps {
  job: Experience
}

export function ExperienceItem({ job }: ExperienceItemProps) {
  return (
    <article className="timeline-item experience-item">
      <header className="item-header">
        <div>
          <h3 className="item-title">{job.title}</h3>
          <p className="item-subtitle">
            {job.company} · {job.location}
          </p>
        </div>
        <p className="item-dates">
          {job.start} – {job.end}
        </p>
      </header>
      <ul className="item-list">
        {job.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  )
}

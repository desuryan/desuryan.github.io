import type { Education } from '../content/resume'

interface EducationItemProps {
  entry: Education
}

export function EducationItem({ entry }: EducationItemProps) {
  return (
    <article className="timeline-item education-item">
      <header className="item-header">
        <div>
          <h3 className="item-title">{entry.degree}</h3>
          <p className="item-subtitle">
            {entry.school} · {entry.location}
          </p>
        </div>
        <p className="item-dates">
          {entry.start} – {entry.end}
        </p>
      </header>
      {entry.details ? <p className="item-details">{entry.details}</p> : null}
    </article>
  )
}

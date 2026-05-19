import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section className="resume-section" id={id} aria-labelledby={headingId}>
      <h2 className="section-title" id={headingId}>
        {title}
      </h2>
      {children}
    </section>
  )
}

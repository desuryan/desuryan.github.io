import type { Project } from '../content/resume'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const title = project.href ? (
    <a href={project.href} target="_blank" rel="noopener noreferrer">
      {project.name}
    </a>
  ) : (
    project.name
  )

  return (
    <article className="project-card">
      <h3 className="item-title">{title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="skill-tags project-tech">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  )
}

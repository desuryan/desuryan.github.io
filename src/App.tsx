import { useEffect, useState } from 'react'
import { resume } from './content/resume'
import { Hero } from './components/Hero'
import { SiteNav } from './components/SiteNav'
import { Section } from './components/Section'
import { ExperienceItem } from './components/ExperienceItem'
import { EducationItem } from './components/EducationItem'
import { SkillList } from './components/SkillList'
import { ProjectCard } from './components/ProjectCard'
import { Footer } from './components/Footer'

type Theme = 'dark' | 'light'

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark'

  const savedTheme = window.localStorage.getItem('resume-theme')
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme

  return 'dark'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('resume-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="resume-page">
      <SiteNav theme={theme} onToggleTheme={toggleTheme} />
      <Hero
        profile={{
          name: resume.name,
          role: resume.role,
          location: resume.location,
          email: resume.email,
          phone: resume.phone,
          photoUrl: resume.photoUrl,
          links: resume.links,
        }}
      />

      <main id="main">
        <Section id="summary" title="Summary">
          <p className="summary-text">{resume.summary}</p>
        </Section>

        <Section id="experience" title="Experience">
          <div className="timeline">
            {resume.experience.map((job) => (
              <ExperienceItem key={`${job.company}-${job.title}`} job={job} />
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="timeline">
            {resume.education.map((entry) => (
              <EducationItem key={`${entry.school}-${entry.degree}`} entry={entry} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <SkillList groups={resume.skills} />
        </Section>

        {resume.projects.length > 0 ? (
          <Section id="projects" title="Projects">
            <div className="project-grid">
              {resume.projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </Section>
        ) : null}
      </main>

      <Footer name={resume.name} lastUpdated={resume.lastUpdated} />
    </div>
  )
}

export default App

import type { SkillGroup } from '../content/resume'

interface SkillListProps {
  groups: SkillGroup[]
}

export function SkillList({ groups }: SkillListProps) {
  return (
    <div className="skill-groups">
      {groups.map((group) => (
        <div className="skill-group" key={group.name}>
          <h3 className="skill-group-name">{group.name}</h3>
          <ul className="skill-tags">
            {group.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

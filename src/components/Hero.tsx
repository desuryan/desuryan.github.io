import type { Resume } from '../content/resume'
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  LocationIcon,
  PhoneIcon,
  socialKindFromLabel,
} from './icons/ContactIcons'

interface HeroProps {
  profile: Pick<
    Resume,
    'name' | 'role' | 'location' | 'email' | 'phone' | 'photoUrl' | 'links'
  >
}

export function Hero({ profile }: HeroProps) {
  const { name, role, location, email, phone, photoUrl, links } = profile

  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        {photoUrl ? (
          <img
            className="hero-photo"
            src={photoUrl}
            alt={`${name} headshot`}
            width={96}
            height={96}
          />
        ) : (
          <div className="hero-avatar" aria-hidden="true">
            {initials}
          </div>
        )}
        <div className="hero-text">
          <h1 className="hero-name">{name}</h1>
          <p className="hero-role">{role}</p>
          <div className="hero-contact">
            <div className="contact-item contact-location">
              <LocationIcon className="contact-icon" />
              <span>{location}</span>
            </div>
            <ul className="contact-row">
              <li className="contact-item">
                <EmailIcon className="contact-icon" />
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              {phone ? (
                <li className="contact-item">
                  <PhoneIcon className="contact-icon" />
                  <a href={`tel:${phone.replace(/[^\d+]/g, '')}`}>{phone}</a>
                </li>
              ) : null}
              {links.map((link) => {
                const kind = socialKindFromLabel(link.label)
                return (
                  <li key={link.href} className="contact-item">
                    {kind === 'linkedin' ? (
                      <LinkedInIcon className="contact-icon contact-icon--brand" />
                    ) : kind === 'github' ? (
                      <GitHubIcon className="contact-icon contact-icon--brand" />
                    ) : (
                      <EmailIcon className="contact-icon" />
                    )}
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

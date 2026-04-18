import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import profilImg from '@assets/photoProfil.png'
import { profile } from '../data/profile'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
)

const GitlabIcon = () => (
  <svg viewBox="0 0 256 236" aria-hidden className="h-5 w-5">
    <path fill="#E24329" d="m128.075 236.075l47.104-144.97H80.97z" />
    <path fill="#FC6D26" d="M128.075 236.074L80.97 91.104H14.956z" />
    <path
      fill="#FCA326"
      d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012z"
    />
    <path fill="#E24329" d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0z" />
    <path fill="#FC6D26" d="m128.075 236.074l47.104-144.97h66.015z" />
    <path
      fill="#FCA326"
      d="m241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012z"
    />
    <path
      fill="#E24329"
      d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0z"
    />
  </svg>
)

export function CvHeader() {
  return (
    <header
      className="relative overflow-hidden rounded-t-3xl bg-[image:var(--grad-neon)] px-6 py-6 text-[color:var(--text-on-neon)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1.5 text-sm">
          <h1 className="text-2xl font-semibold leading-tight">
            {profile.firstName} {profile.lastName}
          </h1>

          <p className="inline-flex items-start gap-2">
            <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              {profile.address.street}
              <br />
              {profile.address.city}
            </span>
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 hover:underline"
          >
            <EnvelopeIcon className="h-4 w-4 shrink-0" />
            <span>{profile.email}</span>
          </a>

          <p className="inline-flex items-center gap-2">
            <DevicePhoneMobileIcon className="h-4 w-4 shrink-0" />
            <span>{profile.phone}</span>
          </p>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <GithubIcon />
            <span>github.com/tommyRequillard</span>
          </a>

          <a
            href={profile.gitlab}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <GitlabIcon />
            <span>gitlab.com/tommyRequillard</span>
          </a>
        </div>

        <div className="hidden flex-col items-end gap-3 sm:flex">
          <p className="text-lg font-semibold">{profile.role}</p>
          <img
            src={profilImg}
            alt=""
            className="h-24 w-24 rounded-full object-cover shadow-lg ring-4 ring-white/60"
          />
        </div>
      </div>
    </header>
  )
}

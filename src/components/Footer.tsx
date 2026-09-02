import { Mail } from 'lucide-react';

import { GitHubIcon, LinkedInIcon } from '@/components/icons';
import { LocalTime } from '@/components/LocalTime';
import { links } from '@/data/cv';

const social = [
  { href: links.github, label: 'GitHub', Icon: GitHubIcon },
  { href: links.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: `mailto:${links.email}`, label: 'Email', Icon: Mail },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--rule)]">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-8">
        <LocalTime />
        <ul className="flex items-center gap-4">
          {social.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                rel="noreferrer noopener"
                target="_blank"
                className="inline-flex text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
              >
                <Icon size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

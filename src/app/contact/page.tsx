import { Mail } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contacts = [
  {
    label: 'Email',
    value: 'ta.towhidaziz@gmail.com',
    href: 'mailto:ta.towhidaziz@gmail.com',
    icon: <Mail size={18} />,
  },
  {
    label: 'GitHub',
    // TODO: Replace with your GitHub username
    value: 'github.com/Aziz-Towhid',
    href: 'https://github.com/Aziz-Towhid',
    icon: <GitHubLogoIcon width={18} height={18} />,
  },
  {
    label: 'LinkedIn',
    // TODO: Replace with your LinkedIn profile slug
    value: 'linkedin.com/in/towhid-aziz-b5505600g',
    href: 'https://www.linkedin.com/in/towhid-aziz-b5505600g/',
    icon: <LinkedInIcon />,
  },
];

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="max-w-md">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">Contact</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-10 leading-relaxed">
          Feel free to reach out — I&apos;m always open to new opportunities and conversations.
        </p>

        <div className="space-y-3">
          {contacts.map(({ label, value, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-zinc-100 dark:border-zinc-800 hover:border-green-500 dark:hover:border-green-500/60 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all group"
            >
              <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 group-hover:bg-green-50 dark:group-hover:bg-green-900/20 transition-colors text-zinc-500 dark:text-zinc-400 group-hover:text-green-600 dark:group-hover:text-green-400">
                {icon}
              </div>
              <div>
                <p className="text-xs text-zinc-400 dark:text-zinc-600 mb-0.5">{label}</p>
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

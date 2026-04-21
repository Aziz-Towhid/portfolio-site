import { Mail } from 'lucide-react';

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

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
    value: 'towhidaziz994@gmail.com',
    href: 'mailto:towhidaziz994@gmail.com',
    icon: <Mail size={18} />,
  },
  {
    label: 'GitHub',
    // TODO: Replace with your GitHub username
    value: 'github.com/your-username',
    href: 'https://github.com/your-username',
    icon: <GitHubIcon />,
  },
  {
    label: 'LinkedIn',
    // TODO: Replace with your LinkedIn profile slug
    value: 'linkedin.com/in/your-profile',
    href: 'https://linkedin.com/in/your-profile',
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

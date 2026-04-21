export default function AboutPage() {
  // TODO: Update with your actual tech stack
  const technologies = [
    'C#', 'Python', 'TypeScript', 'Unity', 'React', 'Next.js', 'C++',
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-10">About</h1>

        <div className="flex flex-col sm:flex-row gap-8 mb-12">
          {/* TODO: Replace with <Image> pointing to your photo in public/images/ */}
          <div className="w-28 h-28 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shrink-0 flex items-center justify-center">
            <span className="text-xs text-zinc-400 dark:text-zinc-600">Photo</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
              Towhid Aziz
            </h2>
            <p className="text-sm text-green-600 dark:text-green-400 mb-4">
              Software Engineer &amp; Game Developer
            </p>
            {/* TODO: Replace with your bio */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              [Bio placeholder — replace with your background, what drives you, and what you&apos;re
              currently working on or studying.]
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-600 mb-4">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

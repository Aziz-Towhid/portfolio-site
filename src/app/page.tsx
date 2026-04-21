import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6">
      <section className="min-h-[calc(100vh-3.5rem)] flex flex-col justify-center max-w-2xl py-20">
        <p className="text-green-600 dark:text-green-400 text-sm font-mono mb-4 tracking-wide">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
          Towhid Aziz
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 font-light">
          Software Engineer &amp; Game Developer
        </p>
        <p className="text-zinc-500 dark:text-zinc-500 max-w-md mb-10 leading-relaxed text-sm">
          I build software and create games — from systems and tools to interactive experiences.
          Currently studying Computer Science with a focus on game development.
        </p>
        <div className="flex gap-3">
          <Link
            href="/projects"
            className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium transition-colors"
          >
            View My Work
          </Link>
          <Link
            href="/about"
            className="px-5 py-2.5 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md text-sm font-medium transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>
    </main>
  );
}

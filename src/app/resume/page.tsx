import { Download } from 'lucide-react';

export default function ResumePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Resume</h1>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium transition-colors"
        >
          <Download size={15} />
          Download PDF
        </a>
      </div>

      {/* TODO: Once resume.pdf is in public/, replace this div with:
           <iframe src="/resume.pdf" className="w-full max-w-3xl aspect-[8.5/11] rounded-lg border border-zinc-200 dark:border-zinc-800" title="Resume" />
      */}
      <div className="w-full max-w-3xl">
        <div className="aspect-[8.5/11] bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-dashed border-zinc-200 dark:border-zinc-700 flex items-center justify-center">
          <div className="text-center space-y-1">
            <p className="text-sm text-zinc-400 dark:text-zinc-600">Resume preview</p>
            <p className="text-xs text-zinc-300 dark:text-zinc-700">
              Add <code className="font-mono">resume.pdf</code> to the <code className="font-mono">public/</code> folder
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

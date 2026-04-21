'use client';
import { useState } from 'react';
import { Play, X } from 'lucide-react';

interface WebGLPlayerProps {
  path: string;
  title: string;
}

export function WebGLPlayer({ path, title }: WebGLPlayerProps) {
  const [playing, setPlaying] = useState(false);

  if (!playing) {
    return (
      <button
        onClick={() => setPlaying(true)}
        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium transition-colors"
      >
        <Play size={15} />
        Play in Browser
      </button>
    );
  }

  return (
    <div className="space-y-2 w-full">
      <div className="flex items-center justify-between">
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          Playing: {title}
        </span>
        <button
          onClick={() => setPlaying(false)}
          className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <X size={13} />
          Close
        </button>
      </div>
      <div className="relative w-full aspect-video bg-black rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-700">
        <iframe
          src={`${path}/index.html`}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          title={title}
        />
      </div>
    </div>
  );
}

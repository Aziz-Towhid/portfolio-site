import { Project } from '@/types';
import { WebGLPlayer } from './WebGLPlayer';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

interface ProjectDetailProps {
  project: Project;
}

const typeBadge: Record<Project['type'], string> = {
  cs: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-800',
  game: 'bg-green-50 text-green-700 ring-1 ring-green-200 dark:bg-green-900/20 dark:text-green-400 dark:ring-green-800',
};

const typeLabel: Record<Project['type'], string> = {
  cs: 'CS Project',
  game: 'Game',
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="space-y-7">
      <div>
        <div className="flex items-start gap-3 mb-3">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
            {project.title}
          </h2>
          <span
            className={`mt-1 shrink-0 text-xs font-medium px-2.5 py-0.5 rounded-full ${typeBadge[project.type]}`}
          >
            {typeLabel[project.type]}
          </span>
        </div>
        {project.year && (
          <p className="text-xs text-zinc-400 dark:text-zinc-600 mb-3">{project.year}</p>
        )}
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
          {project.description}
        </p>
      </div>

      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-600 mb-3">
          Screenshots
        </p>
        {project.screenshots.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {project.screenshots.map((src, i) => (
              <div
                key={i}
                className="relative aspect-video rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-800"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-video rounded-md bg-zinc-50 dark:bg-zinc-800/50 border border-dashed border-zinc-200 dark:border-zinc-700 flex items-center justify-center"
              >
                <span className="text-xs text-zinc-300 dark:text-zinc-600">
                  Screenshot {i}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-3 pt-1">
        {project.type === 'game' && project.webglPath && (
          <WebGLPlayer path={project.webglPath} title={project.title} />
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md text-sm font-medium transition-colors"
          >
            <GitHubIcon />
            Source
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md text-sm font-medium transition-colors"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

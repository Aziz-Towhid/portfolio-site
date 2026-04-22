import { Project } from '@/types';
import { WebGLPlayer } from './WebGLPlayer';
import { ExternalLink } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

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
            <GitHubLogoIcon width={15} height={15} />
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

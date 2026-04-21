'use client';
import { useState, useMemo } from 'react';
import { projects } from '@/data/projects';
import { ProjectType } from '@/types';
import { ProjectDetail } from '@/components/ProjectDetail';
import { cn } from '@/lib/utils';

type Filter = 'all' | ProjectType;

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'CS', value: 'cs' },
  { label: 'Games', value: 'game' },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>('all');
  const [selectedId, setSelectedId] = useState<string>(projects[0]?.id ?? '');

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.type === filter)),
    [filter],
  );

  const selected = filtered.find((p) => p.id === selectedId) ?? filtered[0];

  const handleFilterChange = (f: Filter) => {
    setFilter(f);
    const first = f === 'all' ? projects[0] : projects.find((p) => p.type === f);
    if (first) setSelectedId(first.id);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-5">Projects</h1>
        <div className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-800/60 rounded-lg w-fit">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => handleFilterChange(value)}
              className={cn(
                'px-4 py-1.5 rounded-md text-sm font-medium transition-colors',
                filter === value
                  ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200',
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-0 md:gap-8 min-h-[560px]">
        <div className="md:w-56 shrink-0 space-y-0.5 mb-6 md:mb-0">
          {filtered.length === 0 ? (
            <p className="text-sm text-zinc-400 dark:text-zinc-600 px-3 py-2">
              No projects here yet.
            </p>
          ) : (
            filtered.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className={cn(
                  'w-full text-left px-3 py-3 rounded-lg border-l-2 transition-colors',
                  selected?.id === project.id
                    ? 'border-l-green-500 bg-zinc-50 dark:bg-zinc-800/50'
                    : 'border-l-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800/30',
                )}
              >
                <p
                  className={cn(
                    'text-sm font-medium leading-tight mb-0.5',
                    selected?.id === project.id
                      ? 'text-zinc-900 dark:text-zinc-100'
                      : 'text-zinc-700 dark:text-zinc-300',
                  )}
                >
                  {project.title}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-600 truncate">
                  {project.shortDescription}
                </p>
              </button>
            ))
          )}
        </div>

        <div className="hidden md:block w-px bg-zinc-100 dark:bg-zinc-800 shrink-0" />

        <div className="flex-1 min-w-0 md:pl-2">
          {selected ? (
            <ProjectDetail project={selected} />
          ) : (
            <p className="text-sm text-zinc-400 dark:text-zinc-600">
              Select a project to view details.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export type ProjectType = 'cs' | 'game';

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  shortDescription: string;
  description: string;
  tags: string[];
  screenshots: string[];
  webglPath?: string;
  githubUrl?: string;
  liveUrl?: string;
  year?: number;
}

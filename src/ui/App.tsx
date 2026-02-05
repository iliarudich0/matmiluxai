import React from 'react';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ProjectPage } from './pages/ProjectPage';
import { OtherProjectsPage } from './pages/OtherProjectsPage';
import { projectBySlug } from './content/projects';

export function App({ page }: { page: string }) {
  if (page === 'privacy') return <PrivacyPage />;
  if (page === 'other-projects') return <OtherProjectsPage />;
  if (page.startsWith('project:')) {
    const slug = page.slice('project:'.length);
    const project = projectBySlug[slug];
    if (!project) return <HomePage />;
    return <ProjectPage project={project} />;
  }

  return <HomePage />;
}

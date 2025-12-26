import { Show, For } from "solid-js";
import type { Project } from "~/data/projects";
import "./project-hero.css";

type ProjectHeroProps = {
  project: Project;
};

const statusLabel = (status: Project["status"]): string => {
  const labels: Record<Project["status"], string> = {
    "live": "Live",
    "in-progress": "In Progress",
    "archived": "Archived"
  };
  return labels[status];
};

export const ProjectHero = (props: ProjectHeroProps) => (
  <header class="project-hero">
    <h1 class="project-hero__title">{props.project.title}</h1>
    <p class="project-hero__tagline">{props.project.tagline}</p>
    
    <div class="project-hero__meta">
      <span class="project-hero__year">{props.project.year}</span>
      <span class="project-hero__status" data-status={props.project.status}>
        {statusLabel(props.project.status)}
      </span>
      <Show when={props.project.tags.length > 0}>
        <div class="project-hero__tags">
          <For each={props.project.tags}>
            {(tag) => <span class="project-hero__tag">{tag}</span>}
          </For>
        </div>
      </Show>
    </div>

    <Show when={props.project.externalUrl}>
      <a 
        href={props.project.externalUrl} 
        class="project-hero__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit site &rarr;
      </a>
    </Show>
  </header>
);

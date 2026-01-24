import { Show, For } from "solid-js";
import type { Project } from "~/data/projects";

type ProjectHeroProps = {
  project: Project;
};

const statusLabel = (status: Project["status"]): string => {
  const labels: Record<Project["status"], string> = {
    "live": "Live",
    "development": "In Development",
  };
  return labels[status];
};

export const ProjectHero = (props: ProjectHeroProps) => (
  <header class="project-hero">
    <h1 class="project-hero-title">{props.project.name}</h1>
    <p class="project-hero-tagline">{props.project.description}</p>
    
    <div class="project-hero-meta">
      <span class="text-sm text-muted">{props.project.year}</span>
      <span 
        class="badge" 
        classList={{
          "badge--live": props.project.status === "live",
          "badge--development": props.project.status === "development"
        }}
      >
        {statusLabel(props.project.status)}
      </span>
      <Show when={props.project.tags.length > 0}>
        <div class="flex gap-sm">
          <For each={props.project.tags}>
            {(tag) => <span class="tag">{tag}</span>}
          </For>
        </div>
      </Show>
    </div>

    <Show when={props.project.url}>
      <a 
        href={props.project.url} 
        class="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit site →
      </a>
    </Show>
  </header>
);

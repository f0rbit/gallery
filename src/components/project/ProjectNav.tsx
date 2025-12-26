import { Show } from "solid-js";
import { A } from "@solidjs/router";
import type { Project } from "~/data/projects";

type ProjectNavProps = {
  prev?: Project;
  next?: Project;
};

export const ProjectNav = (props: ProjectNavProps) => (
  <nav class="project-nav">
    <Show when={props.prev} fallback={<span />}>
      {(prev) => (
        <A href={`/projects/${prev().slug}`} class="project-nav-link">
          <span class="project-nav-label">← Previous</span>
          <span class="project-nav-title">{prev().name}</span>
        </A>
      )}
    </Show>
    
    <Show when={props.next}>
      {(next) => (
        <A href={`/projects/${next().slug}`} class="project-nav-link" style="text-align: right;">
          <span class="project-nav-label">Next →</span>
          <span class="project-nav-title">{next().name}</span>
        </A>
      )}
    </Show>
  </nav>
);

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
        <A href={`/work/${prev().slug}`} class="project-nav-link">
          <span class="project-nav-label">← Previous</span>
          <span class="project-nav-title">{prev().title}</span>
        </A>
      )}
    </Show>
    
    <Show when={props.next}>
      {(next) => (
        <A href={`/work/${next().slug}`} class="project-nav-link" style="text-align: right;">
          <span class="project-nav-label">Next →</span>
          <span class="project-nav-title">{next().title}</span>
        </A>
      )}
    </Show>
  </nav>
);

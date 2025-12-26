import { Show } from "solid-js";
import { A } from "@solidjs/router";
import type { Project } from "~/data/projects";
import "./project-nav.css";

type ProjectNavProps = {
  prev?: Project;
  next?: Project;
};

export const ProjectNav = (props: ProjectNavProps) => (
  <nav class="project-nav">
    <Show when={props.prev} fallback={<span />}>
      {(prev) => (
        <A href={`/work/${prev().slug}`} class="project-nav__link project-nav__link--prev">
          <span class="project-nav__direction">&larr; Previous</span>
          <span class="project-nav__title">{prev().title}</span>
        </A>
      )}
    </Show>
    
    <Show when={props.next}>
      {(next) => (
        <A href={`/work/${next().slug}`} class="project-nav__link project-nav__link--next">
          <span class="project-nav__direction">Next &rarr;</span>
          <span class="project-nav__title">{next().title}</span>
        </A>
      )}
    </Show>
  </nav>
);

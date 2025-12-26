import { Component } from "solid-js";
import { A } from "@solidjs/router";

type Props = {
  title: string;
  description: string;
  year: string;
  href: string;
};

const ProjectCard: Component<Props> = (props) => {
  return (
    <A href={props.href} class="card">
      <div class="flex flex-col gap-sm">
        <h3 class="card-title">{props.title}</h3>
        <div class="card-divider" />
        <p class="card-desc">{props.description}</p>
      </div>
      <div class="flex justify-between items-center mt-md">
        <span class="card-meta">{props.year}</span>
        <span class="card-arrow">→</span>
      </div>
    </A>
  );
};

export default ProjectCard;

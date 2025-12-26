import { Component } from "solid-js";
import { A } from "@solidjs/router";
import "./ProjectCard.css";

type ProjectCardProps = {
  title: string;
  description: string;
  year: string;
  href: string;
};

const ProjectCard: Component<ProjectCardProps> = (props) => {
  return (
    <A href={props.href} class="project-card">
      <div class="project-card__content">
        <h3 class="project-card__title">{props.title}</h3>
        <div class="project-card__divider" />
        <p class="project-card__description">{props.description}</p>
        <div class="project-card__footer">
          <span class="project-card__year">{props.year}</span>
          <span class="project-card__arrow">&rarr;</span>
        </div>
      </div>
    </A>
  );
};

export default ProjectCard;

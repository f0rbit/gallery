import { Component } from "solid-js";
import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import Layout from "~/components/layout/Layout";
import ProjectCard from "~/components/project/ProjectCard";
import { projects } from "~/data/projects";
import "./work.css";

const WorkIndex: Component = () => {
  return (
    <Layout back={{ href: "/", label: "home" }}>
      <Title>Work - Tom Materne</Title>
      
      <div class="work">
        <header class="work__header">
          <h1 class="work__title">Work</h1>
        </header>

        <div class="work__grid">
          <For each={projects}>
            {(project) => (
              <ProjectCard
                title={project.title}
                description={project.tagline}
                year={project.year}
                href={`/work/${project.slug}`}
              />
            )}
          </For>
        </div>
      </div>
    </Layout>
  );
};

export default WorkIndex;

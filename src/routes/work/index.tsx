import { Component, For } from "solid-js";
import { Title } from "@solidjs/meta";
import Layout from "~/components/layout/Layout";
import ProjectCard from "~/components/project/ProjectCard";
import { projects } from "~/data/projects";

const WorkIndex: Component = () => {
  return (
    <Layout back={{ href: "/", label: "home" }}>
      <Title>Work - Tom Materne</Title>
      
      <div class="page page--wide">
        <header class="mt-xl mb-xl">
          <h1 class="text-2xl">Work</h1>
        </header>

        <div class="grid grid-2 gap-lg">
          <For each={projects}>
            {(project) => (
              <ProjectCard
                title={project.name}
                description={project.description}
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

import { Component, Show, createMemo } from "solid-js";
import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import Layout from "~/components/layout/Layout";
import { ProjectHero } from "~/components/project/ProjectHero";
import { ProjectNav } from "~/components/project/ProjectNav";
import { getProject, getAdjacentProjects } from "~/data/projects";

const ProjectDetail: Component = () => {
  const params = useParams<{ slug: string }>();
  
  const project = createMemo(() => getProject(params.slug));
  const adjacent = createMemo(() => getAdjacentProjects(params.slug));

  return (
    <Show 
      when={project()} 
      fallback={
        <Layout back={{ href: "/work", label: "work" }}>
          <Title>Project Not Found - Tom Materne</Title>
          <div class="page mt-xl">
            <h1 class="text-2xl mb-md">Project not found</h1>
            <p class="text-muted">The project you're looking for doesn't exist.</p>
          </div>
        </Layout>
      }
    >
      {(p) => (
        <Layout back={{ href: "/work", label: "work" }}>
          <Title>{p().name} - Tom Materne</Title>
          
          <article class="page">
            <ProjectHero project={p()} />
            
            <section class="mt-lg">
              <Show when={p().github}>
                <div class="section mt-xl">
                  <a href={p().github} class="text-sm" target="_blank" rel="noopener noreferrer">
                    View on GitHub →
                  </a>
                </div>
              </Show>
            </section>
            
            <ProjectNav prev={adjacent().prev} next={adjacent().next} />
          </article>
        </Layout>
      )}
    </Show>
  );
};

export default ProjectDetail;

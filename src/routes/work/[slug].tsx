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
          <Title>{p().title} - Tom Materne</Title>
          
          <article class="page">
            <ProjectHero project={p()} />
            
            <section class="mt-lg">
              <p class="text-lg text-muted leading-relaxed">{p().description}</p>
              
              <Show when={p().problem}>
                <div class="section mt-xl">
                  <h2 class="section-title">Problem</h2>
                  <p class="text-muted leading-relaxed">{p().problem}</p>
                </div>
              </Show>
              
              <Show when={p().approach}>
                <div class="section mt-xl">
                  <h2 class="section-title">Approach</h2>
                  <p class="text-muted leading-relaxed">{p().approach}</p>
                </div>
              </Show>
              
              <Show when={p().technicalNotes}>
                <div class="section mt-xl">
                  <h2 class="section-title">Technical Notes</h2>
                  <p class="text-muted leading-relaxed">{p().technicalNotes}</p>
                  <Show when={p().forbitLink}>
                    <p class="mt-md">
                      <a href={p().forbitLink} class="text-sm" target="_blank" rel="noopener noreferrer">
                        Read more on forbit.dev →
                      </a>
                    </p>
                  </Show>
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

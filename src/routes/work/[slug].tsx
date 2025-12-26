import { Component, Show, createMemo } from "solid-js";
import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import Layout from "~/components/layout/Layout";
import { ProjectHero } from "~/components/project/ProjectHero";
import { ProjectNav } from "~/components/project/ProjectNav";
import { getProject, getAdjacentProjects } from "~/data/projects";
import "./project.css";

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
          <div class="project__not-found">
            <h1>Project not found</h1>
            <p>The project you're looking for doesn't exist.</p>
          </div>
        </Layout>
      }
    >
      {(p) => (
        <Layout back={{ href: "/work", label: "work" }}>
          <Title>{p().title} - Tom Materne</Title>
          
          <article class="project">
            <ProjectHero project={p()} />
            
            <section class="project__content">
              <p class="project__description">{p().description}</p>
              
              <Show when={p().problem}>
                <div class="project__section">
                  <h2 class="project__section-title">Problem</h2>
                  <p>{p().problem}</p>
                </div>
              </Show>
              
              <Show when={p().approach}>
                <div class="project__section">
                  <h2 class="project__section-title">Approach</h2>
                  <p>{p().approach}</p>
                </div>
              </Show>
              
              <Show when={p().technicalNotes}>
                <div class="project__section">
                  <h2 class="project__section-title">Technical Notes</h2>
                  <p>{p().technicalNotes}</p>
                  <Show when={p().forbitLink}>
                    <p class="project__forbit-link">
                      <a href={p().forbitLink} target="_blank" rel="noopener noreferrer">
                        Read more on forbit.dev &rarr;
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

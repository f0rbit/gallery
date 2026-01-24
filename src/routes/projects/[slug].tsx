import { Component, Show, createMemo } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import Layout from "~/components/layout/Layout";
import { ProjectHero } from "~/components/project/ProjectHero";
import { ProjectNav } from "~/components/project/ProjectNav";
import { ProjectStory } from "~/components/project/ProjectStory";
import { ProjectTimeline } from "~/components/project/ProjectTimeline";
import { ProjectFeatures } from "~/components/project/ProjectFeatures";
import { ProjectTech } from "~/components/project/ProjectTech";
import { getProject, getAdjacentProjects } from "~/data/projects";
import { getProjectContent, hasProjectContent } from "~/data/project-content";

const ProjectDetail: Component = () => {
  const params = useParams<{ slug: string }>();
  
  const project = createMemo(() => getProject(params.slug));
  const adjacent = createMemo(() => getAdjacentProjects(params.slug));
  const content = createMemo(() => getProjectContent(params.slug));
  const hasFeaturedContent = createMemo(() => hasProjectContent(params.slug));

  return (
    <Show 
      when={project()} 
      fallback={
        <Layout back={{ href: "/", label: "home" }}>
          <Title>Project Not Found - Tom Materne</Title>
          <div class="page mt-xl">
            <h1 class="text-2xl mb-md">Project not found</h1>
            <p class="text-muted">The project you're looking for doesn't exist.</p>
          </div>
        </Layout>
      }
    >
      {(p) => (
        <Layout back={{ href: "/", label: "home" }}>
          <Title>{p().name} — Tom Materne</Title>
          <Meta 
            name="description" 
            content={content()?.problem?.slice(0, 160) || p().description} 
          />
          
          <article class="page">
            {/* Featured project indicator */}
            <Show when={hasFeaturedContent()}>
              <div class="project-featured-badge">Featured Project</div>
            </Show>

            {/* Hero section - always shown */}
            <ProjectHero project={p()} />
            
            <hr class="divider" />

            {/* Rich content for featured projects */}
            <Show when={content()}>
              {(c) => (
                <>
                  {/* The Story */}
                  <ProjectStory 
                    origin={c().origin}
                    problem={c().problem}
                    approach={c().approach}
                    growth={c().growth}
                  />

                  <hr class="divider" />

                  {/* Features */}
                  <Show when={c().features}>
                    <ProjectFeatures features={c().features!} />
                  </Show>

                  {/* Timeline */}
                  <Show when={c().timeline}>
                    <ProjectTimeline items={c().timeline!} />
                  </Show>

                  {/* Tech Stack & Links */}
                  <Show when={c().techStack || c().links}>
                    <ProjectTech 
                      techStack={c().techStack || []}
                      links={c().links}
                    />
                  </Show>
                </>
              )}
            </Show>

            {/* Fallback for non-featured projects */}
            <Show when={!hasFeaturedContent()}>
              <section class="prose">
                <p>{p().description}</p>
              </section>

              <Show when={p().github || p().url}>
                <div class="project-links mt-lg">
                  <Show when={p().url}>
                    <a 
                      href={p().url} 
                      class="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Visit Site →
                    </a>
                  </Show>
                  <Show when={p().github}>
                    <a 
                      href={p().github} 
                      class="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View on GitHub →
                    </a>
                  </Show>
                </div>
              </Show>
            </Show>

            {/* Navigation to adjacent projects */}
            <ProjectNav prev={adjacent().prev} next={adjacent().next} />
          </article>
        </Layout>
      )}
    </Show>
  );
};

export default ProjectDetail;

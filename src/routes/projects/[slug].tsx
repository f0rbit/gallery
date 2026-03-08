import { Component, Show } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import { useParams, createAsync, cache, type RouteDefinition } from "@solidjs/router";
import Layout from "~/components/layout/Layout";
import { ProjectHero } from "~/components/project/ProjectHero";
import { ProjectNav } from "~/components/project/ProjectNav";
import { ProjectStory } from "~/components/project/ProjectStory";
import { ProjectTimeline } from "~/components/project/ProjectTimeline";
import { ProjectFeatures } from "~/components/project/ProjectFeatures";
import { ProjectTech } from "~/components/project/ProjectTech";
import { getProject, getAdjacentProjects } from "~/data/projects";
import { getProjectContent, hasProjectContent } from "~/data/project-content";

const getProjectData = cache(async (slug: string) => {
  const [project, adjacent] = await Promise.all([
    getProject(slug),
    getAdjacentProjects(slug),
  ]);
  if (!project) return null;
  const content = getProjectContent(slug);
  const hasContent = hasProjectContent(slug);
  return { project, adjacent, content, hasContent };
}, "project-data");

export const route = {
  preload: ({ params }) => getProjectData(params.slug!),
} satisfies RouteDefinition;

const ProjectDetail: Component = () => {
  const params = useParams<{ slug: string }>();
  const data = createAsync(() => getProjectData(params.slug));

  return (
    <Show 
      when={data()} 
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
      {(d) => (
        <Layout back={{ href: "/", label: "home" }}>
          <Title>{d().project.name} — Tom Materne</Title>
          <Meta 
            name="description" 
            content={d().content?.problem?.slice(0, 160) || d().project.description} 
          />
          
          <article class="page">
            {/* Featured project indicator */}
            <Show when={d().hasContent}>
              <div class="project-featured-badge">Featured Project</div>
            </Show>

            {/* Hero section - always shown */}
            <ProjectHero project={d().project} />
            
            <hr class="divider" />

            {/* Rich content for featured projects */}
            <Show when={d().content}>
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
            <Show when={!d().hasContent}>
              <section class="prose">
                <p>{d().project.description}</p>
              </section>

              <Show when={d().project.github || d().project.url}>
                <div class="project-links mt-lg">
                  <Show when={d().project.url}>
                    <a 
                      href={d().project.url} 
                      class="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Visit Site →
                    </a>
                  </Show>
                  <Show when={d().project.github}>
                    <a 
                      href={d().project.github} 
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
            <ProjectNav prev={d().adjacent.prev ?? undefined} next={d().adjacent.next ?? undefined} />
          </article>
        </Layout>
      )}
    </Show>
  );
};

export default ProjectDetail;

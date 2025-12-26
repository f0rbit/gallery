import { Component, For, Show } from "solid-js";
import { Title } from "@solidjs/meta";
import Layout from "~/components/layout/Layout";
import { getProjectsByStatus, type Project } from "~/data/projects";

const liveProjects = getProjectsByStatus("live");
const devProjects = getProjectsByStatus("development");
const finishedProjects = [
  ...getProjectsByStatus("finished"),
  ...getProjectsByStatus("paused"),
];

const formatUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const ProjectRow: Component<{ project: Project }> = (props) => {
  const hasExternalUrl = () => !!props.project.url;
  const href = () => hasExternalUrl() ? props.project.url! : `/projects/${props.project.slug}`;
  const isExternal = () => hasExternalUrl();

  return (
    <a
      href={href()}
      class="project-row"
      target={isExternal() ? "_blank" : undefined}
      rel={isExternal() ? "noopener noreferrer" : undefined}
    >
      <span class="project-year">{props.project.year}</span>
      <span class="project-name">{props.project.name}</span>
      <span class="project-tags">{props.project.tags.join(", ")}</span>
      <Show when={isExternal()}>
        <span class="project-link-indicator">→ {formatUrl(props.project.url!)}</span>
      </Show>
    </a>
  );
};

const DevRow: Component<{ project: Project }> = (props) => {
  const href = () => props.project.url ?? props.project.github ?? `/projects/${props.project.slug}`;
  const isExternal = () => !!props.project.url || !!props.project.github;
  const displayUrl = () => props.project.url ? formatUrl(props.project.url) : undefined;

  return (
    <a
      href={href()}
      class="dev-row"
      target={isExternal() ? "_blank" : undefined}
      rel={isExternal() ? "noopener noreferrer" : undefined}
    >
      <span class="dev-name">{props.project.name}</span>
      <span>—</span>
      <span>{props.project.description}</span>
      <Show when={displayUrl()}>
        <span>→ {displayUrl()}</span>
      </Show>
    </a>
  );
};

const ProjectsIndex: Component = () => {
  return (
    <Layout back={{ href: "/", label: "home" }}>
      <Title>Projects - Tom Materne</Title>
      
      <div class="page">
        <header class="page-header">
          <h1 class="page-title">Projects</h1>
        </header>

        <hr class="divider" />

        <Show when={liveProjects.length > 0}>
          <section class="home-section" style={{ "margin-bottom": "var(--space-section)" }}>
            <h2 class="section-label">Live</h2>
            <For each={liveProjects}>
              {(project) => <ProjectRow project={project} />}
            </For>
          </section>
        </Show>

        <Show when={devProjects.length > 0}>
          <section class="home-section" style={{ "margin-bottom": "var(--space-section)" }}>
            <h2 class="section-label">In Development</h2>
            <For each={devProjects}>
              {(project) => <DevRow project={project} />}
            </For>
          </section>
        </Show>

        <Show when={finishedProjects.length > 0}>
          <section class="home-section" style={{ "margin-bottom": "var(--space-section)" }}>
            <h2 class="section-label">Finished / Archived</h2>
            <For each={finishedProjects}>
              {(project) => <DevRow project={project} />}
            </For>
          </section>
        </Show>
      </div>
    </Layout>
  );
};

export default ProjectsIndex;

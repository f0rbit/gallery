import { Component, For } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Grain from "~/components/common/Grain";
import { getLiveProjects, getDevProjects, type Project } from "~/data/projects";
import { getLatestPosts, type BlogPost } from "~/data/posts";

const navLinks = [
  { label: "projects", href: "/projects" },
  { label: "about", href: "/about" },
  { label: "now", href: "/now" },
  { label: "colophon", href: "/colophon" },
];

const externalLinks = [
  { label: "forbit.dev", href: "https://forbit.dev" },
  { label: "blends.blog", href: "https://blends.blog" },
  { label: "github", href: "https://github.com/f0rbit" },
];

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
      {isExternal() && <span class="project-link-indicator">↗</span>}
    </a>
  );
};

const DevRow: Component<{ project: Project }> = (props) => {
  const href = () => props.project.url ?? props.project.github ?? `/projects/${props.project.slug}`;
  const isExternal = () => !!props.project.url || !!props.project.github;

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
      {isExternal() && <span>→</span>}
    </a>
  );
};

const PostRow: Component<{ post: BlogPost }> = (props) => (
  <a
    href={props.post.url}
    class="post-row"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="post-date">{props.post.date}</span>
    <span class="post-title">{props.post.title}</span>
  </a>
);

const Home: Component = () => {
  const liveProjects = getLiveProjects();
  const devProjects = getDevProjects();
  const latestPosts = getLatestPosts(3);

  return (
    <>
      <Title>Tom Materne</Title>
      <Meta
        name="description"
        content="Software engineer, game developer, and artist. Building at the intersection of technology and human experience."
      />
      <Grain />
      <div class="home">
        <header class="home-hero" style={{ "padding-top": "var(--space-hero)", "padding-bottom": "var(--space-hero-below)" }}>
          <h1 class="home-name">THOMAS MATERNE</h1>
          <p class="home-tagline">software games art</p>
        </header>

        <section class="home-section" style={{ "margin-bottom": "var(--space-section)" }}>
          <h2 class="section-label">Selected Work</h2>
          <For each={liveProjects}>
            {(project) => <ProjectRow project={project} />}
          </For>
        </section>

        <section class="home-section" style={{ "margin-bottom": "var(--space-section)" }}>
          <h2 class="section-label">In Development</h2>
          <For each={devProjects}>
            {(project) => <DevRow project={project} />}
          </For>
        </section>

        <section class="home-section" style={{ "margin-bottom": "var(--space-section)" }}>
          <h2 class="section-label">Latest Writing</h2>
          <For each={latestPosts}>
            {(post) => <PostRow post={post} />}
          </For>
          <a href="https://forbit.dev/blog" class="link-more" target="_blank" rel="noopener noreferrer">
            all posts →
          </a>
        </section>

        <nav class="home-nav">
          <For each={navLinks}>
            {(link, i) => (
              <>
                <A href={link.href} class="link-nav tracking-wide">
                  {link.label}
                </A>
                {i() < navLinks.length - 1 && <span class="home-nav-sep" />}
              </>
            )}
          </For>
        </nav>

        <hr class="divider" />

        <footer class="home-footer">
          <div class="home-external">
            <For each={externalLinks}>
              {(link, i) => (
                <>
                  <a
                    href={link.href}
                    class="link-subtle text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                  {i() < externalLinks.length - 1 && (
                    <span class="text-subtle">·</span>
                  )}
                </>
              )}
            </For>
          </div>
          <a href="mailto:tom@thomas-materne.com" class="link-subtle text-sm">
            tom@thomas-materne.com
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;

import { Component, For } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Grain from "~/components/common/Grain";
import { getFeaturedProjects, type Project } from "~/data/projects";
import { getLatestPosts, type BlogPost } from "~/data/posts";

const navLinks = [
  { label: "about", href: "/about" },
  { label: "now", href: "/now" },
];

const ProjectRow: Component<{ project: Project }> = (props) => {
  const href = () => `/projects/${props.project.slug}`;

  return (
    <a href={href()} class="project-row">
      <span class="project-year">{props.project.year}</span>
      <span class="project-name">{props.project.name}</span>
      <span class="project-tags">{props.project.tags.join(", ")}</span>
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
  const projects = getFeaturedProjects();
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

        <div class="home-content">
          <section class="home-section" style={{ "margin-bottom": "var(--space-section)" }}>
            <h2 class="section-label">Selected Work</h2>
            <For each={projects}>
              {(project) => <ProjectRow project={project} />}
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
        </div>
      </div>
    </>
  );
};

export default Home;

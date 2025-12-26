import { Component, Index } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Grain from "~/components/common/Grain";
import ProjectCard from "~/components/project/ProjectCard";

const projects = [
  {
    title: "Chamber",
    description: "AI-powered civic technology for democratic transparency",
    year: "2024",
    href: "/work/chamber",
  },
  {
    title: "Flowers",
    description: "A photographic study in bloom and decay",
    year: "2025",
    href: "/work/flowers",
  },
];

const navLinks = [
  { label: "work", href: "/work" },
  { label: "about", href: "/about" },
  { label: "now", href: "/now" },
  { label: "colophon", href: "/colophon" },
];

const externalLinks = [
  { label: "forbit.dev", href: "https://forbit.dev" },
  { label: "blends.blog", href: "https://blends.blog" },
  { label: "github", href: "https://github.com/f0rbit" },
];

const Home: Component = () => {
  return (
    <>
      <Title>Tom Materne</Title>
      <Meta
        name="description"
        content="Software engineer, photographer, and aspiring game developer. Building at the intersection of technology and human experience."
      />
      <Grain />
      <div class="home">
        <header class="home-hero">
          <h1 class="home-name">THOMAS MATERNE</h1>
          <p class="home-tagline">software · games · photography</p>
        </header>

        <hr class="divider" />

        <section class="home-projects">
          <Index each={projects}>
            {(project) => (
              <ProjectCard
                title={project().title}
                description={project().description}
                year={project().year}
                href={project().href}
              />
            )}
          </Index>
        </section>

        <hr class="divider" />

        <section class="home-status">
          <p class="text-muted italic">
            Currently: Building mycelia, shipping Chamber v2
          </p>
        </section>

        <nav class="home-nav">
          <Index each={navLinks}>
            {(link, i) => (
              <>
                <A href={link().href} class="link-nav tracking-wide">
                  {link().label}
                </A>
                {i < navLinks.length - 1 && <span class="home-nav-sep" />}
              </>
            )}
          </Index>
        </nav>

        <hr class="divider" />

        <footer class="home-footer">
          <div class="home-external">
            <span class="text-sm text-subtle">also:</span>
            <Index each={externalLinks}>
              {(link, i) => (
                <>
                  <a
                    href={link().href}
                    class="link-subtle text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link().label}
                  </a>
                  {i < externalLinks.length - 1 && (
                    <span class="text-subtle">·</span>
                  )}
                </>
              )}
            </Index>
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

import { For, Show } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import { cache, createAsync } from "@solidjs/router";
import Layout from "~/components/layout/Layout";
import { getAllProjects, type Project } from "~/data/projects";

const buildDate = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });

const getNowData = cache(async () => {
  const all = await getAllProjects();
  return all.filter(p => p.status === "development");
}, "now-data");

export const route = { preload: () => getNowData() };

type NowItem = {
  name: string;
  description: string;
  link?: { label: string; href: string };
};

const exploring: NowItem[] = [
  {
    name: "Photography",
    description: "Beginning a study on flowers, bloom, decay",
  },
  {
    name: "Game Design",
    description: "Researching atmospheric game design for 2026",
  },
];

const NowRow = (props: { item: NowItem }) => (
  <a
    href={props.item.link?.href ?? "#"}
    class="dev-row"
    target={props.item.link ? "_blank" : undefined}
    rel={props.item.link ? "noopener noreferrer" : undefined}
  >
    <span class="dev-name">{props.item.name}</span>
    <span>—</span>
    <span>{props.item.description}</span>
    {props.item.link && <span>→ {props.item.link.label}</span>}
  </a>
);

const ProjectNowRow = (props: { project: Project }) => (
  <a
    href={`/projects/${props.project.slug}`}
    class="dev-row"
  >
    <span class="dev-name">{props.project.name}</span>
    <span>—</span>
    <span>{props.project.description}</span>
  </a>
);

export default function Now() {
  const projects = createAsync(() => getNowData());

  return (
    <Layout back={{ href: "/", label: "home" }}>
      <Title>Now — Tom Materne</Title>
      <Meta name="description" content={`What I'm focused on right now. Updated ${buildDate}.`} />
      
      <article class="page">
        <header class="page-header">
          <h1 class="page-title">Now</h1>
          <p class="page-subtitle">Last updated: {buildDate}</p>
        </header>
        
        <hr class="divider" />
        
        <section class="home-section" style={{ "margin-bottom": "var(--space-section)" }}>
          <h2 class="section-label">Building</h2>
          <Show when={projects()}>
            {(items) => (
              <For each={items()}>
                {(project) => <ProjectNowRow project={project} />}
              </For>
            )}
          </Show>
        </section>

        <section class="home-section" style={{ "margin-bottom": "var(--space-section)" }}>
          <h2 class="section-label">Exploring</h2>
          {exploring.map((item) => <NowRow item={item} />)}
        </section>
      </article>
    </Layout>
  );
}

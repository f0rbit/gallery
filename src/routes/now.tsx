import { Title, Meta } from "@solidjs/meta";
import Layout from "~/components/layout/Layout";

type NowItem = {
  name: string;
  description: string;
  link?: { label: string; href: string };
};

const building: NowItem[] = [
  {
    name: "Chamber v2",
    description: "Adding historical context and improved summarization",
  },
  {
    name: "mycelia",
    description: "Framework for interconnected digital gardens",
  },
  {
    name: "devpad",
    description: "Daily driver for project tracking",
    link: { label: "devpad.tools", href: "https://devpad.tools" },
  },
];

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

export default function Now() {
  return (
    <Layout back={{ href: "/", label: "home" }}>
      <Title>Now — Tom Materne</Title>
      <Meta name="description" content="What I'm focused on right now. Updated December 2024." />
      
      <article class="page">
        <header class="page-header">
          <h1 class="page-title">Now</h1>
          <p class="page-subtitle">Last updated: December 2024</p>
        </header>
        
        <hr class="divider" />
        
        <section class="home-section" style={{ "margin-bottom": "var(--space-section)" }}>
          <h2 class="section-label">Building</h2>
          {building.map((item) => <NowRow item={item} />)}
        </section>

        <section class="home-section" style={{ "margin-bottom": "var(--space-section)" }}>
          <h2 class="section-label">Exploring</h2>
          {exploring.map((item) => <NowRow item={item} />)}
        </section>
      </article>
    </Layout>
  );
}

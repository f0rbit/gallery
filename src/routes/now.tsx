import { Title, Meta } from "@solidjs/meta";
import Layout from "~/components/layout/Layout";

type NowItem = {
  title: string;
  description: string;
  link?: { label: string; href: string };
};

const building: NowItem[] = [
  {
    title: "Chamber v2",
    description: "Adding historical context and improved summarization. Target: Q1 2025.",
  },
  {
    title: "mycelia",
    description: "A framework for interconnected digital gardens.",
  },
  {
    title: "devpad",
    description: "Daily driver for project tracking.",
    link: { label: "devpad.tools", href: "https://devpad.tools" },
  },
];

const exploring: NowItem[] = [
  {
    title: "Photography",
    description: "Beginning a photographic study on flowers—bloom, decay, the passage of time.",
  },
  {
    title: "Game Design",
    description: "Researching atmospheric game design for first serious game project in Q3 2026.",
  },
];

const NowSection = (props: { title: string; items: NowItem[] }) => (
  <section class="section">
    <h2 class="section-title">{props.title}</h2>
    <ul class="list-plain">
      {props.items.map((item) => (
        <li class="mb-lg leading-relaxed">
          <strong class="font-semibold">{item.title}</strong>
          <span class="text-subtle"> — </span>
          <span class="text-muted">
            {item.description}
            {item.link && (
              <>
                {" "}
                <a href={item.link.href}>{item.link.label}</a>
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  </section>
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
        
        <NowSection title="Building" items={building} />
        <NowSection title="Exploring" items={exploring} />
      </article>
    </Layout>
  );
}

import { Title, Meta } from "@solidjs/meta";
import Layout from "~/components/layout/Layout";

type ListItem = { label: string; value: string };

const technology: ListItem[] = [
  { label: "Framework", value: "SolidStart" },
  { label: "Runtime", value: "Bun" },
  { label: "Styling", value: "Vanilla CSS with custom properties" },
  { label: "Hosting", value: "Cloudflare Pages" },
];

const typography: ListItem[] = [
  { label: "Display", value: "Fraunces (Georgia fallback)" },
  { label: "Body", value: "IBM Plex Sans (system fonts fallback)" },
];

const ListRow = (props: { item: ListItem }) => (
  <div class="dev-row">
    <span class="dev-name">{props.item.label}</span>
    <span>—</span>
    <span>{props.item.value}</span>
  </div>
);

export default function ColophonPage() {
  return (
    <Layout back={{ href: "/", label: "home" }}>
      <Title>Colophon — Tom Materne</Title>
      <Meta name="description" content="How this site was made. Technology, typography, and design philosophy." />

      <article class="page">
        <header class="page-header">
          <h1 class="page-title">Colophon</h1>
        </header>

        <hr class="divider" />

        <p class="prose" style={{ "margin-bottom": "var(--space-xl)" }}>
          This site is built with SolidStart and hand-crafted CSS.
          No frameworks, no component libraries—just intentional design decisions.
        </p>

        <hr class="divider" />

        <section class="home-section" style={{ "margin-bottom": "var(--space-section)" }}>
          <h2 class="section-label">Technology</h2>
          {technology.map((item) => <ListRow item={item} />)}
        </section>

        <section class="home-section" style={{ "margin-bottom": "var(--space-section)" }}>
          <h2 class="section-label">Typography</h2>
          {typography.map((item) => <ListRow item={item} />)}
        </section>

        <section class="home-section" style={{ "margin-bottom": "var(--space-xl)" }}>
          <h2 class="section-label">Design</h2>
          <p class="prose">
            The grain texture is inspired by analog photography and aged paper.
            The warm color palette evokes darkroom prints.
          </p>
        </section>

        <hr class="divider" />

        <footer class="text-muted text-sm" style={{ "text-align": "center" }}>
          <p style={{ "margin-bottom": "var(--space-sm)" }}>Built with love and Claude.</p>
          <p>
            Source:{" "}
            <a
              href="https://github.com/f0rbit/thomas-materne"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/f0rbit/thomas-materne
            </a>
          </p>
        </footer>
      </article>
    </Layout>
  );
}

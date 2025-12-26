import { Title, Meta } from "@solidjs/meta";
import { For } from "solid-js";
import Layout from "~/components/layout/Layout";

const elsewhereLinks = [
  { label: "github.com/f0rbit", href: "https://github.com/f0rbit" },
  { label: "forbit.dev", href: "https://forbit.dev" },
  { label: "blends.blog", href: "https://blends.blog" },
  { label: "tom@thomas-materne.com", href: "mailto:tom@thomas-materne.com" },
] as const;

const LinkRow = (props: { label: string; href: string }) => (
  <a
    href={props.href}
    class="dev-row"
    target={props.href.startsWith("mailto:") ? undefined : "_blank"}
    rel={props.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
  >
    <span>{props.label}</span>
    <span>→</span>
  </a>
);

export default function About() {
  return (
    <Layout back={{ href: "/", label: "home" }}>
      <Title>About — Tom Materne</Title>
      <Meta name="description" content="Software engineer at Amazon. Brisbane, Australia." />
      
      <article class="page">
        <header class="about-hero">
          <h1 class="home-name">THOMAS MATERNE</h1>
          <p class="home-tagline">Software engineer at Amazon. Brisbane, Australia.</p>
        </header>
        
        <hr class="divider" />
        
        <section class="prose">
          <p>
            I make things at the intersection of technology and human experience. 
            My work ranges from civic technology (Chamber) to experimental games 
            to photographic studies.
          </p>
          <p>I believe software can be art, and art can be functional.</p>
          <p>
            This site is the gallery. The workshop is at{" "}
            <a href="https://forbit.dev" target="_blank" rel="noopener noreferrer">forbit.dev</a>. The journal is at{" "}
            <a href="https://blends.blog" target="_blank" rel="noopener noreferrer">blends.blog</a>.
          </p>
        </section>
        
        <hr class="divider" />
        
        <section class="home-section">
          <h2 class="section-label">Elsewhere</h2>
          <For each={elsewhereLinks}>
            {(link) => <LinkRow label={link.label} href={link.href} />}
          </For>
        </section>
      </article>
    </Layout>
  );
}

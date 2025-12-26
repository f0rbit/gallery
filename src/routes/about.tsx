import { Title, Meta } from "@solidjs/meta";
import Layout from "~/components/layout/Layout";

const links = [
  { label: "github.com/f0rbit", href: "https://github.com/f0rbit" },
  { label: "forbit.dev", href: "https://forbit.dev" },
  { label: "blends.blog", href: "https://blends.blog" },
  { label: "tom@thomas-materne.com", href: "mailto:tom@thomas-materne.com" },
] as const;

export default function About() {
  return (
    <Layout back={{ href: "/", label: "home" }}>
      <Title>About — Tom Materne</Title>
      <Meta name="description" content="Software engineer, photographer, aspiring game developer. Brisbane, Australia." />
      
      <article class="page">
        <header class="flex gap-xl mt-xl items-start about-header">
          <div class="portrait-placeholder" aria-label="Portrait of Tom Materne" />
          
          <div class="mt-md">
            <h1 class="page-title" style="text-align: left;">Tom Materne</h1>
            <p class="text-lg text-muted leading-relaxed mb-md">
              Software engineer, photographer,<br />
              aspiring game developer.
            </p>
            <p class="text-sm text-subtle">Brisbane, Australia.</p>
            <p class="text-sm text-subtle">Currently at Amazon.</p>
          </div>
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
            <a href="https://forbit.dev">forbit.dev</a>. The journal is at{" "}
            <a href="https://blends.blog">blends.blog</a>.
          </p>
        </section>
        
        <hr class="divider" />
        
        <section class="section">
          <h2 class="section-title">Elsewhere</h2>
          <ul class="list-plain">
            {links.map((link) => (
              <li>
                <a href={link.href} class="link-subtle text-sm">{link.label}</a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Layout>
  );
}

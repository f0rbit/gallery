import { Title, Meta } from "@solidjs/meta";
import Layout from "~/components/layout/Layout";
import "./about.css";

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
      
      <article class="about">
        
        <header class="about__header">
          <div class="about__portrait">
            <div class="about__portrait-placeholder" aria-label="Portrait of Tom Materne" />
          </div>
          
          <div class="about__intro">
            <h1 class="about__name">Tom Materne</h1>
            <p class="about__tagline">
              Software engineer, photographer,<br />
              aspiring game developer.
            </p>
            <p class="about__location">Brisbane, Australia.</p>
            <p class="about__current">Currently at Amazon.</p>
          </div>
        </header>
        
        <hr class="about__divider" />
        
        <section class="about__bio">
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
        
        <hr class="about__divider" />
        
        <section class="about__elsewhere">
          <h2 class="about__section-title">Elsewhere</h2>
          <ul class="about__links">
            {links.map((link) => (
              <li>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Layout>
  );
}

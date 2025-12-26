import { Title, Meta } from "@solidjs/meta";
import Layout from "~/components/layout/Layout";
import "./colophon.css";

const Section = (props: { title: string; children: any }) => (
  <section class="colophon__section">
    <h2 class="colophon__section-title">{props.title}</h2>
    {props.children}
  </section>
);

const TechList = (props: { items: { label: string; value: string }[] }) => (
  <ul class="colophon__list">
    {props.items.map((item) => (
      <li class="colophon__list-item">
        <span class="colophon__list-label">{item.label}:</span>
        <span class="colophon__list-value">{item.value}</span>
      </li>
    ))}
  </ul>
);

export default function ColophonPage() {
  return (
    <Layout back={{ href: "/", label: "home" }}>
      <Title>Colophon — Tom Materne</Title>
      <Meta name="description" content="How this site was made. Technology, typography, and design philosophy." />

      <article class="colophon">

        <header class="colophon__header">
          <h1 class="colophon__title">Colophon</h1>
        </header>

        <hr class="colophon__divider" />

        <div class="colophon__content">
          <Section title="How This Site Was Made">
            <p>
              This site is built with SolidStart and hand-crafted CSS.
              No frameworks, no component libraries—just intentional
              design decisions.
            </p>
          </Section>

          <Section title="Technology">
            <TechList
              items={[
                { label: "Framework", value: "SolidStart" },
                { label: "Runtime", value: "Bun" },
                { label: "Styling", value: "Vanilla CSS with custom properties" },
                { label: "Hosting", value: "Cloudflare Pages" },
              ]}
            />
          </Section>

          <Section title="Typography">
            <TechList
              items={[
                { label: "Display", value: "Fraunces (currently using Georgia as fallback)" },
                { label: "Body", value: "IBM Plex Sans (currently using system fonts)" },
              ]}
            />
          </Section>

          <Section title="Design Philosophy">
            <p>
              This site is intentionally sparse. It's a gallery, not a
              showcase of technical prowess. Every element earns its place.
            </p>
            <p>
              The grain texture is inspired by analog photography and aged
              paper. The warm color palette evokes darkroom prints.
            </p>
          </Section>

          <Section title="Credits">
            <p>Built with love and Claude.</p>
          </Section>

          <Section title="Source">
            <p>
              View the source on GitHub:{" "}
              <a
                href="https://github.com/f0rbit/thomas-materne"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/f0rbit/thomas-materne
              </a>
            </p>
          </Section>
        </div>
      </article>
    </Layout>
  );
}

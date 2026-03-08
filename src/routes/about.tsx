import { Title, Meta } from "@solidjs/meta";
import { For, Show } from "solid-js";
import Layout from "~/components/layout/Layout";
import { JourneyTimeline } from "~/components/about/JourneyTimeline";
import { hobbies } from "~/data/journey";
import { externalLinks, email } from "~/data/links";

export default function About() {
  return (
    <Layout back={{ href: "/", label: "home" }}>
      <Title>About — Tom Materne</Title>
      <Meta name="description" content="Software Development Engineer at Amazon. Brisbane, Australia. Building at the intersection of technology and human experience." />
      
      <article class="page">
        {/* Hero */}
        <header class="about-hero">
          <h1 class="home-name">THOMAS MATERNE</h1>
        </header>
        
        {/* Professional Summary */}
        <div class="about-summary">
          <p class="about-role">Software Development Engineer at Amazon</p>
          <p class="about-location">Brisbane, Australia</p>
        </div>
        
        <hr class="divider" />
        
        {/* Philosophy */}
        <div class="about-philosophy">
          <blockquote>
            I believe software can be art, and art can be functional. I'm interested in tools that help people think, systems that encourage curiosity, and experiences that linger.
          </blockquote>
        </div>
        
        <hr class="divider" />
        
        {/* Journey Timeline */}
        <JourneyTimeline />
        
        <hr class="divider" />
        
        {/* Properties */}
        <section class="about-properties">
          <div class="property-item">
            <a href="https://thomas-materne.com" class="property-name">The Gallery</a>
            <p class="property-desc">Finished work, presented with quiet confidence</p>
          </div>
          <div class="property-item">
            <a href="https://forbit.dev" class="property-name">The Workshop</a>
            <p class="property-desc">Technical writing, experiments, learning in public</p>
          </div>
          <div class="property-item">
            <a href="https://blends.blog" class="property-name">The Journal</a>
            <p class="property-desc">Music, art, cafe reviews, personal reflections</p>
          </div>
        </section>
        
        <hr class="divider" />
        
        {/* Hobbies */}
        <section class="hobbies-section">
          <h2 class="section-title">Outside of Code</h2>
          <div class="hobbies-grid">
            <For each={hobbies}>
              {(hobby) => (
                <Show when={hobby.url} fallback={<span class="hobby-item hobby-item--no-link">{hobby.name}</span>}>
                  <a href={hobby.url} class="hobby-item" target="_blank" rel="noopener noreferrer">{hobby.name}</a>
                </Show>
              )}
            </For>
          </div>
        </section>
        
        <hr class="divider" />
        
        {/* Elsewhere */}
        <section class="elsewhere-section">
          <h2 class="section-title">Elsewhere</h2>
          <div class="elsewhere-links">
            <For each={externalLinks}>
              {(link) => <a href={link.href} class="elsewhere-link" target="_blank" rel="noopener noreferrer">{link.label}</a>}
            </For>
            <a href={`mailto:${email}`} class="elsewhere-link">{email}</a>
          </div>
        </section>
      </article>
    </Layout>
  );
}

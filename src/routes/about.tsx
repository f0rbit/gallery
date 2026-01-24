import { Title, Meta } from "@solidjs/meta";
import Layout from "~/components/layout/Layout";
import { JourneyTimeline } from "~/components/about/JourneyTimeline";

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
        
        {/* Contact - minimal */}
        <section class="elsewhere-section">
          <a href="mailto:tom@thomas-materne.com" class="elsewhere-link">
            tom@thomas-materne.com
          </a>
        </section>
      </article>
    </Layout>
  );
}

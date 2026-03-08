import { For, Show } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import Layout from "~/components/layout/Layout";
import { usesData } from "~/data/uses";

export default function Uses() {
  return (
    <Layout back={{ href: "/", label: "home" }}>
      <Title>Uses — Tom Materne</Title>
      <Meta name="description" content="Hardware, software, and tools I use for development." />

      <article class="page">
        <header class="page-header">
          <h1 class="page-title">Uses</h1>
          <p class="page-subtitle">Tools, software, and hardware I use daily</p>
        </header>

        <hr class="divider" />

        <For each={usesData}>
          {(category) => (
            <section class="uses-category">
              <h2 class="section-title">{category.title}</h2>
              <ul class="uses-list">
                <For each={category.items}>
                  {(item) => (
                    <li class="uses-item">
                      <Show when={item.url} fallback={
                        <span class="uses-name">{item.name}</span>
                      }>
                        <a href={item.url} class="uses-name uses-link" target="_blank" rel="noopener noreferrer">
                          {item.name}
                        </a>
                      </Show>
                      <Show when={item.description}>
                        <span class="uses-desc">— {item.description}</span>
                      </Show>
                    </li>
                  )}
                </For>
              </ul>
            </section>
          )}
        </For>
      </article>
    </Layout>
  );
}

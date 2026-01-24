import { Component, For, Show } from "solid-js";

type Props = {
  features: string[];
};

export const ProjectFeatures: Component<Props> = (props) => {
  return (
    <Show when={props.features.length > 0}>
      <section class="project-features">
        <h3 class="section-title">Key Features</h3>
        <ul class="features-list">
          <For each={props.features}>
            {(feature) => <li class="feature-item">{feature}</li>}
          </For>
        </ul>
      </section>
    </Show>
  );
};

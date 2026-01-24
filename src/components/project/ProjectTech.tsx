import { Component, For, Show } from "solid-js";
import { Badge } from "@f0rbit/ui";

type Props = {
  techStack: string[];
  links?: {
    live?: string;
    github?: string;
    docs?: string;
    blog?: string;
  };
};

export const ProjectTech: Component<Props> = (props) => {
  const linkItems = () => {
    const items: Array<{ label: string; href: string }> = [];
    if (props.links?.live) items.push({ label: "Live Site", href: props.links.live });
    if (props.links?.github) items.push({ label: "GitHub", href: props.links.github });
    if (props.links?.docs) items.push({ label: "Documentation", href: props.links.docs });
    if (props.links?.blog) items.push({ label: "Read More", href: props.links.blog });
    return items;
  };

  return (
    <section class="project-tech">
      <Show when={props.techStack.length > 0}>
        <div class="tech-stack">
          <h3 class="section-title">Built With</h3>
          <div class="tech-badges">
            <For each={props.techStack}>{(tech) => <Badge>{tech}</Badge>}</For>
          </div>
        </div>
      </Show>

      <Show when={linkItems().length > 0}>
        <div class="project-links">
          <For each={linkItems()}>
            {(link) => (
              <a
                href={link.href}
                class="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} →
              </a>
            )}
          </For>
        </div>
      </Show>
    </section>
  );
};

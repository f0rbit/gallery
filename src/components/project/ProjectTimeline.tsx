import { Component, Show } from "solid-js";
import { Timeline } from "@f0rbit/ui";
import type { TimelineItem } from "~/data/project-content";

type Props = {
  items: TimelineItem[];
};

export const ProjectTimeline: Component<Props> = (props) => {
  const timelineItems = () =>
    props.items.map((item, index) => ({
      id: index,
      title: item.title,
      timestamp: item.date,
      description: item.description,
    }));

  return (
    <Show when={props.items.length > 0}>
      <section class="project-timeline">
        <h3 class="section-title">Timeline</h3>
        <Timeline items={timelineItems()} />
      </section>
    </Show>
  );
};

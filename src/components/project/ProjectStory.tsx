import { Component, For } from "solid-js";

type StorySection = {
  title: string;
  content: string;
};

type Props = {
  origin: string;
  problem: string;
  approach: string;
  growth: string;
};

export const ProjectStory: Component<Props> = (props) => {
  const sections: StorySection[] = [
    { title: "Origin", content: props.origin },
    { title: "The Problem", content: props.problem },
    { title: "The Approach", content: props.approach },
    { title: "Growth", content: props.growth },
  ];

  return (
    <div class="project-story">
      <For each={sections}>
        {(section) => (
          <section class="story-section">
            <h3 class="story-title">{section.title}</h3>
            <p class="story-content">{section.content}</p>
          </section>
        )}
      </For>
    </div>
  );
};

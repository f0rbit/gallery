import { Component, createMemo } from "solid-js";
import { Timeline } from "@f0rbit/ui";
import { getJourneyEntries, formatDateRange } from "~/data/journey";

export const JourneyTimeline: Component = () => {
  const entries = createMemo(() => getJourneyEntries());

  const timelineItems = createMemo(() => 
    entries().map((entry, index) => ({
      id: index,
      title: entry.title,
      timestamp: formatDateRange(entry),
      description: entry.organization 
        ? `${entry.organization} — ${entry.description}`
        : entry.description,
    }))
  );

  return (
    <section class="journey-section">
      <h2 class="section-title">The Journey</h2>
      <div class="journey-timeline">
        <Timeline items={timelineItems()} />
      </div>
    </section>
  );
};

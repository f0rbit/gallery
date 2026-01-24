export type { ProjectContent, TimelineItem } from "./types";

import { corpusContent } from "./corpus";
import { devpadContent } from "./devpad";
import { chamberContent } from "./chamber";
import type { ProjectContent } from "./types";

const projectContentMap: Record<string, ProjectContent> = {
  corpus: corpusContent,
  devpad: devpadContent,
  chamber: chamberContent,
};

export function getProjectContent(slug: string): ProjectContent | undefined {
  return projectContentMap[slug];
}

export function hasProjectContent(slug: string): boolean {
  return slug in projectContentMap;
}

export { corpusContent, devpadContent, chamberContent };

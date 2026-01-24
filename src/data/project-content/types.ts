export type TimelineItem = {
  date: string;
  title: string;
  description?: string;
};

export type ProjectContent = {
  origin: string;
  problem: string;
  approach: string;
  growth: string;

  features?: string[];
  techStack?: string[];
  timeline?: TimelineItem[];
  links?: {
    live?: string;
    github?: string;
    docs?: string;
    blog?: string;
  };
};

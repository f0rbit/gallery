export type JourneyCategory = "learning" | "professional" | "hobby";

export type JourneyEntry = {
  id: string;
  startDate: string;        // Format: "YYYY-MM" or "YYYY"
  endDate?: string;         // Format: "YYYY-MM" or "YYYY" or undefined for ongoing
  title: string;
  category: JourneyCategory;
  organization?: string;    // Company, school, etc.
  description: string;
  skills?: string[];        // Related skills/technologies
};

export const journeyEntries: JourneyEntry[] = [
  {
    id: "scratch",
    startDate: "2011",
    endDate: "2016",
    title: "Scratch",
    category: "learning",
    description: "First steps into programming. Scratch was installed on every computer at school, and I was instantly obsessed with creating interactive projects.",
    skills: ["Scratch"],
  },
  {
    id: "gamemaker",
    startDate: "2016",
    endDate: "2018",
    title: "GameMaker",
    category: "learning",
    description: "Transitioned from Scratch's block-based programming to GameMaker's scripting language. Created small games for friends, discovering that programming was genuinely enjoyable.",
    skills: ["GameMaker", "GML"],
  },
  {
    id: "minecraft-plugins",
    startDate: "2017",
    endDate: "2019",
    title: "Minecraft Plugins",
    category: "learning",
    description: "Built a dungeon-crawler within Minecraft using plugins. Started with configuration, then created custom plugins—my first steps with Java, a 'real' programming language.",
    skills: ["Java", "Deployment"],
  },
  {
    id: "game-dev",
    startDate: "2018",
    endDate: "2022",
    title: "Game Development",
    category: "hobby",
    description: "Published games on itch.io, with one reaching 50,000 plays. Learned the discipline of finishing projects despite 'shiny object syndrome'. Each game was cleaner than the last.",
    skills: ["GameMaker", "Java", "Game Design"],
  },
  {
    id: "mcdonalds",
    startDate: "2019-02",
    endDate: "2022-07",
    title: "McDonald's",
    category: "professional",
    organization: "McDonald's",
    description: "Worked through school and early university. Attained Crew Trainer role, developing coaching skills that complemented my badminton coaching. Built lifelong friendships.",
    skills: ["Leadership", "Coaching"],
  },
  {
    id: "badminton-coach",
    startDate: "2021-01",
    endDate: "2022-12",
    title: "Badminton Coach",
    category: "professional",
    description: "Coached 8 school badminton teams at competitive level. Developed leadership skills in a completely different context from programming.",
    skills: ["Leadership", "Coaching"],
  },
  {
    id: "university",
    startDate: "2021-02",
    endDate: "2024-11",
    title: "University",
    category: "learning",
    organization: "University of Adelaide",
    description: "Bachelor of Computer Science. Formalized programming knowledge and gained deeper understanding of fundamentals. Grew confident in picking up any new language within a day.",
    skills: ["Computer Science", "Algorithms"],
  },
  {
    id: "web-dev",
    startDate: "2021-06",
    title: "Web Development",
    category: "hobby",
    description: "Fell in love with the web platform. Started learning front-end to complement backend skills, and it became my favorite area of programming.",
    skills: ["HTML", "CSS", "JavaScript", "React", "SolidJS"],
  },
  {
    id: "mastering-java",
    startDate: "2021-06",
    endDate: "2022-05",
    title: "Mastering Java",
    category: "hobby",
    description: "Created gm-server, a Java library for GameMaker multiplayer games. First experience with open-source workflow and deploying a library for others to use.",
    skills: ["Java", "Deployment", "Open Source"],
  },
  {
    id: "database-engineer",
    startDate: "2021-10",
    endDate: "2022-04",
    title: "Database Engineer",
    category: "professional",
    organization: "Magazine Company",
    description: "First tech job. Migrated subscriber data from Excel spreadsheets to a proper SQL database, combining data from multiple internal sources.",
    skills: ["SQL", "Data Migration"],
  },
  {
    id: "hive-aid",
    startDate: "2022-06",
    endDate: "2025-04",
    title: "Software Developer",
    category: "professional",
    organization: "HIVE AID",
    description: "Learned PHP in two weeks for this role. Pushed code to production in my first week. Worked with vanilla PHP and JavaScript—no frameworks, hand-rolled solutions for everything.",
    skills: ["PHP", "JavaScript", "SQL", "Deployment", "Agile"],
  },
  {
    id: "amazon",
    startDate: "2025-04",
    title: "Software Development Engineer",
    category: "professional",
    organization: "Amazon",
    description: "Graduate SDE role in Brisbane, working on grocery logistics systems. Building distributed systems at meaningful scale with a team of 12, primarily using Java and React.",
    skills: ["Java", "AWS", "React", "TypeScript", "Distributed Systems"],
  },
];

/**
 * Get all journey entries sorted by start date (most recent first)
 */
export function getJourneyEntries(): JourneyEntry[] {
  return [...journeyEntries].sort((a, b) => {
    const dateA = a.startDate;
    const dateB = b.startDate;
    return dateB.localeCompare(dateA);
  });
}

/**
 * Get journey entries by category
 */
export function getJourneyByCategory(category: JourneyCategory): JourneyEntry[] {
  return getJourneyEntries().filter(entry => entry.category === category);
}

/**
 * Format date range for display
 */
export function formatDateRange(entry: JourneyEntry): string {
  const formatDate = (date: string) => {
    if (date.length === 4) return date; // Just year
    const [year, month] = date.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const start = formatDate(entry.startDate);
  const end = entry.endDate ? formatDate(entry.endDate) : "Present";
  
  return `${start} — ${end}`;
}

/**
 * Calculate duration in years (approximate)
 */
export function calculateDuration(entry: JourneyEntry): string {
  const parseDate = (date: string): Date => {
    if (date.length === 4) return new Date(parseInt(date), 0, 1);
    const [year, month] = date.split("-");
    return new Date(parseInt(year), parseInt(month) - 1, 1);
  };

  const start = parseDate(entry.startDate);
  const end = entry.endDate ? parseDate(entry.endDate) : new Date();
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  
  if (months < 12) {
    return `${months} month${months !== 1 ? "s" : ""}`;
  }
  
  const years = Math.round(months / 12);
  return `${years} year${years !== 1 ? "s" : ""}`;
}

// Current focus items for the "Now" context
export const currentFocus = {
  building: [
    { name: "Chamber v2", description: "Adding historical context and improved summarization" },
    { name: "mycelia", description: "Framework for interconnected digital gardens" },
    { name: "devpad", description: "Shipping to devpad.tools, daily driver for project tracking" },
  ],
  exploring: [
    "Photographic study on flowers—bloom, decay, the passage of time",
    "Atmospheric game design research for first serious game project",
  ],
};

// Hobbies for about page
export const hobbies = [
  { name: "Photography", url: "https://www.flickr.com/tmaterne/" },
  { name: "Painting", url: "https://pin.it/6j3Ka81sa" },
  { name: "Music", url: "https://blends.blog/music" },
  { name: "Badminton" },
];

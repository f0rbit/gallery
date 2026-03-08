export type UsesItem = {
  name: string;
  description?: string;
  url?: string;
  /** Link to dotfiles config — added when dotfiles repo goes public */
  configUrl?: string;
};

export type UsesCategory = {
  title: string;
  items: UsesItem[];
};

export const usesData: UsesCategory[] = [
  {
    title: "Hardware",
    items: [
      { name: "MacBook Air M2", description: "Daily driver" },
      { name: "Linux VPS x2", description: "Hosting and CI" },
      { name: "iPhone 15" },
      { name: "Apple Watch" },
    ],
  },
  {
    title: "Editor & Terminal",
    items: [
      { name: "Neovim", description: "Primary editor", url: "https://neovim.io" },
      { name: "Zed", description: "Secondary editor", url: "https://zed.dev" },
      { name: "Ghostty", description: "Terminal emulator", url: "https://ghostty.org" },
      { name: "tmux", description: "Multiplexer with custom sessionizer" },
      { name: "Fish", description: "Shell" },
      { name: "JetBrains Mono", description: "Editor and terminal font", url: "https://www.jetbrains.com/lp/mono/" },
      { name: "Tokyo Night", description: "Theme, everywhere" },
    ],
  },
  {
    title: "CLI Tools",
    items: [
      { name: "yazi", description: "File manager", url: "https://yazi-rs.github.io" },
      { name: "gitui", description: "Git TUI", url: "https://github.com/extrawurst/gitui" },
      { name: "git-delta", description: "Syntax-highlighted diffs", url: "https://github.com/dandavison/delta" },
      { name: "fzf", description: "Fuzzy finder", url: "https://github.com/junegunn/fzf" },
      { name: "zoxide", description: "Smarter cd", url: "https://github.com/ajeetdsouza/zoxide" },
      { name: "eza", description: "Modern ls", url: "https://eza.rocks" },
      { name: "bat", description: "cat with wings", url: "https://github.com/sharkdp/bat" },
      { name: "fd", description: "Modern find", url: "https://github.com/sharkdp/fd" },
      { name: "ripgrep", description: "Fast grep", url: "https://github.com/BurntSushi/ripgrep" },
      { name: "btop", description: "System monitor", url: "https://github.com/aristocratos/btop" },
      { name: "tokei", description: "Code statistics", url: "https://github.com/XAMPPRocky/tokei" },
    ],
  },
  {
    title: "macOS",
    items: [
      { name: "Aerospace", description: "Tiling window manager", url: "https://github.com/nikitabobko/AeroSpace" },
      { name: "Sketchybar", description: "Custom status bar", url: "https://github.com/FelixKratz/SketchyBar" },
      { name: "Zen Browser", description: "Primary browser", url: "https://zen-browser.app" },
      { name: "Obsidian", description: "Notes and thinking", url: "https://obsidian.md" },
      { name: "Apple Music", description: "Tunes" },
    ],
  },
  {
    title: "Tech Stack",
    items: [
      { name: "TypeScript", description: "Primary language" },
      { name: "Bun", description: "Runtime, bundler, test runner", url: "https://bun.sh" },
      { name: "SolidJS", description: "UI framework of choice", url: "https://www.solidjs.com" },
      { name: "Astro", description: "Content sites", url: "https://astro.build" },
      { name: "Drizzle ORM", description: "Database toolkit", url: "https://orm.drizzle.team" },
      { name: "Cloudflare", description: "Workers, D1, Pages, R2", url: "https://developers.cloudflare.com" },
      { name: "Hono", description: "Web framework for Workers", url: "https://hono.dev" },
      { name: "Zod", description: "Schema validation", url: "https://zod.dev" },
      { name: "Biome", description: "Linter and formatter", url: "https://biomejs.dev" },
    ],
  },
  {
    title: "Own Libraries",
    items: [
      { name: "@f0rbit/corpus", description: "Functional error handling and snapshotting", url: "https://github.com/f0rbit/corpus" },
      { name: "@f0rbit/ui", description: "SolidJS component library", url: "https://github.com/f0rbit/ui" },
    ],
  },
  {
    title: "AI",
    items: [
      { name: "OpenCode", description: "AI coding assistant", url: "https://opencode.ai" },
    ],
  },
  {
    title: "Dotfiles",
    items: [
      {
        name: "Managed configs",
        description: "fish, tmux, nvim, ghostty, bat, btop, yazi, gitui, aerospace, sketchybar, glow, git, raycast, opencode",
      },
    ],
  },
];

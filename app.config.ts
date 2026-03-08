import { defineConfig } from "@solidjs/start/config";
import { projectConfig } from "./src/data/project-config";

const projectSlugs = Object.keys(projectConfig);

export default defineConfig({
  server: {
    preset: "static",
    prerender: {
      routes: [
        "/",
        "/about",
        "/now",
        "/uses",
        ...projectSlugs.map(s => `/projects/${s}`),
      ],
    },
  },
});

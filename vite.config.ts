import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const GRAPHQL_API_URL =
  process.env.VITE_GRAPHQL_API_URL ||
  "https://exostotic-unreprievable-clyde.ngrok-free.dev";

const config = defineConfig({
  plugins: [
    devtools({ eventBusConfig: { port: 42070 } }),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
  server: {
    allowedHosts: ["lynnette-shrewish-leopoldo.ngrok-free.dev"],
    port: 3001,
    proxy: {
      "/graphql": {
        target: GRAPHQL_API_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

export default config;

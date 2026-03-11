import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // We point to your backend URL and include the ngrok header
  schema: [
    {
      // "https://lyndsey-overtenacious-unthickly.ngrok-free.dev/graphql"
      "https://exostotic-unreprievable-clyde.ngrok-free.dev/graphql": {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      },
    },
  ],
  // This tells codegen where to find your queries
  documents: ["src/graphql/**/*.ts", "!src/graphql/generated/**/*"],
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
      config: {
        useTypeImports: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;

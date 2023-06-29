import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";
import sanityConfig from "./sanity/config";

const config = defineConfig({
  ...sanityConfig,
  title: "SwiftCart",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});

export default config;

import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sanity({
    projectId: 'etgrd1n2',
    dataset: 'production',
    apiVersion: '2023-02-22',
    useCdn: false
  })]
});
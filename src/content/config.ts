import { defineCollection, z } from "astro:content";

const experience = defineCollection({
  type: "content",
  schema: z.object({
    visible: z.boolean().default(true),
    company: z.string(),
    homepage: z.string().optional(),
    position: z.string(),
    location: z.string(),
    date: z.string(),
  }),
});

const project = defineCollection({
  type: "content",
  schema: z.object({
    visible: z.boolean().default(true),
    title: z.string(),
    homepage: z.string().optional(),
    repository: z.string().optional(),
  }),
});

export const collections = { experience, project };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(60),
    slug: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).max(5),
    coverImage: z.string(),
    summary: z.string().max(160),
    published: z.boolean().default(true),
    author: z.string(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    price: z.number(),
    category: z.string(),
    material: z.string(),
    dimensions: z.string().optional(),
    images: z.array(z.string()),
    inStock: z.boolean().default(true),
    featured: z.boolean().default(false),
    description: z.string(),
  }),
});

export const collections = { blog, products };

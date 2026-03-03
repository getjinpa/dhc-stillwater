import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    title:       z.string(),
    subtitle:    z.string().optional(),
    description: z.string(),
    image:       z.string().optional(),
    image_alt:   z.string().optional(),
    level:       z.enum(['beginner', 'all-levels', 'intermediate', 'advanced']).default('all-levels'),
    format:      z.string().optional(),
    schedule:    z.string().optional(),
    duration:    z.string().optional(),
    price:       z.string().optional(),
    featured:    z.boolean().default(false),
    order:       z.number().default(99),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    image:       z.string().optional(),
    date:        z.coerce.date(),
    end_date:    z.coerce.date().optional(),
    location:    z.string().default('Stillwater Dharma Center'),
    type:        z.enum(['retreat', 'workshop', 'talk', 'sitting', 'study']).default('workshop'),
    price:       z.string().optional(),
    register_url: z.string().optional(),
    featured:    z.boolean().default(false),
  }),
});

export const collections = { programs, events };

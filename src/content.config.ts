import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const personne = defineCollection({
  loader: glob({ base: "src/data/personne", pattern: "**/*.md" }),
  schema: z.object({
    nom: z.string(),
    lieuNaissance: z.string(),
    dateNaissance: z.date(),
    dateDeces: z.date().optional(),
    lieuDeces: z.string().optional(),
    nationalite: z.string(),
    profession: z
      .array(
        z.enum([
          "acteur",
          "réalisateur",
          "scénariste",
          "producteur",
          "compositeur",
        ])
      )
      .optional(),
  }),
});

export const collections = { personne };

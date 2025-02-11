import { z } from "zod";

const filmSchema = z.object({
  titre: z.string(),
  dateSortie: z.string(),
  synopsis: z.string(),
  langue: z.string(),
  duree: z.string(),
  realisateur: z.string().optional(),
  scenaristes: z.array(z.string()).optional(),
  roles: z
    .array(
      z.object({
        acteur: z.string(),
        personnage: z.string(),
      })
    )
    .optional(),
});

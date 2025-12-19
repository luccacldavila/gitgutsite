import { z } from "zod";

export const GameSchema = z.object({
  name: z.string(),
  logo: z.string().url(),
});

export type Game = z.infer<typeof GameSchema>;

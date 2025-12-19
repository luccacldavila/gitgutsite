import { z } from "zod"


// A single game tag
export const GameTagSchema = z.object({
    tagid: z.int(),
    name: z.string(),
})

export type GameTag = z.infer<typeof GameTagSchema>

// An array of game tags
export const GameTagsSchema = z.array(GameTagSchema)
export type GameTags = z.infer<typeof GameTagsSchema>
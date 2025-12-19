import { GameTags, GameTagsSchema } from "../../entities/game-tags/schemas";
import { Game, GameSchema } from "../../entities/game/schemas";
import { GITGUT_API_CONFIG } from "./config";

export class GitgutApiClient {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = GITGUT_API_CONFIG.baseUrl ?? "http://localhost:3001";
  }

  async getTags(): Promise<GameTags> {
    const response = await fetch(`${this.baseUrl}/games/genres`, {
      next: {
        tags: ["game-tags"],
      },
    });
    const data = await response.json();
    const result = GameTagsSchema.safeParse(data);
    if (!result.success) {
      throw new Error(result.error.message);
    }
    return result.data;
  }

  async getGamesByTag(tags: string[]): Promise<Game[]> {
    const response = await fetch(`${this.baseUrl}/games`, {
      method: "POST",
      body: JSON.stringify({ tags: tags.map((tag) => tag.toLowerCase()) }),
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["games-by-tags"],
      },
    });
    const data = await response.json();
    return data;
  }
}

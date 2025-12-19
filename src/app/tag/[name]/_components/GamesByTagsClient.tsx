import { Game } from "@/shared/api/entities/game/schemas";
import { GameCard } from "@/widgets/game-card";

export function GamesByTagsClient({ games }: { games: Game[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-center">
      {games.map((game) => (
        <GameCard key={game.name} game={game} />
      ))}
    </div>
  );
}

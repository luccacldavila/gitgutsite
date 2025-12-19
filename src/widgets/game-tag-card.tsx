import { GameTag } from "@/shared/api/entities/game-tags/schemas";
import Link from "next/link";

export function GameTagCard({ tag }: { tag: GameTag }) {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-md p-1 cursor-pointer hover:bg-gray-100 transition-all duration-300">
      <Link
        href={`/tag/${tag.name.toLocaleLowerCase()}`}
        className="text-xs font-medium"
      >
        {tag.name}
      </Link>
    </div>
  );
}

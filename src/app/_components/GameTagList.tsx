import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { GameTag } from "@/shared/api/entities/game-tags/schemas";
import { useArrayFilter } from "@/shared/hooks/use-array-filter";
import { GameTagCard } from "@/widgets/game-tag-card";

export function GameTagList({ tags }: { tags: GameTag[] }) {
  const { filteredArray, setSearchValue, searchValue } =
    useArrayFilter<GameTag>({
      array: tags,
      config: { keys: ["name"], threshold: 0.2 },
    });

  return (
    <div className="flex flex-col items-start justify-center">
      <Accordion type="single" collapsible>
        <AccordionItem value="tags">
          <AccordionTrigger>Game Genres</AccordionTrigger>
          <AccordionContent className="flex flex-col items-start justify-center gap-4">
            <Input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="max-w-xs"
            />
            <div className="flex flex-row flex-wrap items-center gap-3">
              {filteredArray.map((genre: GameTag) => (
                <GameTagCard key={genre.tagid} tag={genre} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

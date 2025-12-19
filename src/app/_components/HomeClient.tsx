"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useEffect, useState } from "react";

import Fuse, { FuseResult } from "fuse.js";
import { Input } from "@/components/ui/input";
import { useArrayFilter } from "@/shared/hooks/use-array-filter";
import { GameTag, GameTags } from "@/shared/api/entities/game-tags/schemas";
import { GameTagCard } from "@/widgets/game-tag-card";
import { GameTagList } from "./GameTagList";

export default function HomeClient({ genres }: { genres: GameTags }) {
  const { filteredArray, setSearchValue, searchValue } =
    useArrayFilter<GameTag>({
      array: genres,
      config: { keys: ["name"], threshold: 0.2 },
    });

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div>
          <h1 className="text-4xl font-bold" key="gitgutsite-title">
            Gitgutsite
          </h1>
          <GameTagList tags={genres} />
        </div>
      </main>
    </div>
  );
}

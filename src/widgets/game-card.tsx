"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Game } from "@/shared/api/entities/game/schemas";
import Image from "next/image";

export function GameCard({ game }: { game: Game }) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{game.name}</CardTitle>
          {/* <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <CardContent>
          <Image
            src={game.logo}
            alt={game.name}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

"use server";

import { GitgutApiClient } from "@/shared/api/clients/gitgut-api-client";
import { GamesByTagsClient } from "./GamesByTagsClient";

export default async function GamesByTagsLoader({ name }: { name: string }) {
  const gitgutApiClient = new GitgutApiClient();
  const games = await gitgutApiClient.getGamesByTag([name]);
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1 className="text-4xl font-bold">{name} Games</h1>
        <GamesByTagsClient games={games} />
      </main>
    </div>
  );
}

"use server";

import { GitgutApiClient } from "@/shared/api/clients/gitgut-api-client";
import GamesByTagsLoader from "./_components/GamesByTagsLoader";
import { Suspense } from "react";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const processedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GamesByTagsLoader name={processedName} />
    </Suspense>
  );
}

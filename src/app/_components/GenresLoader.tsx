"use server"

import { GitgutApiClient } from "@/shared/api/clients/gitgut-api-client";
import HomeClient from "./HomeClient";

export default async function GenresLoader() {
  const gitgutApiClient = new GitgutApiClient();
  const tags = await gitgutApiClient.getTags();
  return <HomeClient genres={tags} />;
}
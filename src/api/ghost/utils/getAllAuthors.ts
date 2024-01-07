import type { AuthorType } from "@/types"
import { getGhostData } from "../getGhostData"

export const getAllAuthors = async () => {
  const authors: Awaited<AuthorType[]> = await getGhostData("authors")
  return authors
}

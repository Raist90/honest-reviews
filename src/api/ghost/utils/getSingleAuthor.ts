import { AuthorType } from "@/types"
import { getGhostData } from "../getGhostData"

export const getSingleAuthor = async (slug: string) => {
  const authors: Awaited<AuthorType[]> = await getGhostData("singleAuthor", slug)
  return authors[0]
}

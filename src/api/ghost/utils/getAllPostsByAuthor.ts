import type { PostType } from "@/types"
import { getGhostData } from "../getGhostData"

export const getAllPostsByAuthor = async (slug: string) => {
  const posts: Awaited<PostType[]> = await getGhostData("allPostsByAuthor", slug)
  return posts
}

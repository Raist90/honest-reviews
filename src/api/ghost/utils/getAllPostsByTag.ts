import type { PostType } from "@/types"
import { getGhostData } from "../getGhostData"

export const getAllPostsByTag = async (slug: string) => {
  const posts: Awaited<PostType[]> = await getGhostData("allPostsByTag", slug)
  return posts
}

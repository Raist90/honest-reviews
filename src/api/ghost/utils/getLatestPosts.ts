import type { PostType } from "@/types"
import { getGhostData } from "../getGhostData"

export const getLatestPosts = async (slug: string) => {
  const latestPosts: Awaited<PostType[]> = await getGhostData("latestPosts", slug)
  return latestPosts.filter((post) => post.slug !== slug).slice(0, 3)
}

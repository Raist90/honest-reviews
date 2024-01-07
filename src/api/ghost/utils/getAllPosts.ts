import type { PostType } from "@/types"
import { getGhostData } from "../getGhostData"

export const getAllPosts = async () => {
  const posts: Awaited<PostType[]> = await getGhostData("posts")
  return posts
}

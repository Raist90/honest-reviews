import type { PostType } from "@/types"
import { getGhostData } from "../getGhostData"

export const getSinglePost = async (slug: string) => {
  const singlePost: Awaited<PostType[]> = await getGhostData("singlePost", slug)
  return singlePost[0]
}

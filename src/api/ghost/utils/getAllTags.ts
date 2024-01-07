import type { TagType } from "@/types"
import { getGhostData } from "../getGhostData"

export const getAllTags = async () => {
  const tags: Awaited<TagType[]> = await getGhostData("tags")
  return tags
}

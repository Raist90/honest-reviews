import type { TagType } from "@/types"
import { getGhostData } from "../getGhostData"

export const getSingleTag = async (slug: string) => {
  const tags: Awaited<TagType[]> = await getGhostData("singleTag", slug)
  return tags[0]
}

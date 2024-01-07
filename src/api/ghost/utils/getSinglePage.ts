import type { PageType } from "@/types"
import { getGhostData } from "../getGhostData"

export const getSinglePage = async (slug: string) => {
  const pages: Awaited<PageType[]> = await getGhostData("singlePage", slug)
  return pages[0]
}

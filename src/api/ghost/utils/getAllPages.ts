import type { PageType } from "@/types"
import { getGhostData } from "../getGhostData"

export const getAllPages = async () => {
  const pages: Awaited<PageType[]> = await getGhostData("pages")
  return pages
}

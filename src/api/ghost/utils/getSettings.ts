import type { SettingsType } from "@/types";
import { getGhostData } from "../getGhostData"

export const getSettings = async () => {
  const settings: Awaited<SettingsType> = await getGhostData("settings");
  return settings
}

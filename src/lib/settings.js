import api from "./utils/api";

export async function getSettings() {
  return await api.settings
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

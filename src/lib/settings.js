//todo: i will delete this because maybe i dont need dynamic menus
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

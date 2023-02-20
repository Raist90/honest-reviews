import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "3bc22483b46927279c9b136024",
  version: "v5.0",
});

export default api;

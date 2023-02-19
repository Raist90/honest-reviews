import api from "./utils/ghost-api";

export async function getPages() {
  return await api.pages
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePage(pageSlug) {
  return await api.pages
    .read({
      slug: pageSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

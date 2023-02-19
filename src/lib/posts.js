import api from "./utils/ghost-api";

export async function getPosts() {
  return await api.posts
    .browse({
      include: "tags, authors",
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

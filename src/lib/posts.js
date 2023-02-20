import api from "./utils/api";

export async function getPosts() {
  return await api.posts
    .browse({
      include: "authors,tags",
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
      include: "authors,tags",
    })
    .catch((err) => {
      console.error(err);
    });
}

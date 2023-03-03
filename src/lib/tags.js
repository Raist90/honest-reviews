import api from "./utils/api";

export async function getAllTags() {
  return await api.tags
    .browse({
      include: "count.posts",
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getTag(tagSlug) {
  return await api.tags
    .read({
      slug: tagSlug,
      include: "count.posts",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getAllPostsByTagSlug(slug) {
  const posts = await api.posts.browse({
    limit: "all",
    include: "authors,tags",
    filter: `tag:${slug}`,
  });
  return posts;
}

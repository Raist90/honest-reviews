import api from "./utils/api";

export async function getAllAuthors() {
  return await api.authors
    .browse({
      include: "count.posts",
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getAuthor(authorSlug) {
  return await api.authors
    .read({
      slug: authorSlug,
      include: "count.posts",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getAllPostsByAuthorSlug(slug) {
  const posts = await api.posts.browse({
    limit: "all",
    include: "authors,tags",
    filter: `author:${slug}`,
  });
  return posts;
}

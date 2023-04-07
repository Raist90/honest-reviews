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

export async function getLatestPosts(currentPostSlug) {
  const posts = await api.posts
    .browse({
      include: "authors,tags",
      limit: 4, // retrieve 4 posts to ensure at least 3 non-current posts
    })
    .catch((err) => {
      console.error(err);
    });

  // Filter out the current post
  const latestPosts = posts.filter((post) => post.slug !== currentPostSlug);

  // Return the latest 3 posts (or fewer, if there are fewer than 3 non-current posts)
  return latestPosts.slice(0, 3);
}
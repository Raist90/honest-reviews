export const routeMapper = (input: string, slug: string) => {
  const routeList = {
    authors: {
      route: "authors",
      options: "&include=count.posts&limit=all",
      data: "authors",
    },
    singleAuthor: {
      route: `authors/slug/${slug}`,
      options: "&include=count.posts",
      data: "authors",
    },
    allPostsByAuthor: {
      route: "posts",
      options: `&include=authors,tags&limit=all&filter=author:${slug}`,
      data: "posts",
    },
    posts: {
      route: "posts",
      options: "&include=tags,authors",
      data: "posts",
    },
    singlePost: {
      route: `posts/slug/${slug}`,
      options: `&include=tags,authors`,
      data: "posts",
    },
    latestPosts: {
      route: "posts",
      options: `&include=tags,authors&limit=4`,
      data: "posts",
    },
    settings: {
      route: "settings",
      options: "&limit=all",
      data: "settings",
    },
    pages: {
      route: "pages",
      options: `&limit=all`,
      data: "pages",
    },
    singlePage: {
      route: `pages/slug/${slug}`,
      options: `&slug=${slug}`,
      data: "pages",
    },
    tags: {
      route: "tags",
      options: "&include=count.posts&limit=all",
      data: "tags",
    },
    singleTag: {
      route: `tags/slug/${slug}`,
      options: `&include=authors,tags&filter=tag:${slug}`,
      data: "tags",
    },
    allPostsByTag: {
      route: "posts",
      options: `&include=authors,tags&limit=all&filter=tag:${slug}`,
      data: "posts",
    },
  };

  return routeList[input];
};

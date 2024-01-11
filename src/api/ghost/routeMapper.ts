export const routeMapper = (input: keyof typeof routeList, slug: string) => {
  const routeList = {
    authors: {
      route: "authors",
      options: "&include=count.posts&limit=all",
      prefix: "authors",
    },
    singleAuthor: {
      route: `authors/slug/${slug}`,
      options: "&include=count.posts",
      prefix: "authors",
    },
    allPostsByAuthor: {
      route: "posts",
      options: `&include=authors,tags&limit=all&filter=author:${slug}`,
      prefix: "posts",
    },
    posts: {
      route: "posts",
      options: "&include=tags,authors",
      prefix: "posts",
    },
    singlePost: {
      route: `posts/slug/${slug}`,
      options: `&include=tags,authors`,
      prefix: "posts",
    },
    latestPosts: {
      route: "posts",
      options: `&include=tags,authors&limit=4`,
      prefix: "posts",
    },
    settings: {
      route: "settings",
      options: "&limit=all",
      prefix: "settings",
    },
    pages: {
      route: "pages",
      options: `&limit=all`,
      prefix: "pages",
    },
    singlePage: {
      route: `pages/slug/${slug}`,
      options: `&slug=${slug}`,
      prefix: "pages",
    },
    tags: {
      route: "tags",
      options: "&include=count.posts&limit=all",
      prefix: "tags",
    },
    singleTag: {
      route: `tags/slug/${slug}`,
      options: `&include=authors,tags&filter=tag:${slug}`,
      prefix: "tags",
    },
    allPostsByTag: {
      route: "posts",
      options: `&include=authors,tags&limit=all&filter=tag:${slug}`,
      prefix: "posts",
    },
  } as const

  return routeList[input];
};


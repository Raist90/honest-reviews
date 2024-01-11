import { PostList } from "@/blocks/PostList";
import { getAllPosts } from "@/api/ghost/utils";
import type { Metadata } from "next";
import { SITE_NAME } from "@/constants";

export const metadata: Metadata = {
  title: `Home | ${SITE_NAME}`,
  description: "This is the homepage",
  keywords: "home, homepage",
  applicationName: `${SITE_NAME}`
}

const HomePage = async () => {
  const posts = await getAllPosts()
  return <PostList posts={posts} />;
};

export default HomePage;

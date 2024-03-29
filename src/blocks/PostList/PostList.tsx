"use client";
import Link from "next/link";
import { useState } from "react";

import {
  AuthorBox,
  FeaturedImage,
  PrimaryTag,
  TagsContainer,
} from "../partials";
import { Button } from '@/components/Button'
import type { PostType } from "@/types";
import { usePathname } from "next/navigation";
import { dateFormatter } from '@/utils'

type PostListProps = {
  posts: PostType[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  /** @todo Make sure to remove the type cast and handle null values */
  const currentPath = usePathname() as string;
  const POSTS_PER_PAGE = 10;

  const [postNum, setPostNum] = useState(POSTS_PER_PAGE);

  const handleClick = () => {
    setPostNum((prevPost) => prevPost + POSTS_PER_PAGE);
  }

  return (
    <>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-10 px-5 items-start">
        {posts.slice(0, postNum).map((post) => (
          <article className="grid gap-5" key={post?.id}>
            <Link href={`/posts/${post?.slug}` || ""}>
              <FeaturedImage className="aspect-[4/3]" post={post} />
            </Link>

            <div className="grid">
              <PrimaryTag post={post} />

              <Link href={`/posts/${post?.slug}`}>
                <h2 className="text-2xl font-bold">{post?.title}</h2>
              </Link>

              <TagsContainer post={post} />

              <p className="my-4">{post?.excerpt}</p>

              <AuthorBox
                post={post}
                publishedDate={dateFormatter(post.published_at)}
              />
            </div>
          </article>
        ))}
      </section>

      {(currentPath === "/" ||
        currentPath.startsWith("/tag/") ||
        currentPath.startsWith("/authors/")) &&
        postNum < posts?.length && (
          <section>
            <Button>
              <a onClick={handleClick}>Carica più articoli</a>
            </Button>
          </section>
        )}
    </>
  );
};

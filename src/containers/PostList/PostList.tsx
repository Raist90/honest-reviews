"use client";
import Link from "next/link";
import { useState } from "react";

import styles from "../../styles/Index.module.css";
import {
  AuthorBox,
  FeaturedImage,
  PostText,
  PrimaryTag,
  TagsContainer,
} from "../partials";
import Button from "../../components/Button";
import { PostType } from "../../types";
import { usePathname } from "next/navigation";
import dateFormatter from "../../utils/dateFormatter";

const PostList: React.FC<PostListProps> = ({ posts }) => {
  /** @todo Make sure to remove the type cast and handle null values */
  const currentPath = usePathname() as string;
  const POSTS_PER_PAGE = 10;

  const [postNum, setPostNum] = useState(POSTS_PER_PAGE);

  function handleClick() {
    setPostNum((prevPost) => prevPost + POSTS_PER_PAGE);
  }

  return (
    <>
      <section className={styles.postsList}>
        {posts.slice(0, postNum).map((post) => (
          <article
            className={currentPath === "/" ? `${styles.heroPost}` : ""}
            key={post?.id}
          >
            <Link href={`/posts/${post?.slug}` || ""}>
              <FeaturedImage post={post} styles={styles} />
            </Link>

            <PostText styles={styles}>
              <PrimaryTag post={post} />

              <Link
                className={styles.postTitleLink}
                href={`/posts/${post?.slug}` || ""}
              >
                <h2 className={styles.postTitle}>{post?.title}</h2>
              </Link>

              <TagsContainer post={post} />

              <hr />

              <p>{post?.excerpt}</p>

              <AuthorBox
                post={post}
                publishedDate={dateFormatter(post.published_at)}
              />
            </PostText>
          </article>
        ))}
      </section>

      {(currentPath === "/" ||
        currentPath.startsWith("/tag/") ||
        currentPath.startsWith("/authors/")) &&
        postNum < posts?.length && (
          <section className={styles.loadMoreButtonContainer}>
            <Button>
              <a onClick={handleClick}>Carica più articoli</a>
            </Button>
          </section>
        )}
    </>
  );
};

type PostListProps = {
  posts: PostType[];
  asPath: string;
};

export default PostList;

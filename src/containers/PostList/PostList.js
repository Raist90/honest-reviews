import Link from "next/link";

import styles from "../../styles/Index.module.css";
import {
  AuthorBox,
  FeaturedImage,
  PostText,
  PrimaryTag,
  TagsContainer,
} from "../partials";

const PostList = (props) => {
  const { posts, asPath } = props;

  return (
    <section className={styles.postsList}>
      {posts.map((post) => (
        <article
          className={asPath === "/" ? `${styles.biggerPost}` : ""}
          key={post?.id}
        >
          <Link href={`/posts/${post?.slug}`}>
            <FeaturedImage post={post} styles={styles} />
          </Link>

          <PostText styles={styles}>
            <PrimaryTag post={post} />

            <Link
              className={styles.postTitleLink}
              href={`/posts/${post?.slug}`}
            >
              <h2 className={styles.postTitle}>{post?.title}</h2>
            </Link>

            <TagsContainer post={post} />

            <hr />

            <p>{post?.excerpt}</p>

            <AuthorBox post={post} publishedDate={post?.dateFormatted} />
          </PostText>
        </article>
      ))}
    </section>
  );
};

export default PostList;

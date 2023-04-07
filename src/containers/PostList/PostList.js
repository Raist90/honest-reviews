import Link from "next/link";

import styles from "../../styles/Index.module.css";

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
            <figure className={styles.featureImageContainer}>
              <img src={post?.feature_image} alt="immagine di copertina" />
            </figure>
          </Link>
          <div className={styles.postTextContainer}>
            <small
              style={
                post?.primary_tag?.accent_color
                  ? { background: `${post?.primary_tag?.accent_color}` }
                  : { background: "var(--primary-color)" }
              }
              className="primaryTagName"
            >
              <Link href={`/tag/${post?.primary_tag?.name}`}>
                {post.primary_tag?.name}
              </Link>
            </small>
            <Link
              className={styles.postTitleLink}
              href={`/posts/${post?.slug}`}
            >
              <h2 className={styles.postTitle}>{post?.title}</h2>
            </Link>
            <div className="tagsContainer">
              {post.tags &&
                post.tags.slice(1).map((tag) => (
                  <small key={tag.id}>
                    <Link className="tagsLink" href={`/tag/${tag.name}`}>
                      <em>#{tag.name} </em>
                    </Link>
                  </small>
                ))}
            </div>
            <hr />
            <p>{post?.excerpt}</p>
            <div className="authorProfileImage">
              <Link
                href={
                  post?.primary_author && `/authors/${post.primary_author.slug}`
                }
              >
                <img src={post?.primary_author?.profile_image} alt="immagine profilo dell'autore" />
              </Link>
            </div>
            <small>
              Da{" "}
              <Link
                style={{ color: "var(--secondary-color)" }}
                href={
                  post?.primary_author &&
                  `/authors/${post?.primary_author?.slug}`
                }
              >
                <strong>{post?.primary_author?.name}</strong>
              </Link>{" "}
              | {post?.dateFormatted}
            </small>
          </div>
        </article>
      ))}
    </section>
  );
};

export default PostList;

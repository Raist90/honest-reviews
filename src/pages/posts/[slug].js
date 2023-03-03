import { getSinglePost, getPosts } from "@/lib/posts";
import { SITE_NAME } from "@/lib/utils/constants";
import Head from "next/head";
import Link from "next/link";
import styles from "./Post.module.css";

const PostPage = (props) => {
  const { post } = props;
  // todo: put this inside an utils
  const publishedDate = new Date(post.published_at).toLocaleDateString(
    "it-IT",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <>
      <Head>
        <title>
          {SITE_NAME} | {post.title}
        </title>
        <meta title={post?.meta_title} />
        <meta name="description" content="{post.meta_description}" />
      </Head>
      <main className={styles.wrapper}>
        <article className={styles.postContainer}>
          <small
            style={
              post?.primary_tag?.accent_color
                ? { background: `${post?.primary_tag?.accent_color}` }
                : { background: "var(--primary-color)" }
            }
            className="primaryTagName"
          >
            <Link href={`/tag/${post?.primary_tag?.slug}`}>
              {post?.primary_tag?.name}
            </Link>
          </small>
          <h1 className={styles.postTitle}>{post?.title}</h1>
          <div className="tagsContainer">
            {post?.tags?.slice(1).map((tag) => (
              <small key={tag?.id}>
                <Link className="tagsLink" href={`/tag/${tag?.name}`}>
                  <em>#{tag?.name}</em>
                </Link>
              </small>
            ))}
          </div>
          <hr />
          <p className={styles.excerpt}>{post?.excerpt}</p>
          <div className={styles.authorBox}>
            <div className="authorProfileImage">
              <Link
                href={
                  post?.primary_author &&
                  `/authors/${post?.primary_author?.slug}`
                }
              >
                <img src={post?.primary_author?.profile_image} />
              </Link>
            </div>
            <small>
              Da{" "}
              <Link href={`/authors/${post?.primary_author?.slug}`}>
                <strong>{post?.primary_author?.name}</strong>
              </Link>{" "}
              | {publishedDate}
            </small>
          </div>
          <figure className={styles.featureImageContainer}>
            <img src={post?.feature_image} />
          </figure>
          <div
            className={styles.postText}
            dangerouslySetInnerHTML={{ __html: post?.html }}
          />
        </article>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const post = await getSinglePost(params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export default PostPage;

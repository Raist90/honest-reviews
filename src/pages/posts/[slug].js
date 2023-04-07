import Head from "next/head";
import Link from "next/link";

import { getSinglePost, getPosts, getLatestPosts } from "@/lib/posts";
import { SITE_NAME } from "@/lib/utils/constants";
import styles from "./Post.module.css";
import IndexPage from "..";
import DiscusComments from "@/components/DiscusComments";
import dateFormatter from "@/utils/dateFormatter";

const PostPage = (props) => {
  const { post, latestPosts } = props;

  const publishedDate = dateFormatter(post.published_at, "long");

  return (
    <>
      <Head>
        <meta name="description" content={post?.meta_description} />
        <title>{`${SITE_NAME} | ${post?.meta_title}`}</title>
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
          <p className={`lead ${styles.excerpt}`}>{post?.excerpt}</p>
          <div className={styles.authorBox}>
            <div className="authorProfileImage">
              <Link
                href={
                  post?.primary_author &&
                  `/authors/${post?.primary_author?.slug}`
                }
              >
                <img
                  src={post?.primary_author?.profile_image}
                  alt="immagine profilo dell'autore"
                />
              </Link>
            </div>
            <small>
              Da{" "}
              <Link
                style={{ color: "var(--secondary-color)" }}
                href={`/authors/${post?.primary_author?.slug}`}
              >
                <strong>{post?.primary_author?.name}</strong>
              </Link>{" "}
              | {publishedDate}
            </small>
          </div>
          <figure className={styles.featureImageContainer}>
            <img src={post?.feature_image} alt="immagine di copertina" />
          </figure>
          <div
            className={styles.postText}
            dangerouslySetInnerHTML={{ __html: post?.html }}
          />
          <DiscusComments post={post} />
        </article>
      </main>

      {/* todo put this on className */}
      <section className="latestArticlesContainer">
        <h1 style={{ padding: "0 20px" }}>Ultimi articoli</h1>
        <IndexPage posts={latestPosts} />
      </section>
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
  const latestPosts = await getLatestPosts(params.slug);

  latestPosts.map((post) => {
    post.dateFormatted = dateFormatter(post.published_at);
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post, latestPosts },
  };
}

export default PostPage;

import styles from "../../pages/posts/Post.module.css";
import DiscusComments from "@/components/DiscusComments";
import dateFormatter from "@/utils/dateFormatter";
import {
  AuthorBox,
  FeaturedImage,
  PrimaryTag,
  TagsContainer,
} from "../partials";

const PostEntry = (props) => {
  const { post } = props;

  const publishedDate = dateFormatter(post.published_at, "long");

  return (
    <main className={styles.wrapper}>
      <article className={styles.postContainer}>
        <PrimaryTag {...props} />

        <h1 className={styles.postTitle}>{post?.title}</h1>

        <TagsContainer {...props} />

        <hr />

        <p className={`lead ${styles.excerpt}`}>{post?.excerpt}</p>

        <div className={styles.authorBox}>
          <AuthorBox {...props} publishedDate={publishedDate} />
        </div>

        <FeaturedImage {...props} styles={styles} />

        <div
          className={styles.postText}
          dangerouslySetInnerHTML={{ __html: post?.html }}
        />

        <DiscusComments post={post} />
      </article>
    </main>
  );
};

export default PostEntry;

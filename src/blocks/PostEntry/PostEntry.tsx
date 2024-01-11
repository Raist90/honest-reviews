import { DisqusComments } from "@/components/DisqusComments";
import { dateFormatter } from "@/utils";
import {
  AuthorBox,
  FeaturedImage,
  PrimaryTag,
  TagsContainer,
} from "../partials";
import type { PostType } from "@/types";
import styles from './PostEntry.module.css'

export const PostEntry: React.FC<PostEntryProps> = ({ post }) => {
  const publishedDate = dateFormatter(post.published_at, "long");

  return (
    <main>
      <article className="lg:px-10 px-5">

        <div className="lg:w-1/2 lg:mx-auto my-10">
          <PrimaryTag post={post} />

          <h2 className="text-3xl font-bold">{post?.title}</h2>

          <TagsContainer post={post} />

          <p className="my-4">{post?.excerpt}</p>

          <AuthorBox post={post} publishedDate={publishedDate} />
        </div>

        <FeaturedImage className="lg:w-3/4 lg:mx-auto lg:aspect-[16/9] aspect-[4/3] my-10" post={post} />

        <div className={`lg:w-1/2 lg:mx-auto ${styles.textContainer}`} dangerouslySetInnerHTML={{ __html: post?.html }} />

        <DisqusComments className="lg:w-1/2 lg:mx-auto" post={post} />
      </article>
    </main>
  );
};

type PostEntryProps = {
  post: PostType;
};

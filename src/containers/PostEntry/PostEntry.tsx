import DiscusComments from "../../components/DiscusComments";
import dateFormatter from "../../utils/dateFormatter";
import {
  AuthorBox,
  FeaturedImage,
  PrimaryTag,
  TagsContainer,
} from "../partials";
import { PostType } from "../../types";

const PostEntry: React.FC<PostEntryProps> = ({ post }) => {
  const publishedDate = dateFormatter(post.published_at, "long");

  return (
    <main>
      <article>
        <PrimaryTag post={post} />

        <h1>{post?.title}</h1>

        <TagsContainer post={post} />

        <p>{post?.excerpt}</p>

        <div>
          <AuthorBox post={post} publishedDate={publishedDate} />
        </div>

        <FeaturedImage post={post} />

        <div dangerouslySetInnerHTML={{ __html: post?.html }} />

        <DiscusComments post={post} />
      </article>
    </main>
  );
};

type PostEntryProps = {
  post: PostType;
};

export default PostEntry;

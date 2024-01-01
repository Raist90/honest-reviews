import DiscusComments from "../../components/DiscusComments";
import dateFormatter from "../../utils/dateFormatter";
import {
  AuthorBox,
  FeaturedImage,
  PrimaryTag,
  TagsContainer,
} from "../partials";
import { PostType } from "../../types";

const PostEntry: React.FC<PostEntryProps> = (props) => {
  const { post } = props;

  const publishedDate = dateFormatter(post.published_at, "long");

  return (
    <main>
      <article>
        <PrimaryTag {...props} />

        <h1>{post?.title}</h1>

        <TagsContainer {...props} />

        <hr />

        <p>{post?.excerpt}</p>

        <div>
          <AuthorBox {...props} publishedDate={publishedDate} />
        </div>

        <FeaturedImage {...props} />

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

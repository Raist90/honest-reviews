import Link from "next/link";

import { PostType } from "../../types";

export const TagsContainer: React.FC<TagsContainerProps> = (props) => {
  const { post } = props;

  return (
    <div className="inline-flex gap-2">
      {post.tags &&
        post?.tags?.slice(1).map((tag) => (
          <small key={tag?.id}>
            <Link href={`/tag/${tag?.name}`}>
              <em>#{tag?.name}</em>
            </Link>
          </small>
        ))}
    </div>
  );
};

type TagsContainerProps = {
  post: PostType;
};


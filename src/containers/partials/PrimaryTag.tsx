import Link from "next/link";

import { PostType } from "../../types";

const PrimaryTag: React.FC<PrimaryTagProps> = (props) => {
  const { post } = props;

  return (
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
  );
};

type PrimaryTagProps = {
  post: PostType;
};

export default PrimaryTag;

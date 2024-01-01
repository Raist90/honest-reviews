import Link from "next/link";

import { PostType } from "../../types";

const PrimaryTag: React.FC<PrimaryTagProps> = (props) => {
  const { post } = props;
  const primaryTagColor =
    post?.primary_tag?.accent_color || "var(--primary-color)";

  return (
    <Link
      style={{ background: `${primaryTagColor}` }}
      className="w-fit p-2 inline-block text-white uppercase text-xs mb-2"
      href={`/tag/${post?.primary_tag?.slug}`}
    >
      {post?.primary_tag?.name}
    </Link>
  );
};

type PrimaryTagProps = {
  post: PostType;
};

export default PrimaryTag;

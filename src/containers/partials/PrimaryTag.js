import Link from "next/link";

const PrimaryTag = (props) => {
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

export default PrimaryTag;

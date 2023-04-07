import Link from "next/link";

const TagsContainer = (props) => {
  const { post } = props;

  return (
    <div className="tagsContainer">
      {post?.tags?.slice(1).map((tag) => (
        <small key={tag?.id}>
          <Link className="tagsLink" href={`/tag/${tag?.name}`}>
            <em>#{tag?.name}</em>
          </Link>
        </small>
      ))}
    </div>
  );
};

export default TagsContainer;

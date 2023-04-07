import Link from "next/link";

const AuthorBox = (props) => {
  const { post, publishedDate } = props;

  return (
    <>
      <div className="authorProfileImage">
        <Link
          href={
            post?.primary_author && `/authors/${post?.primary_author?.slug}`
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
    </>
  );
};

export default AuthorBox;

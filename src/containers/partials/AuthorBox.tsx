import Link from "next/link";

import { PostType } from "../../types";

const AuthorBox: React.FC<AuthorBoxProps> = (props) => {
  const { post, publishedDate } = props;

  return (
    <>
      <div>
        <Link
          href={
            post?.primary_author && `/authors/${post?.primary_author?.slug}`
          }
        >
          <div className="h-[70px] w-[70px]">
            <img
              className="w-full h-full object-cover rounded-full"
              src={post?.primary_author?.profile_image}
              alt="immagine profilo dell'autore"
            />
          </div>
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

type AuthorBoxProps = {
  post: PostType;
  publishedDate: string;
};

export default AuthorBox;

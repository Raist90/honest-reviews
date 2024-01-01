import Link from "next/link";

import { PostType } from "../../types";

const AuthorBox: React.FC<AuthorBoxProps> = (props) => {
  const { post, publishedDate } = props;

  return (
    <div className="inline-flex gap-2 items-center">
      <Link
        href={post?.primary_author && `/authors/${post?.primary_author?.slug}`}
      >
        <div className="h-[60px] w-[60px]">
          <img
            className="w-full h-full object-cover rounded-full"
            src={post?.primary_author?.profile_image}
            alt="immagine profilo dell'autore"
          />
        </div>
      </Link>
      <div className="mb-2 text-sm">
        Da{" "}
        <Link
          style={{ color: "var(--secondary-color)" }}
          href={`/authors/${post?.primary_author?.slug}`}
        >
          <strong>{post?.primary_author?.name}</strong>
        </Link>{" "}
        | {publishedDate}
      </div>
    </div>
  );
};

type AuthorBoxProps = {
  post: PostType;
  publishedDate: string;
};

export default AuthorBox;

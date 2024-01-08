import { PostType } from "../../types";

export const FeaturedImage: React.FC<FeaturedImageProps> = ({ post, ...rest }) => {

  /** @todo Use `next/image` to optimize the image */
  return (
    <figure {...rest}>
      <img
        className="w-full h-full object-cover rounded-md"
        src={post?.feature_image}
        alt="immagine di copertina"
      />
    </figure>
  );
};

type FeaturedImageProps = {
  post: PostType;
  className?: string;
};

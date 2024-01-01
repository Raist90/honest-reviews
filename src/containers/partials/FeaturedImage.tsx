import { PostType } from "../../types";

const FeaturedImage: React.FC<FeaturedImageProps> = (props) => {
  const { post } = props;

  return (
    <figure className="aspect-[4/3]">
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
};

export default FeaturedImage;

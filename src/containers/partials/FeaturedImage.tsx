import { PostType } from "../../types";

const FeaturedImage: React.FC<FeaturedImageProps> = (props) => {
  const { post, styles } = props;

  return (
    <figure className={styles.featureImageContainer}>
      <img src={post?.feature_image} alt="immagine di copertina" />
    </figure>
  );
};

type FeaturedImageProps = {
  post: PostType;
  styles: any;
};

export default FeaturedImage;

const FeaturedImage = (props) => {
  const { post, styles } = props;

  return (
    <figure className={styles.featureImageContainer}>
      <img src={post?.feature_image} alt="immagine di copertina" />
    </figure>
  );
};

export default FeaturedImage;

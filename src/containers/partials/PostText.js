const PostText = (props) => {
  const { styles, children } = props;

  return <div className={styles.postTextContainer}>{children}</div>;
};

export default PostText;

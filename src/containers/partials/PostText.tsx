import { ReactNode } from "react";

const PostText: React.FC<PostTextProps> = (props) => {
  const { styles, children } = props;

  return <div className={styles.postTextContainer}>{children}</div>;
};

type PostTextProps = {
  children: ReactNode;
  styles: any;
};

export default PostText;

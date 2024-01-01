import { ReactNode } from "react";

const PostText: React.FC<PostTextProps> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

type PostTextProps = {
  children: ReactNode;
};

export default PostText;

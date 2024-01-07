import { ReactNode } from "react";

export const PostText: React.FC<PostTextProps> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

type PostTextProps = {
  children: ReactNode;
};


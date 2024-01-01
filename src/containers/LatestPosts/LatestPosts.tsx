import { ReactNode } from "react";

const LatestPosts: React.FC<LatestPostsProps> = (props) => {
  const { children } = props;

  return (
    <section>
      <h1>Ultimi articoli</h1>
      {children}
    </section>
  );
};

type LatestPostsProps = {
  children: ReactNode;
};

export default LatestPosts;

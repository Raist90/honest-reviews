import { ReactNode } from "react";

import styles from "./LatestPosts.module.css";

const LatestPosts: React.FC<LatestPostsProps> = (props) => {
  const { children } = props;

  return (
    <section className={styles.latestArticlesContainer}>
      <h1>Ultimi articoli</h1>
      {children}
    </section>
  );
};

type LatestPostsProps = {
  children: ReactNode;
};

export default LatestPosts;

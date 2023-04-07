import styles from "./LatestPosts.module.css";

const LatestPosts = (props) => {
  const { children } = props;

  return (
    <section className={styles.latestArticlesContainer}>
      <h1>Ultimi articoli</h1>
      {children}
    </section>
  );
};

export default LatestPosts;

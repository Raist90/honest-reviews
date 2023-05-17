const Footer = (props) => {
  const { children } = props;

  return (
    <footer>
      <p>{children}</p>
    </footer>
  );
};

export default Footer;

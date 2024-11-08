import Hero from "../common/Hero";

const Layout = (props) => {
  const { heroContent, pageContent } = props;

  return (
    <div
    // style={{
    //   padding: theme.paddings.leftAndRightPage,
    //   margin: "2em 0",
    // }}
    >
      <Hero children={heroContent} />
      {pageContent}
    </div>
  );
};

export default Layout;

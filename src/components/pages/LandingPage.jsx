import theme from "../../utils/theme";
import Hero from "../common/Hero";
import Layout from "../layout/Layout";

const LandingPage = () => {
  return (
    <Layout
      heroContent={
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1>How can we help?</h1>
          <p>search</p>
        </div>
      }
      pageContent={<p>Coming soon</p>}
    />
  );
};

export default LandingPage;

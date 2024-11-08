import React from "react";
import theme from "../../utils/theme";

const Hero = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        backgroundColor: theme.colors.primaryPurple,
        padding: "4em 0",
      }}
    >
      {children}
    </div>
  );
};

export default Hero;

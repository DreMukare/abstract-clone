import theme from "../../utils/theme";

const Logo = () => {
  return (
    <button
      style={{
        color: theme.colors.white,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          fontSize: "1.5em",
          letterSpacing: "3px",
        }}
      >
        Abstract
      </p>
    </button>
  );
};

export default Logo;

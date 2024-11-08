import theme from "../../utils/theme";
import "./Button.css";

const Button = (props) => {
  const { buttonText, handleClick, variant } = props;
  const isFilled = variant === "filled";
  return (
    <button
      style={{
        cursor: "pointer",
        background: isFilled ? theme.colors.primaryBlue : "none",
        border: isFilled ? "none" : `1px solid ${theme.colors.white}`,
        color: theme.colors.white,
        padding: "0.5em 1em",
        borderRadius: "5px",
      }}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;

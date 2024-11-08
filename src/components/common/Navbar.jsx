import Logo from "./Logo";
import Button from "./Button";
import theme from "../../utils/theme";

const Navbar = () => {
  return (
    <nav
      style={{
        background: theme.colors.black,
        color: theme.colors.white,
        width: "100vw",
        minHeight: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2em",
      }}
    >
      <NavBarButtonSection>
        <Logo />
        <div
          style={{
            minHeight: "100%",
            height: "100%",
            borderLeft: `1px solid ${theme.colors.white}`,
            paddingTop: "20px",
          }}
        ></div>
        <a href="#">Help Center</a>
      </NavBarButtonSection>
      <NavBarButtonSection>
        <Button buttonText="Submit a request" handleClick={() => {}} />
        <Button buttonText="Sign in" handleClick={() => {}} variant="filled" />
      </NavBarButtonSection>
    </nav>
  );
};

const NavBarButtonSection = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {children}
    </div>
  );
};

export default Navbar;

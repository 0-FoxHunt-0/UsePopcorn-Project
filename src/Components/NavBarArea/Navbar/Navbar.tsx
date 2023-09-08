import Logo from "../Logo/Logo";
import "./Navbar.css";

interface NavbarProps {
  children: any;
}

function Navbar(props: NavbarProps): JSX.Element {
  return (
    <nav className="Navbar">
      <Logo />
      {props.children}
    </nav>
  );
}

export default Navbar;

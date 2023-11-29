import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="l-nav-footer">
      <NavLink to="/" title="POSTBLOG">
        <address>&copy;2023 DiaMond </address>
      </NavLink>
    </footer>
  );
};

export default Footer;

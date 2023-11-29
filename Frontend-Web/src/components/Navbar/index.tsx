import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { isLogin } = useContext(AuthContext);

  return (
    <header className="l-nav-header">
      <div className="l-nav-header__inner">
        <nav>
          <NavLink to="/" title="POSTBLOG">
            POST BLOG
          </NavLink>
        </nav>

        <nav>
          {isLogin ? (
            <NavLink to="/profile" title="user">
              <i className="fa-regular fa-user"></i> Profile
            </NavLink>
          ) : (
            <NavLink to="/user/sign-in" title="user">
              <i className="fa-regular fa-user"></i> Sign in
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

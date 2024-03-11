import { useState } from "react";
import logo from "../../navLogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [userLoginStatus, setUserLoginStatus] = useState(false);
  return (
    <div className="navbar">
      <img alt="website-logo" src={logo} />
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            {userLoginStatus ? (
              <button
                className="login-btn"
                onClick={() => setUserLoginStatus(false)}
              >
                Logout
              </button>
            ) : (
              <button
                className="login-btn"
                onClick={() => setUserLoginStatus(true)}
              >
                LogIn
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

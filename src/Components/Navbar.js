import { useState } from "react";
import logo from "../../navLogo.svg";

const Navbar = () => {
  const [userLoginStatus, setUserLoginStatus] = useState(false);
  return (
    <div className="navbar">
      <img alt="website-logo" src={logo} />
      <div className="nav-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
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

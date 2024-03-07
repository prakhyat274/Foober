// import { useState } from "react";
import logo from "../../navLogo.svg";
// import { restaurants } from "../config";

const Navbar = () => {
  // const [searchText, setSearchText] = useState("");

  return (
    <div className="navbar">
      <img alt="website-logo" src={logo} />
      <div className="nav-links">
        <ul>
          {/* <li>
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={() => {
                //fetch filtered data
                const data = filterData(searchText, restaurants);

                //store filterd data
              }}
            >
              Search
            </button>
          </li> */}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

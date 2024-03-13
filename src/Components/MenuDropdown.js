import { useState } from "react";
import FoodList from "./FoodList";

const MenuDropdown = ({ title, itemCards }) => {
  const [dropdownStatus, setDropdownStatus] = useState("opened");
  return (
    <div>
      <div className="menuCategory">
        <h4>{title}</h4>
        {dropdownStatus === "opened" ? (
          <h2
            className="dropdown-toggle"
            onClick={() => {
              setDropdownStatus("closed");
            }}
          >
            -
          </h2>
        ) : (
          <h2
            className="dropdown-toggle"
            onClick={() => {
              setDropdownStatus("opened");
            }}
          >
            +
          </h2>
        )}
      </div>
      {dropdownStatus === "opened" ? <FoodList items={itemCards} /> : null}
    </div>
  );
};

export default MenuDropdown;

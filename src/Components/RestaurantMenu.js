import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
import MenuDropdown from "./MenuDropdown";

const RestaurantMenu = () => {
  const { id } = useParams();

  const menu = useMenu(id);

  console.log(menu);
  return (
    <div className="MenuCard">
      <div className="menuResDetail"></div>
      <div>
        {menu.map((dropdown, index) => {
          return dropdown.card.card.itemCards ? (
            <MenuDropdown {...dropdown.card.card} key={index} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

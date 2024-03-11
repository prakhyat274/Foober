import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=26.95250&lng=75.71050&restaurantId=" +
        id
    );
    const json = await data.json();
    setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
  }

  return (
    <div className="MenuCard">
      <div className="menuResDetail"></div>
      <div>
        {menu.map((dropdown, index) => {
          return dropdown.card.card.title ? (
            <MenuDropdown {...dropdown.card.card} key={index} />
          ) : (
            <></>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

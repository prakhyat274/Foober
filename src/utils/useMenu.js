import { useEffect, useState } from "react";
import { FETCH_MENU } from "../config";

const useMenu = (id) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    const data = await fetch(FETCH_MENU + id);
    const json = await data.json();
    setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
  }

  return menu;
};

export default useMenu;

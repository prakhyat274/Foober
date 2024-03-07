import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../config";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [restaurantList, setRestaurantList] = useState(restaurants);

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //fetch filtered data
            const data = filterData(searchText, restaurants);

            //store filterd data
            setRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantList">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard
              restaurant={restaurant.info}
              key={restaurant.info.id}
            ></RestaurantCard>
          );
        })}
      </div>
    </>
  );
};

export default Body;

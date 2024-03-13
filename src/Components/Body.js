import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../config";
import { filterData } from "../utils/helper";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetch(SWIGGY_API)
      .then(function (data) {
        return data.json();
      })
      .then(function (json) {
        setAllRestaurants(
          json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
        setFilteredRestaurant(
          json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
      });
  }, []);

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
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
            const data = filterData(searchText, allRestaurants);

            setFilteredRestaurant(data);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%",
            }}
          >
            <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
          </svg>
        </button>
      </div>
      <div className="restaurantList">
        {filteredRestaurant.length === 0 ? (
          <h1>No restaurant available</h1>
        ) : (
          filteredRestaurant.map((restaurant) => {
            return (
              <RestaurantCard
                {...restaurant.info}
                key={restaurant.info.id}
              ></RestaurantCard>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;

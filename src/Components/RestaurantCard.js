import { IMG_CDN_LINK } from "../config";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurantCard">
      <img src={IMG_CDN_LINK + restaurant.cloudinaryImageId} />
      <div className="restaurantDesc">
        <h3 style={{ fontSize: "14px" }}>{restaurant.name}</h3>
        <p>{restaurant.avgRating}</p>
        <h6>{restaurant.cuisines.join(", ")}</h6>
      </div>
    </div>
  );
};

export default RestaurantCard;

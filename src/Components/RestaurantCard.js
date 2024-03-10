import { IMG_CDN_LINK } from "../config";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <a>
      <div className="restaurantCard">
        <div className="cardImageWrapper">
          <img src={IMG_CDN_LINK + cloudinaryImageId} />
        </div>
        <div className="restaurantDesc">
          <h2 style={{ fontSize: "18px" }}>{name}</h2>
          <p>{avgRating}</p>
          <h6>{cuisines.join(", ")}</h6>
        </div>
      </div>
    </a>
  );
};

export default RestaurantCard;

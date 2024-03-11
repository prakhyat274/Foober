import { IMG_CDN_LINK } from "../config";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  id,
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => {
  return (
    <Link to={"/restaurant/" + id}>
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
    </Link>
  );
};

export default RestaurantCard;

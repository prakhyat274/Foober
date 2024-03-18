import { IMG_CDN_LINK } from "../config";
import { Link } from "react-router-dom";
import RatingCircle from "./RatingCircle";

const RestaurantCard = ({
  id,
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  sla,
}) => {
  return (
    <Link to={"/restaurant/" + id}>
      <div className="restaurantCard">
        <div className="cardImageWrapper">
          <img src={IMG_CDN_LINK + cloudinaryImageId} />
        </div>
        <div className="restaurantDesc">
          <h2 style={{ fontSize: "18px" }}>{name}</h2>
          <div style={{ display: "flex" }}>
            <RatingCircle />
            <p
              style={{ fontSize: "15px", fontWeight: "600", marginLeft: "5px" }}
            >
              {avgRating + " • " + sla.slaString}
            </p>
          </div>
          <h6>{cuisines.join(", ")}</h6>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;

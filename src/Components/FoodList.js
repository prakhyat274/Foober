import { IMG_CDN_LINK } from "../config";

const FoodList = ({ items }) => {
  return (
    <div style={{ paddingBottom: "14px" }}>
      {items.map((item) => {
        return (
          <div key={item.card.info.id}>
            <div className="food">
              <div className="foodDetail">
                <div>
                  <h4>{item.card.info.name}</h4>
                  <h5>
                    {"₹" +
                      (item.card.info.defaultPrice || item.card.info.price) /
                        100}
                  </h5>
                </div>
                <div className="foodDesc">
                  <p>{item.card.info.description}</p>
                </div>
              </div>
              <div className="foodItem">
                {item?.card?.info?.imageId ? (
                  <img src={IMG_CDN_LINK + item?.card?.info?.imageId} />
                ) : null}
                <button>Add to Cart +</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodList;

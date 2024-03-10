const ShimmerCard = () => {
  return (
    <div className="restaurantCard">
      <div className="cardImageWrapper">
        <img
          style={{
            backgroundColor: "lightgrey",
          }}
        />
      </div>
      <div className="restaurantDesc">
        <h3
          style={{
            backgroundColor: "lightgrey",
            minHeight: "10px",
            width: "70%",
            borderRadius: "5px",
          }}
        ></h3>
        <p
          style={{
            backgroundColor: "lightgrey",
            minHeight: "20px",
            width: "30px",
            borderRadius: "5px",
            margin: "2px 0",
          }}
        ></p>
      </div>
    </div>
  );
};

export default ShimmerCard;

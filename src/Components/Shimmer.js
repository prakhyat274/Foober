import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        margin: "40px 0",
        minHeight: "80vh",
      }}
      className="body"
    >
      {Array(12)
        .fill("")
        .map((e, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};

export default Shimmer;

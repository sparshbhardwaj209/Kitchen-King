const Shimmer = () => {
  return (
    <>
      <div className="restaurant-list">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmerCard">
              <div className="shimmerCardImg"></div>
              <div className="shimmerCardName"></div>
              <div className="shimmerCardDetails"></div>
              <div className="shimmerCardDetails"></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;

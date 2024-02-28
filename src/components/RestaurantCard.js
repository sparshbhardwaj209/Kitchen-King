import { useContext } from "react";
import { IMG_URL_CDN } from "../constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  areaName,
  ...props
}) => {
  const { user } = useContext(UserContext);
  // console.log(props);

  const truncateText = (cuisines, maxLength) => {
    if (cuisines.length <= maxLength) {
      return cuisines;
    }
    return cuisines.slice(0, maxLength) + "...";
  };

  //w-56

  return (
    <div className="transition-transform duration-300 hover:scale-90 p-2 m-1 hover:shadow-xl hover:rounded-lg hover:bg-slate-50">
      <img
        className="w-full h-44 rounded-md shadow-md object-cover"
        src={IMG_URL_CDN + cloudinaryImageId}
        alt="restrauImage"
      />
      <div className="p-2">
        <h2 className="font-bold text-lg mt-1">{name}</h2>
        <div>
          <span className="font-bold rounded-full p-1 text-white bg-green-700 mr-2 text-xs">
            ⭐
          </span>
          <span className="font-bold text-[#414449] tracking-normal text-lg">
            {avgRating} :{" "}
          </span>
          <span className="font-bold text-[#414449] tracking-normal text-lg">
            {props.sla.slaString}
          </span>
        </div>
        <h3 className="font-normal">{truncateText(cuisines.join(", "), 30)}</h3>

        {/* <h4 className="font-bold">
        {user.name} - {user.email}
      </h4> */}
        <h3 className="font-normal text-[#414449] tracking-normal text-base">
          {areaName}
        </h3>
      </div>
    </div>
  );
};

export default RestaurantCard;

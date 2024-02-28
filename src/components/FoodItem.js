import { IMG_URL_CDN } from "../constants";

const FoodItem = ({ name, description, imageId, defaultPrice }) => {
  return (
    <div
      className="border-2 p-2 m-2 rounded-lg flex flex-col  md:flex-row shadow-lg bg-gray-100 items-center mx-auto w-[80vw]">
      <div className="m-1">
        <img className="h-24 p-2 rounded-sm" src={IMG_URL_CDN + imageId} />
      </div>
      <div className="m-1 p-2">
        <h2 className="font-medium">{name}</h2>
        <h3 className="font-light">{description}</h3>
        <h4 className="text-sm">₹ {defaultPrice / 100}</h4>
      </div>
    </div>
  );
};

export default FoodItem;

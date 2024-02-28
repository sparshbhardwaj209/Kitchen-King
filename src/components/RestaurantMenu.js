import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL_CDN } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);
  console.log(restaurant);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (restaurant === null) return <Shimmer />;

  const { name, areaName, avgRating, costForTwoMessage, cloudinaryImageId } =
    restaurant?.cards[2]?.card?.card?.info;

  // const category = restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards[2]?.card;
  const menu =
    restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(menu);

  return (
    <>
      <div className="flex flex-col justify-center items-center p-2 m-2">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 w-3/4">
          {/* <h1>Restaurnt Id: {resId}</h1> */}
          <img
            className="w-[50vw] h-60 rounded-3xl p-2 object-cover "
            src={IMG_URL_CDN + cloudinaryImageId}
          />
          <div className="w-[50vw] p-3">
            <h2 className="font-bold m-1 p-1 text-2xl">{name}</h2>
            <h3 className="font-medium m-1 p-1 text-base">{areaName}</h3>
            <h3 className="font-medium m-1 p-1">{avgRating} Stars</h3>
            <h3 className="font-medium m-1 p-1">{costForTwoMessage}</h3>
          </div>
        </div>
        {/* <div>
          <button
            className="p-2 bg-purple-900 text-white"
            onClick={() => {
              handleAddItem();
            }}
          >
            Add Item
          </button>
        </div> */}
        <div className="m-2 p-2">
          <h1 className="font-bold text-xl m-2 p-2">Top Picks</h1>
          <div className="">
            {Object.values(menu?.itemCards).map((itemCards) => (
              <div className="border-b-2 flex justify-between m-2 p-2">
                <div className="m-2 ">
                  <li
                    className="rounded-md flex justify-between list-none overflow-auto font-medium text-base text-gray-700 "
                    key={itemCards?.card?.info?.id}
                  >
                    {itemCards?.card?.info?.name}
                  </li>
                  <h1 className="text-sm font-normal">₹ {itemCards?.card?.info?.defaultPrice / 100}</h1>
                  <h3 className="font-light">{itemCards?.card?.info?.description}</h3>
                </div>
                <div className="m-1 flex flex-col justify-between">
                  <img className="w-16 object-cover rounded-sm" src={IMG_URL_CDN + itemCards?.card?.info?.imageId} alt="" />
                  <button
                    className="pl-2 pr-2 pt-1 pb-1 text-sm bg-[#02060c] font-medium text-white rounded-md hover:bg-slate-800"
                    onClick={() => addFoodItem(itemCards?.card?.info)}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;

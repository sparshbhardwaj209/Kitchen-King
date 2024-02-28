import { useContext, useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // const offline = useOnline();

  // if (!offline) {
  //   return <h1>🔴 Offline, Please check your internet connection</h1>;
  // }

  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0)
  //   return  <h1>No Restaurant match your Search,Please Try another one</h1>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className=" w-[100vw] container md:container lg:container xl:container mx-auto px-8 ">
        <div className="mt-4 pl-4 pr-4 text-center">
          <input
            type="text"
            className="p-2 border-2 mr-1 rounded-lg md:w-[70vw] lg:w-[70vw]"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="bg-black text-[#ebebec] font-medium text-md rounded-lg pt-2 pb-2 pl-6 pr-6"
            onClick={() => {
              //filtering the data
              const data = filterData(searchText, allRestaurants);
              // updating the state
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
          {/* <input
            type="text"
            value={user.name}
            onChange={(e) =>
              setUser({
                ...user,
                name: e.target.value,
              })
            }
          />
          <input
            type="text"
            value={user.email}
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
          /> */}
        </div>
        <div className="flex justify-center">
          {/* <div className="flex flex-wrap "> */}
          <div
            className=" grid 
          grid-cols-1
          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          gap-4 p-2 "
          >
            {filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}
                >
                  <div className="max-w-xs mx-auto">
                    <RestaurantCard {...restaurant.info} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

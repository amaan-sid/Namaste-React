import { useContext } from "react";
import { CDN_URL_IMG } from "../utilities/constants";

// this is in body in vscode and  in home of web page, each card of restaurant

import UserContext from "../utilities/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData)

  const imgId = resData?.info?.cloudinaryImageId;
  const { name, avgRating, totalRatingsString, cuisines } = resData?.info;
  const data = resData?.info;

  const cdnImg = CDN_URL_IMG;
  const gett = useContext(UserContext);
  return (
    <div
      className="h-[350px] w-[300px] text-center font-normal text-base rounded-xl
      hover:scale-95 duration-200 "
    >
      <div className="h-[200px]">
        <img
          className="w-full h-full object-cover bg-opacity-5 rounded-md"
          src={cdnImg + imgId}
        />
        <h5 className="relative bottom-10 text-white  text-2xl font-black">
          {data?.aggregatedDiscountInfoV3?.header}{" "}
          {data?.aggregatedDiscountInfoV3?.subHeader}
        </h5>
      </div>
      <h4 className="text-2xl font-bold  py-1"> {name} </h4>
      <h5>
        {" "}
        {avgRating} ⭐ {"  --  "}
        {totalRatingsString} ratings
      </h5>
      <h5>
        {" "}
        {cuisines.join(", ")} <br></br>
        {gett.loggedInUser}
      </h5>
    </div>
  );
};

// Higher Order Component
export const TopRatedRestaurants = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        {/* "Top Rated" label */}
        <label className="absolute bg-black text-white font-bold text-base py-1 px-3 rounded-md z-10">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

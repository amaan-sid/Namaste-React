import ItemList from "./ItemList";
import { useState } from "react";

// in this only accordian 

const RestaurantCategory = ({data, showItems, setshowIndex }) => {
   

   return (
      <div
         className="flex flex-col justify-between items-center 
        my-6 shadow-2xl text-xl font-bold"
      >
         <div
            className="flex justify-between w-full mb-5 h-10 bg-gray-50 cursor-pointer"
            onClick={ setshowIndex } // Toggle showItems state
         >
            <span className="text-xl">
               {data.title} ({data.itemCards.length})
            </span>
            <span className="text-xl"> {showItems ? "⬆️" : "⬇️"} </span> {/* Toggle arrow */}
         </div>

         <div className=" bg-gray-50">
            {showItems && <ItemList items={data.itemCards} />}
         </div>
      </div>
   );
};

export default RestaurantCategory;

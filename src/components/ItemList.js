import { CDN_URL_IMG } from "../utilities/constants";
import { addItem } from "../utilities/cartSlice";
import { useDispatch } from "react-redux";

// in this inside of accordian content are present.

const ItemList = ({items}) => {
  // const data = props.data;
  const cdn_url = CDN_URL_IMG;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
    // console.log(addItem)
  };

  return (
    <div>
      {items.map((item) => {
        const img_id = item?.card?.info?.imageId;
        const { name, price, defaultPrice, description, id } = item?.card?.info
        return (
          <div className="flex justify-between py-3  border-b-[3px] gap-x-3"
          key={id}
          >
            <div className="font-medium text-lg w-11/12">
              <span className="text-xl font-medium"> {name} </span> <br />
              {price ? (
                <span> Rs. {price / 100} </span>
              ) : (
                <span> Rs. {defaultPrice / 100} </span>
              )}
              <p className="text-sm font-normal"> {description} </p>
            </div>

            <div className="h-24 w-40 flex items-center relative">
              {img_id && (
                <img
                  className="h-full w-full rounded-lg"
                  src={cdn_url + img_id}
                  alt=""
                />
              )}
              <button
                className="absolute bg-white text-green-600 rounded-lg top-3/4 left-1/4 px-1"
                onClick={() => handleAddItem(item)}
              >
                ADD+
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;

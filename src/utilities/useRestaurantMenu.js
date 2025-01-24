import { useEffect, useState } from "react";
import { ResInfoApi1, ResInfoApi2 } from "./constants";
// import { useParams } from "react-router-dom";

const useRestaurantMenu = (resid) => {
  let [resinfo, setresinfo] = useState([]);

  useEffect(() => {
    fetchresinfo();
  }, []);
  const fetchresinfo = async () => {
    const data = await fetch(ResInfoApi1 + resid + ResInfoApi2);
    const json = await data.json();
    setresinfo(json);
    // console.log(json)
  };

  return resinfo;
};
export default useRestaurantMenu;

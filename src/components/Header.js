import useOnlineStatus from "../utilities/useOnlineStatus";
import Grocery from "./Grocery";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utilities/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  let [loginbtn, setlloginbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  // console.log(data);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  
  return (
    <div className="flex m-3 justify-between h-24 mb-5 ">
      <div className="px-5 items-center">
        <img
          className="h-24 "
          src="https://img.freepik.com/free-psd/isolated-hamburger-with-splash-ink-background_1409-3855.jpg?semt=ais_hybrid"
        />
      </div>
      <div className="flex gap-5  text-xl font-medium">
        <ul className="flex justify-center items-center gap-5">
          <li> Online Status : {onlineStatus ? "🟢" : "🔴"} </li>
          <li className="hover:bg-gray-200  p-2 rounded">
            {" "}
            <Link to={"/grocery"}> Grocery </Link>{" "}
          </li>
          <li className="hover:bg-gray-200  p-2 rounded">
            {" "}
            <Link to={"/About"}> About Us </Link>{" "}
          </li>
          <li className="hover:bg-gray-200  p-2 rounded">
            {" "}
            <Link to={"/"}> Home </Link>{" "}
          </li>
          
          <li className="hover:bg-gray-200  p-2 rounded">
            <Link to={"/contact"} > Contact Us  </Link> 
             </li>
          <li className="hover:bg-gray-200  p-2 rounded">
            <Link to={"/cart"}> cart ({cartItems.length} items) </Link>
          </li>
          <button
            className="hover:bg-gray-200  p-2 rounded"
            onClick={() => {
              setlloginbtn((prev) => (prev === "Login" ? "Logout" : "Login"));

              // console.log(loginbtn);
            }}
          >
            {" "}
            {loginbtn}{" "}
          </button>
          <li className="text-green-600">{loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

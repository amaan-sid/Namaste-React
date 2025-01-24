import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./src/utilities/UserContext";
import { Header } from "./src/components/Header";
// import About from "./src/components/About";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import Cart from "./src/components/Cart";
import { Provider } from "react-redux";
import appStore from "./src/utilities/appStore";
import Contact from "./src/components/ContactUs";

const Grocery = lazy(() => import("./src/components/Grocery"));
const About = lazy(() => import("./src/components/About"));

const Applayout = () => {
  const [userName, setUserName] = useState("default");
  useEffect(() => {
    const data = {
      name: "Amaan Siddiquie",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
        
        <UserContext.Provider value={{ loggedInUser: userName, setUserName  }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
        </UserContext.Provider>
        
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1> Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1> Loading.. </h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

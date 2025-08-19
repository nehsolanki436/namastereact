import React from "react";
import ReactDOM from "react-dom/client";
import HeaderLayout from "./components/HeaderLayout";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout =() =>{
 return (<div className="app-container">
    <HeaderLayout/>
    <Outlet/>
 </div>
 );
};

const appRouter=createBrowserRouter([
   {
     path: "/",
     element: <AppLayout />,
     children:[
      {
         path: "/",
         element:<Body/>,
      },
      {
         path: "/about",
         element: <AboutUs />,
      },
      {
         path:"/restaurant/:resId",
         element:<RestaurantMenu/>,
      }
     ],
     errorElement: <Error/>,
     
   },
   
]

)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//root.render(<AppLayout/>)



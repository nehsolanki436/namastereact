import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU } from "../utils/constants";

const RestaurantMenu=()=>{

    const [restMenu,setRestMenu]=useState([]);
    const {resId}=useParams();
    console.log(resId);

    //UseEffect takes arrow function and array as a parameter. 
    useEffect(()=>{fetchRestMenu()},[]);

    const fetchRestMenu=async ()=>{
        const restMenuData= await fetch(RESTAURANT_MENU+resId);

        const restMenuJson=await restMenuData.json();
        console.log(restMenuJson?.data);
        setRestMenu(restMenuJson?.data);

        console.log(restMenu);
    }
    if (restMenu.length===0){
       return <Shimmer/>;
    }

   const {name,avgRating,costForTwoMessage,cuisines,areaName,}=restMenu?.cards[2]?.card?.card?.info;
   const {itemCards}=restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

   console.log(itemCards);

   return (<div className="menu">
     <h1>{name}</h1>
     <div className="outer-card">
     <div className="rest-card">
       <div className="mergerdiv">
         <h3 className="rating">{avgRating+" Rating"}</h3><h3 className="costOfTwo">{costForTwoMessage}</h3>    
      </div>  
      <div className="cuisines">
         {cuisines.join(", ")}
      </div>
      <div className="outlet">
         Outlet&nbsp;&nbsp;&nbsp;{areaName}
      </div>
     </div> 
     </div> 
     <div className="bordertop"></div>   
     <div className="menuitems">
        <ul className="itemnames">
           {
            itemCards.map((item)=>{
               return  <li key={item.card.info.id}>{item.card.info.name}</li>;
            })
           }
        </ul>
     </div>

  </div>);
}

export default RestaurantMenu;
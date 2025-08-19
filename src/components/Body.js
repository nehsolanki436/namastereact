import ResturantCards from "./ResturantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{


  //This is destructuring of array.
  //eg:- const arr=useState(resList)
  //const restaurants=arr[0]
  //const setRestaurants=arr[1]
  const [restaurants,setRestaurants]=useState([]);
  const [filterrestaurant,setFilterRestaurant]=useState([]);
  useEffect(()=>{fetchData()},[]);

  const [searchText,setSearchText]=useState([]);

  const fetchData= async () =>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0394447&lng=72.8548711&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json();
      setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
   if (restaurants.length===0)
   {
     return <Shimmer/>;
   }
   
    return (
     <div className="body-container">
      <div className="search-container">
       <div className="search-wrap"> 
        <input type="search" className="search" placeholder="Search for restaurants and food" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value)}}/>
        <button className="fa fa-search" onClick={()=>{
            let filterRestaurant=restaurants.filter((x)=>x.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilterRestaurant(filterRestaurant);
        }} ></button>
        </div> 
      </div>
      <div className="feature-btn">
        <button className="filter-btn" onClick={()=>{
          let filterRestaurant=restaurants.filter((x)=>x.info.avgRating>4.5);
           setFilterRestaurant(filterRestaurant);
        }}>Top Rated Restaurant
        </button>
      </div>
      <div className="resto-container">
     {
        filterrestaurant.map((restaurant)=>{
          return <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><ResturantCards resData={restaurant}/></Link>})
     }
       </div>
     </div>
 
    )
 }
 
 export default Body;
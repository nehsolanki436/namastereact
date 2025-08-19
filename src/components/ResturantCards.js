import fa from '@fortawesome/fontawesome';
import {CDN_URL} from "../utils/constants"

const ResturantCards=(props)=>{
    const {resData}=props;
 
    //Destructing is the industry standard of accessing JSON fields. 
    const{cloudinaryImageId,name,cuisines,locality,avgRating}=resData.info;
    return (
     <div className="resto-card">
     <div className="card">  
      <div className="actual-card">
       <div className="food-image">
        <img src={CDN_URL+cloudinaryImageId} className="food-img"></img>
        </div>
        <div className="resto-details">
        <div className="name-price">
         <h3 className="name">{name}</h3>
         <div className="rating">
         <b>{avgRating}</b><span className="fa fa-star checked"></span>
          </div>
        </div>
        <div className="resto-cuisine">
          <h4>{cuisines.join(", ")}</h4>
        </div>
        <div className="rest-location">
         <h4><i className="fa fa-map-marker" aria-hidden="true"></i>{locality}</h4>  
       </div>    
       </div>
      </div>
      </div>
     </div>
    )
 
 }

 export default ResturantCards;
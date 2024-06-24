import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  
    const {resData} = props;
    const {name , cuisines , avgRating , sla , costForTwo , cloudinaryImageId} = resData?.info; ///did optional chaining here
    return (<div className = "res-card" >
      <p>
      <img className = "res-logo" src = {CDN_URL+cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{(cuisines).join(",")}</h4>
      <h4>{avgRating +" stars"}</h4>
      <h4>{sla.deliveryTime+" mins"}</h4>
      <h4>{costForTwo+" Rupees for two"}</h4>
      </p>
    </div>);
  };


  export default RestaurantCard;
import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API, NON_VEG_IMG, VEG_IMG } from "../utils/constants";
import {MENU_API , VEG_IMG , NON_VEG_IMG} from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";

const Menu = ()=>{

    const [resInfo ,setResInfo] = useState(null);
    const [vegOnly , setVegOnly] = useState(false);

    const {resId} = useParams();

    useEffect(()=>{
    fetchMenu();
    },[]);

    

    const fetchMenu = async ()=>{
        const menuData = await fetch(MENU_API+resId);

        const jsonData = await menuData.json();

       // console.log(jsonData);
        setResInfo(jsonData);
        
    };

    if(resInfo===null){ 
    return <ShimmerMenu/>; }; 
   const { name , avgRating , costForTwo , totalRatingsString , areaName  , sla , isOpen} = resInfo?.data?.cards[2]?.card?.card?.info;
   //const {offers} = resInfo?.data.cards[3].card.card.gridElements.infoWithStyle.offers;

   const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // const {vegClassifier} = itemCards

  // console.log(vegClassifier);

    return  (
        <div className="Menu">

          <div className="restaurant-info">
            <h1>{name}</h1>
            <h2>{areaName}</h2>
            <img className = "restro-img"></img>
            <h2 className="rating">{avgRating} stars</h2>
            <h2>{totalRatingsString}</h2>
            <h2>₹{costForTwo/100} for two</h2>
            <h2>{sla.deliveryTime} minutes delivery time</h2>
            <h2 className={`open-status ${isOpen ? 'open' : 'closed'}`}>
              {isOpen ? "Open" : "Closed"}
            </h2>
        
          </div>
      
          <div className="itemcard_container">

          <label class="switch">
  <input type="checkbox" onChange={()=>{
          setVegOnly(!vegOnly); 
          console.log(vegOnly); 
        }} checked={vegOnly}/>
  <span class="slider">
    <img class = "veg-slider"src = {VEG_IMG}></img>
  </span>
    </label>

            <h2>Menu</h2>
            {itemCards.filter((item)=> !vegOnly || item.card.info.itemAttribute.vegClassifier=="VEG")
            .map((item) => (
              <div key={item?.card?.info?.id} className="menu-item">
                <span className="item-name">{item?.card?.info?.name}
                    <img src = {item.card.info.itemAttribute.vegClassifier=="VEG"?VEG_IMG:NON_VEG_IMG} className = "veg-nonveg"></img>
                </span>
                <span className="item-price">
                  ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                </span>
                <div className="img-container">
                <img src = {CDN_URL+item.card.info.imageId} className="food-img"></img>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      );;
};


export default Menu;
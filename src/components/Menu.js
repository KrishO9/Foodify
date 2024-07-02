import { useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL, NON_VEG_IMG, VEG_IMG } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestaurantCategory";

const Menu = () => {
  const [vegOnly, setVegOnly] = useState(false);
  const [showIndex , setShowIndex] = useState(0);

  const { resId } = useParams();

  const resInfo = useRestaurantInfo(resId);

  if (resInfo === null) {
    return <ShimmerMenu />;
  }
  const {
    name,
    avgRating,
    costForTwo,
    totalRatingsString,
    areaName,
    sla,
    isOpen,
  } = resInfo?.data?.cards[2]?.card?.card?.info;
  //const {offers} = resInfo?.data.cards[3].card.card.gridElements.infoWithStyle.offers;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  //console.log(resInfo);

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log(categories);

  return (
    <div className="justify-center items-center bg-center bg-gray-100 rounded-lg p-5  shadow-md  w-3/4 m-auto">
      {/*Menu*/}
      <div className="m-auto bg-gray-150 rounded-lg p-5 shadow-md text-center items-center ">
        {/*restaurant-info*/}
        <h1 className="font-bold text-3xl m-5">{name}</h1>
        <h2>{areaName}</h2>
        <img className="restro-img"></img>
        <h2 className="rating">{avgRating} stars</h2>
        <h2>{totalRatingsString}</h2>
        <h2>₹{costForTwo / 100} for two</h2>
        <h2>{sla.deliveryTime} minutes delivery time</h2>
        <h2 className={`open-status ${isOpen ? "open" : "closed"}`}>
          {isOpen ? "Open" : "Closed"}
        </h2>
      </div>
      <div className="itemcard_container">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => {
              setVegOnly(!vegOnly);
              //  console.log(vegOnly);
            }}
            checked={vegOnly}
          />
          <span className="slider">
            <img className="veg-slider" src={VEG_IMG}></img>
          </span>
        </label>

        <h2 className="m-2">Menu</h2>
        {categories.map((category,index) => (
          <RestaurantCategory key = {category?.card?.card} p={category?.card?.card} vegOnly = {vegOnly} showItems={index===showIndex?true:false} setShowIndex = {() => setShowIndex(index)}/>
        ))}
      </div>
    </div>
  );
};

export default Menu;

// {itemCards.filter((item)=> !vegOnly || item.card.info.itemAttribute.vegClassifier=="VEG")
//   .map((item) => (
//     <div key={item?.card?.info?.id} className="menu-item">
//       <span className="item-name">{item?.card?.info?.name}
//           <img src = {item.card.info.itemAttribute.vegClassifier=="VEG"?VEG_IMG:NON_VEG_IMG} className = "veg-nonveg"></img>
//       </span>
//       <span className="item-price">
//         ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
//       </span>
//       <div className="img-container">
//       <img src = {CDN_URL+item.card.info.imageId} className="food-img"></img>
//       </div>
//     </div>

//   ))}

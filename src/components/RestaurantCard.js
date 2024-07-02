import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData?.info; // Optional chaining

  return (
    <div className="m-2 p-6 w-52 break-words rounded-md bg-slate-100 transition-transform duration-300 ease-in-out hover:translate-y-[-5px] bg-gray-200 hover:shadow-lg">
      <div>
        <img
          className="w-48 h-44 rounded-md"
          src={CDN_URL + cloudinaryImageId}
          alt={`${name} logo`}
        />
        <h3 className="mt-2 mb-1 text-l font-bold">{name}</h3>
        <h4 className="my-1 text-gray-700 break-words">{cuisines.join(",")}</h4>
        <h4 className="my-1 text-gray-700">{avgRating + " stars"}</h4>
        <h4 className="my-1 text-gray-700">{sla.deliveryTime + " mins"}</h4>
        <h4 className="my-1 text-gray-700">{costForTwo}</h4>
      </div>
    </div>
  );
};



export const PromotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

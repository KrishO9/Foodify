import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ items ,vegOnly}) => {
    console.log("vegOnly in ItemList:", vegOnly);
    const dispatch = useDispatch();

    const handleAddItem = (i) => {
      //dispatch an action to add item to cart
      dispatch(addItem(i));
    //  console.log();
    }


  //console.log(items);
  return (
    <div className="space-y-4">
      {items.filter((i)=> !vegOnly || i.card.info.itemAttribute.vegClassifier==="VEG")
      .map((i) => {
        return (
          <div
            key={i.card.info.id}
            className="border-b border-gray-300 shadow-md p-4 rounded-md bg-white"
          >
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <h3 className="font-bold text-lg">{i.card.info.name}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  ₹{i.card.info.price / 100 || i.card.info.defaultPrice / 100}
                </p>
              </div>
              <img
                src={CDN_URL + i.card.info.imageId}
                alt={i.card.info.name}
                className="w-20 h-20 rounded-md object-cover ml-4"
              />
              <div className="relative right-35 top-7">
                <button className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleAddItem(i)}>
                  +
                </button>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              {i.card.info.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

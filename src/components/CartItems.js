import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const CartItems = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center justify-between p-4 bg-gray-50 shadow-md rounded-md"
        >
          <img
            src={CDN_URL + item.card.info.imageId}
            alt={item.card.info.name}
            className="w-20 h-20 rounded-md object-cover"
          />
          <div className="flex-1 ml-4">
            <h3 className="font-bold text-xl">{item.card.info.name}</h3>
            <p className="text-gray-500 mt-1">
              ₹{((item.card.info.price / 100 || item.card.info.defaultPrice / 100) * item.quantity).toFixed(2)}
            </p>
            <p className="text-gray-500 text-sm mt-2">Quantity: {item.quantity}</p>
            <p className="text-gray-500 text-sm mt-2">{item.card.info.description}</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors"
              onClick={() => handleAddItem(item)}
            >
              +
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors"
              onClick={() => handleRemoveItem(item)}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;

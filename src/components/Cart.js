import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const [totalCost, setTotalCost] = useState(0);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = (items) => {
    return items.reduce((total, item) => {
      const itemPrice = (item.card.info.price / 100 || item.card.info.defaultPrice / 100) * item.quantity;
      return total + itemPrice;
    }, 0);
  };

  const groupItems = (items) => {
    const groupedItems = [];
    const itemMap = new Map();

    items.forEach((item) => {
      if (itemMap.has(item.card.info.id)) {
        itemMap.get(item.card.info.id).quantity += 1;
      } else {
        itemMap.set(item.card.info.id, { ...item, quantity: 1 });
      }
    });

    itemMap.forEach((value) => groupedItems.push(value));
    return groupedItems;
  };

  useEffect(() => {
    const groupedItems = groupItems(cartItems);
    setTotalCost(calculateTotal(groupedItems));
  }, [cartItems]);

  const groupedItems = groupItems(cartItems);
  const deliveryCharge = totalCost > 0 ? 50 : 0;
  const taxes = totalCost * 0.05;

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-5 text-center">Your Cart</h1>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors mb-4"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && (
            <h2 className="text-center text-xl font-semibold mt-4">Your cart is empty.</h2>
          )}
          <div className="mt-6">
            <CartItems items={groupedItems} />
          </div>
          <div className="mt-6 p-4 bg-gray-50 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{totalCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Charges</span>
              <span>₹{deliveryCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Taxes</span>
              <span>₹{taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-4 border-t border-gray-300 pt-4 font-bold">
              <span>Total</span>
              <span>₹{(totalCost + deliveryCharge + taxes).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

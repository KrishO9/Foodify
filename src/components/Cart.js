import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        //dispatch an action to clear the cart
        dispatch(clearCart())
    }
    
    return( <div className = "text-center m-auto p-5 bg-gray-200 w-6/12">
        <h1 className = "text-2xl font-bold m-3 p-3">Cart</h1>
        <button className="bg-black text-white rounded-md p-2 relative bottom-12 -right-1/3 "onClick={handleClearCart}>clear</button>
        {cartItems.length==0 && <h1>Your cart is empty.</h1>}
        <div className="text-left m-2 p-2 bg-gray-300">
        <ItemList items={cartItems}/>
        </div>
    </div>);
};

export default Cart;
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col m-1 p-12 justify-center mx-auto">
      <div className="flex justify-between">
        <h1 className="font-bold sm:text-3xl md:text-xl">Cart Items - {cartItems.length}</h1>
        <button
          className="bg-[#02060c] text-white p-2 m-2 rounded-lg"
          onClick={() => {
            handleClearCart();
          }}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-col justify-center">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;

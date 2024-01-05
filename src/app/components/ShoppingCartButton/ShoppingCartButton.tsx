import { useShoppingCart } from "@/context";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCartButton = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div className="inline-flex justify-between px-3 my-3">
      {cartQuantity}
      <a href="/cart" onClick={openCart} className="inline-flex items-center ">
        <FaShoppingCart />
        <p className="font-medium text-sm text-black dark:text-gray-300 hover:underline pl-1">
          Cart
        </p>
      </a>
    </div>
  );
};

export default ShoppingCartButton;

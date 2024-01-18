import { useCart } from "@/context";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCartButton = () => {
  const { openCart, cartQuantity } = useCart();
  return (
    <div className="inline-flex justify-between px-3 my-3">
      {cartQuantity > 0 && (
        <a
          href="/cart"
          onClick={openCart}
          className="inline-flex items-center "
        >
          {cartQuantity}
          <FaShoppingCart />
          <p className="text-black text-xs font-light md:text-sm lg:text-base lg:font-normal px-1 leading-normal hover:underline">
            Cart
          </p>
        </a>
      )}
    </div>
  );
};

export default ShoppingCartButton;

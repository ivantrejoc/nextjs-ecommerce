import { HiShoppingBag } from "react-icons/hi";

const ShoppingButton = () => {
    return (
      <div className="inline-flex justify-between px-3">
        <a
          href="/products"
          className="inline-flex items-center "
        >
          <HiShoppingBag />
          <p className="font-medium text-md text-black dark:text-gray-300 hover:underline pl-1">Shopping</p>
        </a>
      </div>
    );
  };
  
  export default ShoppingButton;
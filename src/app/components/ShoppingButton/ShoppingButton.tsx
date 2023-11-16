import { HiShoppingBag } from "react-icons/hi";

const ShoppingButton = () => {
    return (
      <div className="inline-flex justify-between px-6">
        <a
          href="/login"
          className="inline-flex items-center font-medium text-black dark:text-gray-300 hover:underline"
        >
          <HiShoppingBag />
          <p className="text-black dark:text-gray-400 pl-1">Shopping</p>
        </a>
      </div>
    );
  };
  
  export default ShoppingButton;
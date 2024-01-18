import { HiShoppingBag } from "react-icons/hi";

const ShoppingButton = () => {
    return (
      <div className="inline-flex justify-between px-3">
        <a
          href="/products"
          className="inline-flex items-center "
        >
          <HiShoppingBag />
          <p className="text-black text-xs font-light md:text-sm lg:text-base lg:font-normal px-1 leading-normal hover:underline">Shopping</p>
        </a>
      </div>
    );
  };
  
  export default ShoppingButton;
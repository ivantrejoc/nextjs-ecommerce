
import { Product } from "../../api/products/models";

import { getProductById } from "../../api/products/services";
import { useShoppingCart } from "@/context";
import Image from "next/image";

type CartItem = {
  id: Product;
  quantity: number;
}

interface Props {
  data: CartItem;
}

async function fetchProductsById(id: Product): Promise<Product | null> {
  return await getProductById(id);
}

const CartItem = async ({data}: Props) => {

  const {id, quantity} = data;
  
  console.log("ESTE ES EL ID QUE VIENE DE CARD DETAIL:", id);
  useShoppingCart();
  
  const product = await fetchProductsById(id);
  if (product === null) return null;
  

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <Image
        className="p-2 rounded-t-lg max-h-96 max-w mx-12 my-12 md:h-80 relative content-center"
        width={20 / 10}
        height={20 / 10}
        sizes="100vw"
        style={{
          width: "40%",
          height: "80%",
          borderRadius: "4%"
        }}
        src={product.image}
        alt={product.title}
        loading="lazy"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
          <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <button className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
              {" "}
              -{" "}
            </button>
            <span className="h-8 w-8 p-2 border bg-white text-center text-xs outline-none">
              1
            </span>
            <button className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
              {" "}
              +{" "}
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">259.000 ₭</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

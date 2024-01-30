"use client";
import { Product } from "@/app/api/products/models";
import { getProducts } from "@/app/api/products/services/product.services";
import { useCart } from "@/context";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { deleteItem, increaseItem, decreaseItem } = useCart();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const productsData = await getProducts();
      setProducts(productsData);
    }
    fetchProducts();
  }, []);

  const product = products.find((e) => e.id == id);
  console.log("ESTE ES PRODUCT QUE VIENE DE API: ", product);
  if (product == null) return null;

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 flex">
      <Image
        className="p-2 rounded-t-lg max-h-96 mx-3 my-3 md:h-100 relative content-center"
        width={30 / 10}
        height={20 / 10}
        sizes="100vw"
        style={{
          width: "10%",
          height: "20%",
          borderRadius: "4%"
        }}
        src={product.image}
        alt={product.title}
        loading="lazy"
      />
      <div className="ml-4 flex w-full  lg:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-sm md:text-md font-medium text-gray-900">{product.title}</h2>
          <p className="text-xs md:text-sm font-semibold text-gray-900">
            Quantity: {quantity}
          </p>
          <p className="text-xs md:text-sm font-semibold text-gray-900">
            {" "}
            Price: ${(product.price * quantity).toFixed(2)}
          </p>
        </div>
        <div className="mt-5 sm:mt-0 flex flex-col items-center lg:justify-between sm:space-y-6 pt-2 px-2 sm:block sm:mx-12">
          <div className="flex items-center border-gray-100">
            <button
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() => decreaseItem(product.id)}
            >
              {" "}
              -{" "}
            </button>
            <span className="h-8 w-8 p-2 border bg-white text-center text-xs outline-none">
              {quantity}
            </span>
            <button
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() => increaseItem(product.id)}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <div className="mt-3 space-x-4">
            <button
              className="flex w-full rounded-md   bg-blue-400 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 px-1 py-1.5 tracking-tighter font-thin lg:font-normal text-xs text-black justify-center"
              onClick={() => deleteItem(product.id)}
            >
              
              <FaTrashCan className ="p-0.5 mt-0.5"/>
             
              
              Remove{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

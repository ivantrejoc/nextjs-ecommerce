"use client";
import { Product } from "@/app/api/products/models";
import { getProducts } from "@/app/api/products/services/product.services";
import { useCart } from "@/context";
import Image from "next/image";
import { useEffect, useState } from "react";

type CartItemProps = {
  id: any;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { deleteItem } = useCart();

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
  if (product !== undefined)
    return (
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <Image
          className="p-2 rounded-t-lg max-h-96 max-w mx-3 my-3 md:h-80 relative content-center"
          width={10 / 10}
          height={10 / 10}
          sizes="100vw"
          style={{
            width: "10%",
            height: "5%",
            borderRadius: "4%"
          }}
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-md font-medium text-gray-900">
              {product.title}
            </h2>
            <p className="text-sm font-semibold text-gray-900">
              Quantity: {quantity}
            </p>
            <p className="text-sm font-semibold">
              {" "}
              Price: ${product.price.toFixed(2)}
            </p>
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
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CartItem;

"use client";
import { useCart } from "@/context";
import CartItem from "../CartItem/CartItem";
import { useEffect, useState } from "react";
import { Product } from "@/app/api/products/models";
import { getProducts } from "@/app/api/products/services/product.services";

const ShoppingCart = () => {
  const { closeCart, cartItems } = useCart();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const productsData = await getProducts();
      setProducts(productsData);
    }
    fetchProducts();
  }, []);

  console.log("ESTOS SON LOS cartItems")

  const subtotal = cartItems
    .reduce((total, cartItem) => {
      const item = products.find((e) => e.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0)
    .toFixed(2);

  const taxes = 0;

  const shipping = (Number(subtotal) * 0.05).toFixed(2);

  const grandTotal = (Number(subtotal) + Number(shipping)).toFixed(2);

  return (
    <div className="h-auto bg-gray-200 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Your Cart</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cartItems.map((item) => (
            <CartItem key={item.id} id={item.id} quantity={item.quantity} />
          ))}
        </div>
        {/* <!-- Sub total --> */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${subtotal}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">${shipping}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="flex flex-col items-end">
              <p className="mb-1 text-lg font-bold justify-end">
                ${grandTotal}
              </p>
              <p className="text-sm text-gray-700">including Taxes</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
          <a href="/checkout" className="mt-6 w-2/4 rounded-md   bg-blue-400 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 py-1.5 mx-auto px-auto font-medium text-black text-center">
            Checkout
          </a>
          <a
            href="/"
            className="font-medium text-sm text-black dark:text-gray-300 hover:underline pl-1"
          >
            Exit
          </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

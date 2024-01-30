"use client";
import { Product } from "@/app/api/products/models";
import { getProducts } from "@/app/api/products/services/product.services";
import { useCart } from "@/context";
import { useEffect, useState } from "react";
import SummaryItem from "../SummaryItem/SummaryItem";

const OrderSummary = () => {
  const { closeCart, cartItems } = useCart();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const productsData = await getProducts();
      setProducts(productsData);
    }
    fetchProducts();
  }, []);



  const orderSummary = cartItems.map((cartItem) => {
    const item = products.find((e) => e.id === cartItem.id);
    if (item) {
      return {
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: cartItem.quantity,
        id: cartItem.id
      };
    }

    return {
      title: 'Producto no encontrado',
      price: 0,
      image: '',
      quantity: 0
    };
  
  });

  console.log("ESTOS SON LOS ELEMENTOS DENTRO DEL CARRITO", orderSummary);

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
    <div className="col-span-1 bg-white shadow rounded-md p-4 lg:block w-full">
      <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
        Order Summary
      </h1>
      {orderSummary.map((item) => (
        <SummaryItem
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          quantity={item.quantity}
        />
      ))}

      <div className="px-5 border-b">
        <div className="flex justify-between py-4 text-gray-600">
          <span>Subtotal</span>
          <span className="font-semibold text-gray-700">${subtotal}</span>
        </div>
        <div className="flex justify-between py-4 text-gray-600">
          <span>Shipping</span>
          <span className="font-semibold text-gray-700">${shipping}</span>
        </div>
      </div>
      <div className="font-semibold text-xl px-5 flex justify-between py-8 text-gray-600">
        <span>Total</span>
        <span>${grandTotal}</span>
      </div>
    </div>
  );
};

export default OrderSummary;

"use client";
import { useCart } from "@/context";
import { ShoppingCart } from "../components/ShoppingCart";



const Cart = () => {
  const { isOpen } = useCart();
  
  if (!isOpen) return null;

  return (
    <main>
      <ShoppingCart  />
    </main>
  );
};

export default Cart;

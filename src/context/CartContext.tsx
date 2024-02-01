"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

type CartProviderProps = {
  children: ReactNode;
};

type CartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuant: (id: number) => number;
  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  deleteItem: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  isOpen: boolean;
};

type CartItem = {
  id: number;
  quantity: number;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if(typeof window !== "undefined") {
      const localCartItems = localStorage.getItem("cartItems");
      const parsedCartItems = localCartItems ? JSON.parse(localCartItems) : [];
      console.log("ITEMS EN localStorage: ", parsedCartItems);
      return parsedCartItems; 
    } else{
      return [];
    }
    
  });
  const [isOpen, setIsOpen] = useState(() => {
    if(typeof window !== "undefined"){
      const localIsOpen = localStorage.getItem("isOpen");
    const parsedIsOpen = localIsOpen ? JSON.parse(localIsOpen) : [];
    console.log("ESTADO DE isOpen EN localStorage: ", parsedIsOpen);
    return parsedIsOpen;
    } else{
      return [];
    }
    
  });

  //Almacenar cambios cartItems e isOpen en localStorage:
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    localStorage.setItem("isOpen", JSON.stringify(isOpen));
  });

  //Obtener cantidad de elementos en el carrito:
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  //Obtener cantidad de un producto en carrito:
  const getItemQuant = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  //Agregar al carrito:
  const increaseItem = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  //Reducir cant de un prod en carrito:
  const decreaseItem = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  //Eliminar elementos del carrito:
  const deleteItem = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  //Abrir carrito:
  const openCart = () => setIsOpen(true);

  //Cerrar carrito
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{
        getItemQuant,
        increaseItem,
        decreaseItem,
        deleteItem,
        openCart,
        closeCart,
        cartQuantity,
        cartItems,
        isOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

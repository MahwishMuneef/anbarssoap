import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";

export type Product = {
  id: string;
  name: string;
  price: number; // in USD
  image: string;
};

export type CartItem = Product & { qty: number };

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD"; item: Product; qty?: number }
  | { type: "REMOVE"; id: string }
  | { type: "SET_QTY"; id: string; qty: number }
  | { type: "CLEAR" };

const CartContext = createContext<{
  state: CartState;
  add: (item: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  total: number;
}>({} as any);

const initial: CartState = { items: [] };

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, qty: i.qty + (action.qty ?? 1) } : i
          ),
        };
      }
      return { items: [...state.items, { ...action.item, qty: action.qty ?? 1 }] };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.id !== action.id) };
    case "SET_QTY":
      return {
        items: state.items.map((i) => (i.id === action.id ? { ...i, qty: action.qty } : i)),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

const STORAGE_KEY = "pb-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial, () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartState) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const total = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [state.items]
  );

  const value = {
    state,
    add: (item: Product, qty?: number) => dispatch({ type: "ADD", item, qty }),
    remove: (id: string) => dispatch({ type: "REMOVE", id }),
    setQty: (id: string, qty: number) => dispatch({ type: "SET_QTY", id, qty }),
    clear: () => dispatch({ type: "CLEAR" }),
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}

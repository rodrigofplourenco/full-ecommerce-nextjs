import { IProduct } from "@/models/IProduct";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IAddProps {
  product: IProduct,
  metadata: any
}

type CartStore = {
  cart: IAddProps[];
  add: (props: IAddProps) => void;
  update: (id: number, props: IAddProps) => void;
  remove: (id: number) => void;
  removeAll: () => void;
};

export const useCartStore = create(
  persist<CartStore, any>(
    (set) => ({
      cart: [],
      add: (productData) => {
        return set((state) => ({
          cart: [
            ...state.cart,
            productData,
          ],
        }));
      },
      update: (id, props) => {
        return set((state) => ({
          cart: state.cart.map((product, idx) => idx != id ? product : props),
        }));
      },
      remove: (idx) =>
        set((state) => ({
          cart: [...state.cart].filter((_, actIdx) => actIdx != idx),
        })),
      removeAll: () => set({ cart: [] }),
    }),
    {
      name: "cart"
    }
  )
);

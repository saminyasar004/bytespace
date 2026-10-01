import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  slug: string;
  title: string;
  image: string;
  price: number;
  creator: string;
};

type CartState = {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (item) =>
        set((s) =>
          s.items.some((i) => i.slug === item.slug) ? s : { items: [...s.items, item] }
        ),
      remove: (slug) => set((s) => ({ items: s.items.filter((i) => i.slug !== slug) })),
      clear: () => set({ items: [] }),
    }),
    { name: "bytespace-cart" }
  )
);

import { create } from "zustand";

type UIState = {
  mobileNavOpen: boolean;
  cartOpen: boolean;
  setMobileNav: (v: boolean) => void;
  setCartOpen: (v: boolean) => void;
};

export const useUIStore = create<UIState>((set) => ({
  mobileNavOpen: false,
  cartOpen: false,
  setMobileNav: (mobileNavOpen) => set({ mobileNavOpen }),
  setCartOpen: (cartOpen) => set({ cartOpen }),
}));

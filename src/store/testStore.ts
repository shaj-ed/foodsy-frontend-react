import { create } from "zustand";

interface StoreType {
  count: number;
  increament: () => void;
  decrement: () => void;
}

export const useTestStore = create<StoreType>((set) => ({
  count: 0,
  increament: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

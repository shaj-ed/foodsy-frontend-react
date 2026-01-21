import { CartItem } from '@/features/cart/types/cart.types';
import { create } from 'zustand';

export interface CartState {
  isLoading: boolean;
  cartId: number | null;
  cartStatus: 'ACTIVE' | 'ORDERED' | 'ABANDONED' | null;
  totalPrice: number;
  deliveryFee: number;
  totalAmount: number;
  cartItems: CartItem[];

  setIsLoading: (v: boolean) => void;
  setCart: (cart: Omit<CartState, 'isLoading' | 'setIsLoading' | 'setCart'>) => void;
}

export const useCartStore = create<CartState>((set) => ({
  isLoading: true,
  cartId: null,
  cartStatus: null,
  totalPrice: 0,
  deliveryFee: 0,
  totalAmount: 0,
  cartItems: [],

  setIsLoading: (v) => {
    set({ isLoading: v });
  },
  setCart: (v) => {
    set({
      cartId: v.cartId,
      cartStatus: v.cartStatus,
      totalPrice: v.totalPrice,
      deliveryFee: v.deliveryFee,
      totalAmount: v.totalAmount,
      cartItems: v.cartItems,
    });
  },
}));

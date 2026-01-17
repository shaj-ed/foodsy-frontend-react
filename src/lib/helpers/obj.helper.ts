import { CartApiResponse } from '@/features/cart/types/cart.types';

// User cart response transformation
export const selectCartTransform = (res: CartApiResponse) => {
  const { data } = res;

  return {
    cartId: data.id,
    cartStatus: data.status,
    totalPrice: data.total,
    cartItems: data.items,
  };
};

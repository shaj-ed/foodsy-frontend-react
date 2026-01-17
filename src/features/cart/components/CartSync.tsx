import { useEffect } from 'react';
import { useCartStore } from '../store/cart.store';
import { useCartQuery } from '../hooks/cart.query';

const CartSync = () => {
  const { data, isSuccess } = useCartQuery();
  const setCart = useCartStore((s) => s.setCart);

  useEffect(() => {
    if (isSuccess && data) {
      setCart(data);
    }
  }, [data, isSuccess]);

  return null;
};

export default CartSync;

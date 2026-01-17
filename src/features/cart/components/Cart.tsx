import { useAuthStore } from '@/store/authStore';
import { useCartStore } from '@/features/cart/store/cart.store';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const cartItems = useCartStore((s) => s.cartItems);

  const itemCounts = cartItems.reduce((acc, curr) => {
    return (acc = acc + curr.quantity);
  }, 0);

  return (
    <>
      {isAuthenticated && (
        <Link to="/cart" className="cursor-pointer relative">
          <ShoppingCart className="text-sky-800" />
          <span className="-top-2.5 left-3.5 absolute w-6 h-6 bg-red-500 rounded-full text-white font-semibold center">
            {itemCounts}
          </span>
        </Link>
      )}
    </>
  );
};

export default Cart;

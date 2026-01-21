import SectionHeading from '@/components/common/section/SectionHeading';
import AlertOneLiner from '@/components/common/ui/AlertOneLiner';
import CartCard from '@/features/cart/components/CartCard';
import CartSummary from '@/features/cart/components/CartSummary';
import { useCartStore } from '@/features/cart/store/cart.store';

const CartPage = () => {
  const cartItems = useCartStore((s) => s.cartItems);

  return (
    <div className="my-8 w-full max-w-6xl px-6 mx-auto min-h-[60vh]">
      <SectionHeading headline="Cart" />
      <div className="flex gap-6 flex-wrap justify-between items-start">
        {cartItems.length <= 0 && (
          <AlertOneLiner title="No item at cart" classname="text-start mt-4" />
        )}
        <div className="mt-8 w-full max-w-[450px]">
          {cartItems.map((item) => (
            <CartCard key={item.id} cart={item} />
          ))}
        </div>

        {cartItems.length > 0 && <CartSummary />}
      </div>
    </div>
  );
};

export default CartPage;

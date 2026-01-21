import { Minus, Plus, Trash } from 'lucide-react';
import { CartItem } from '../types/cart.types';
import pizzapasta from '@/assets/images/categories/pizzapasta.jpg';
import { useDeleteCartItem, useUpdateQuantityItem } from '../hooks/cart.query';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

type CartCardProps = {
  cart: CartItem;
};

const CartCard = ({ cart }: CartCardProps) => {
  const { mutateAsync: updateQuantityItem, isPending } = useUpdateQuantityItem();
  const { mutateAsync: deleteCartItem } = useDeleteCartItem();

  const increment = async () => {
    try {
      toast.loading('Processing..');
      await updateQuantityItem({ productId: cart.productId, quantity: cart.quantity + 1 });
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss();
    }
  };

  const decrement = async () => {
    try {
      toast.loading('Processing..');
      await updateQuantityItem({ productId: cart.productId, quantity: cart.quantity - 1 });
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss();
    }
  };

  const deleteItem = async () => {
    try {
      toast.loading('Processing..');
      await deleteCartItem(cart.productId);
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss();
    }
  };

  return (
    <div
      className={cn(
        'mt-6 flex gap-3 rounded w-full h-[160px] bg-amber-100 pe-6',
        isPending && 'pointer-events-none'
      )}
    >
      <div className="w-full h-full max-w-40 rounded overflow-hidden">
        <img src={pizzapasta} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="w-full flex justify-between items-center ps-6">
        <div>
          <p className="font-medium text-md">{cart.productName}</p>

          <p className="font-medium text-sm mb-4">&#2547; {cart.unitPrice}</p>
          <div className="flex gap-4 items-center">
            <button
              type="button"
              className="cursor-pointer hover:opacity-70 p-[2px] rounded"
              onClick={decrement}
            >
              <Minus size="20px" className="text-black" />
            </button>
            <span className="text-md">{cart.quantity}</span>
            <button
              type="button"
              className="cursor-pointer hover:opacity-70 p-[2px] rounded"
              onClick={increment}
            >
              <Plus size="20px" className="text-black" />
            </button>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="cursor-pointer hover:opacity-70 p-[2px] rounded"
            onClick={deleteItem}
          >
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

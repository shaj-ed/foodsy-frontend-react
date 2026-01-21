import { useCartStore } from '../store/cart.store';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CheckoutDrawer from './CheckoutDrawer';

const CartSummary = () => {
  const { totalAmount, totalPrice, deliveryFee } = useCartStore();

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>

      <hr />

      <CardContent>
        <div className="items-center-between mb-2">
          <span className="text-md font-medium">Subtotal</span>
          <span className="text-md font-medium">{totalPrice}</span>
        </div>
        <div className="items-center-between mb-2">
          <span className="text-md font-medium">Delivery Fee</span>
          <span className="text-md font-medium">{deliveryFee}</span>
        </div>

        <hr />

        <div className="items-center-between mt-3">
          <span className="text-md font-medium">Total</span>
          <span className="text-md font-medium">{totalAmount}</span>
        </div>
      </CardContent>

      <CardFooter>
        <CheckoutDrawer trigger={<Button className="w-full cursor-pointer">Checkout</Button>} />
      </CardFooter>
    </Card>
  );
};

export default CartSummary;

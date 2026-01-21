import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import {
  CheckoutFormType,
  checkoutSchema,
  initCheckoutFormValues,
} from '../schemas/checkout.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import RHFInput from '@/components/common/form/RHFInput';
import AlertOneLiner from '@/components/common/ui/AlertOneLiner';
import { useCheckout } from '../hooks/cart.query';
import { toast } from 'sonner';

type CheckoutDrawerProps = {
  trigger: ReactNode;
};

const CheckoutDrawer = ({ trigger }: CheckoutDrawerProps) => {
  const { mutateAsync: checkoutCart } = useCheckout();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<CheckoutFormType>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: initCheckoutFormValues,
  });

  const onSubmit = async (data: CheckoutFormType) => {
    try {
      console.log(data);
      toast.loading('Processing..');
      const res = await checkoutCart(data);
      toast.dismiss();
      toast.info(res.message);
    } catch (error) {
      toast.dismiss();
      console.log(error);
    }
  };

  const cancelForm = () => {
    reset();
  };

  return (
    <Drawer direction="right">
      <form onSubmit={handleSubmit(onSubmit)} id="checkout">
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
        <DrawerContent className="">
          <DrawerHeader>
            <DrawerTitle>Checkout Form</DrawerTitle>
          </DrawerHeader>
          <div className="px-6">
            {/* Full name */}
            <div className="mb-4">
              <RHFInput<CheckoutFormType>
                name="fullName"
                control={control}
                label="Full name"
                placeholder="Enter full name"
              />
            </div>

            {/* Phone number */}
            <div className="mb-4">
              <RHFInput<CheckoutFormType>
                name="phoneNumber"
                control={control}
                label="Phone number"
                placeholder="Enter phone number"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <RHFInput<CheckoutFormType>
                name="address"
                control={control}
                label="Address"
                placeholder="Enter full address"
              />
            </div>

            {/* Payment type */}
            <AlertOneLiner title="We only taking Cash On Delivery now" />
          </div>
          <DrawerFooter>
            <Button type="submit" form="checkout" disabled={isSubmitting}>
              Submit
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" onClick={cancelForm}>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </form>
    </Drawer>
  );
};

export default CheckoutDrawer;

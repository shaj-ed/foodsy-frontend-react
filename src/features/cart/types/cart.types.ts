import { CheckoutFormType } from '../schemas/checkout.schema';

export type CartItem = {
  id: number;
  productId: number;
  productName: number;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  notes: string | null;
};

export type CartApiResponse = {
  data: {
    id: number;
    status: 'ACTIVE' | 'ORDERED' | 'ABANDONED';
    total: number;
    deliveryFee: number;
    totalAmount: number;
    items: CartItem[];
  };
};

// Add a product at cart type
export type AddCartPayload = {
  productId: number;
  quantity: number;
  notes: string;
};

export type CheckoutPayload = CheckoutFormType;

export type CheckoutApiResponse = {
  message: string;
  data: {
    subTotal: number;
    totalAmount: number;
  };
};

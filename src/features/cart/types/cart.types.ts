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
    items: CartItem[];
  };
};

// Add a product at cart type
export type AddCartPayload = {
  productId: number;
  quantity: number;
  notes: string;
};

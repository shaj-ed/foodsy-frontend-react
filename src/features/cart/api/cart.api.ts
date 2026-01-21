import { api } from '../../../lib/axios';
import {
  AddCartPayload,
  CartApiResponse,
  CheckoutApiResponse,
  CheckoutPayload,
} from '@/features/cart/types/cart.types';

const ADD_ITEM_CART_URL = '/cart';
const UPDATE_ITEM_QUANTITY_URL = '/cart/update-quantity';
const DELETE_ITEM_URL = '/cart/remove-item';
const CHECKOUT_URL = '/checkout';

export const addItem = async (payload: AddCartPayload): Promise<void> => {
  const { data } = await api.post(ADD_ITEM_CART_URL, payload);
  return data;
};

export const getCart = async (): Promise<CartApiResponse> => {
  const { data } = await api.get(ADD_ITEM_CART_URL);
  return data;
};

export const updateItemQuantity = async (
  payload: Partial<AddCartPayload>
): Promise<CartApiResponse> => {
  const { data } = await api.put(`${UPDATE_ITEM_QUANTITY_URL}/${payload.productId}`, {
    quantity: payload.quantity,
  });
  return data;
};

export const deleteCartItem = async (productId: number): Promise<CartApiResponse> => {
  const { data } = await api.delete(`${DELETE_ITEM_URL}/${productId}`);
  return data;
};

export const checkoutCart = async (payload: CheckoutPayload): Promise<CheckoutApiResponse> => {
  const { data } = await api.post(CHECKOUT_URL, payload);
  return data;
};

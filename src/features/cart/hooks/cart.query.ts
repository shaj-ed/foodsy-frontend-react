import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addItem, deleteCartItem, getCart, updateItemQuantity } from '../api/cart.api';
import { selectCartTransform } from '../../../lib/helpers/obj.helper';
import { useAuthStore } from '@/store/authStore';

export const useCartQuery = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  return useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
    select: selectCartTransform,
    enabled: isAuthenticated,
  });
};

export const useAddCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addItem,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  });
};

export const useUpdateQuantityItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateItemQuantity,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  });
};

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCartItem,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  });
};

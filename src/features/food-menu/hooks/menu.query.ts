import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addMenu, deleteMenuById, getMenuList, updateMenu, uploadMenuFiles } from '../api/menu.api';
import {
  MenuPayload,
  MenuResponseList,
  UpdateMenuPayload,
  UpdateMenuResponse,
} from '../types/menu.type';
import { toast } from 'sonner';

export const useMenuList = (page: number, limit: number, categoryId?: number) => {
  return useQuery({
    queryKey: ['menus', { page, limit, categoryId }],
    queryFn: () => getMenuList(page, limit, categoryId),
  });
};

export const useAddMenu = () => {
  const queryClient = useQueryClient();

  return useMutation<MenuResponseList, unknown, MenuPayload & { files: File[] }>({
    mutationFn: ({ files, ...payload }) => addMenu(payload),
    onSuccess: async (response, variables) => {
      try {
        await uploadMenuFiles(response.id, variables.files);
      } catch (error) {
        console.log(error);
        toast.error('Menu created not image, contact support');
      }

      queryClient.invalidateQueries({ queryKey: ['menus'] });
    },
  });
};

export const useUpdateMenu = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateMenuResponse, unknown, UpdateMenuPayload & { files: File[] }>({
    mutationFn: ({ files, id, ...payload }) => updateMenu(id, payload),
    onSuccess: async (response, variables) => {
      try {
        await uploadMenuFiles(response.data.id, variables.files);
      } catch (error) {
        console.log(error);
        toast.error('Menu created not image, contact support');
      }

      queryClient.invalidateQueries({ queryKey: ['menus'] });
    },
  });
};

export const useDeleteMenu = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMenuById,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['menus'] }),
  });
};

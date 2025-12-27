import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addMenu, getMenuList, uploadMenuFiles } from '../api/menu.api';
import { MenuPayload, MenuResponseList } from '../types/menu.type';
import { toast } from 'sonner';

export const useMenuList = (page: number, limit: number) => {
  return useQuery({
    queryKey: ['menus', { page, limit }],
    queryFn: () => getMenuList(page, limit),
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

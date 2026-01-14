import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addMenu,
  deleteMenuById,
  getMenuById,
  getMenuImagesById,
  getMenuList,
  updateMenu,
  uploadMenuFiles,
} from '../api/menu.api';
import {
  MenuFilter,
  MenuPayload,
  MenuResponseList,
  UpdateMenuPayload,
  UpdateMenuResponse,
} from '../types/menu.type';
import { toast } from 'sonner';

export const useMenuList = (
  page: number,
  limit: number,
  categoryId?: number,
  filters?: MenuFilter
) => {
  return useQuery({
    queryKey: ['menus', { page, limit, categoryId, filters }],
    queryFn: () => getMenuList(page, limit, categoryId, filters),
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

export const useMenuDetails = (menuId?: number) => {
  return useQuery({
    queryKey: ['menu-details', menuId],
    queryFn: () => getMenuById(menuId as number),
    enabled: Number.isFinite(menuId),

    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export const useMenuImages = (menuId?: number) => {
  return useQuery({
    queryKey: ['menu-images', menuId],
    queryFn: () => getMenuImagesById(menuId as number),
    enabled: Number.isFinite(menuId),

    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export const useMenuDetailsPages = (menuId?: number) => {
  const productQuery = useMenuDetails(menuId);
  const imagesQuery = useMenuImages(menuId);

  return {
    isLoading: productQuery.isLoading || imagesQuery.isLoading,
    error: productQuery.error || imagesQuery.error,
    images: imagesQuery.data,
    product: productQuery.data,
  };
};

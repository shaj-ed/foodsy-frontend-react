import { api } from '@/lib/axios';
import {
  MenuListWithPagination,
  MenuPayload,
  MenuResponseList,
  UpdateMenuResponse,
} from '../types/menu.type';

export const MENU_API_URL = '/product';

export const getMenuList = async (page: number, limit: number): Promise<MenuListWithPagination> => {
  const { data } = await api.get<MenuListWithPagination>(MENU_API_URL, {
    params: { page, limit },
  });
  return data;
};

export const addMenu = async (payload: MenuPayload): Promise<MenuResponseList> => {
  const { data } = await api.post<MenuResponseList>(MENU_API_URL, payload);
  return data;
};

export const uploadMenuFiles = async (id: number, files: File[]) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('files', file);
  });

  await api.post(`${MENU_API_URL}/${id}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getMenuById = async (id: number): Promise<{ data: MenuResponseList }> => {
  const { data } = await api.get(`${MENU_API_URL}/${id}`);
  return data;
};

export const getMenuImagesById = async (id: number): Promise<{ data: string[] }> => {
  const { data } = await api.get(`${MENU_API_URL}/${id}/images`);
  return data;
};

export const updateMenu = async (id: number, payload: MenuPayload): Promise<UpdateMenuResponse> => {
  const { data } = await api.put(`${MENU_API_URL}/${id}`, payload);
  return data;
};

export const deleteMenuById = async (id: number): Promise<void> => {
  await api.delete(`${MENU_API_URL}/${id}`);
};

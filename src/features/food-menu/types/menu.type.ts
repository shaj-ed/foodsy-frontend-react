import { PaginationResponse } from '@/types/common.types';

export type MenuPayload = {
  productName: string;
  description: string;
  price: number;
  categoryId: number;
};

export type MenuResponseList = MenuPayload & {
  id: number;
  createdAt: string;
  image: string;
};

export type UpdateMenuPayload = Omit<MenuResponseList, 'createdAt' | 'image'>;

export type MenuListWithPagination = {
  data: MenuResponseList[];
  success: boolean;
  pagination: PaginationResponse;
};

export type UpdateMenuResponse = {
  data: MenuResponseList;
  message: string;
};

export type MenuFilter = {
  minPrice: number;
  maxPrice: number;
};

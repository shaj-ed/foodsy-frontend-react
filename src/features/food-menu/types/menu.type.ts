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
};

export type MenuListWithPagination = {
  data: MenuResponseList[];
  success: boolean;
  pagination: PaginationResponse;
};

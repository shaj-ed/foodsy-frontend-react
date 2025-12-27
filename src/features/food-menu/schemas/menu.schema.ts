import { createMultipleFilesSchema } from '@/lib/validators/fileSchema';
import { z } from 'zod';

const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

export const menuSchema = z
  .object({
    productName: z.string().nonempty('Product name is required'),
    description: z.string().nonempty('A short description is required'),
    price: z.coerce.number().min(1, 'Provide valid price'),

    categoryName: z.string().nonempty('Provide a category'),

    categoryId: z.number().nullable(),

    files: createMultipleFilesSchema('Image is required', allowedTypes, 1, 1, 4),
  })
  .refine((data) => data.categoryId !== null, {
    message: 'Provide a category name',
    path: ['categoryId'],
  });

export type MenuFormType = z.infer<typeof menuSchema>;

export const initMenuFormValues: MenuFormType = {
  productName: '',
  description: '',
  price: 0,
  categoryName: '',
  categoryId: null,
  files: [],
};

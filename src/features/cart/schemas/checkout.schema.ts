import { z } from 'zod';

export const checkoutSchema = z.object({
  fullName: z.string().nonempty('Provide full name'),
  phoneNumber: z
    .string()
    .nonempty('Provide phone number')
    .min(11, 'Provide valid phone number')
    .max(11, 'Provide valid phone number'),
  address: z.string().nonempty('Provide full address'),
  paymentType: z.enum(['CASH', 'ONLINE']),
});

export type CheckoutFormType = z.infer<typeof checkoutSchema>;

export const initCheckoutFormValues: CheckoutFormType = {
  fullName: '',
  phoneNumber: '',
  address: '',
  paymentType: 'CASH',
};

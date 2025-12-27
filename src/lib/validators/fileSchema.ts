import { z } from 'zod';

export const createFileSchema = (
  requiredMessage: string,
  allowedTypes: string[],
  maxSizeMB = 1
) => {
  return z
    .instanceof(File)
    .optional()
    .refine((file) => file !== undefined, {
      message: requiredMessage,
    })
    .refine((file) => file?.size <= maxSizeMB * 1024 * 1024, {
      message: `File size should be less than ${maxSizeMB}MB`,
    })
    .refine((file) => file && allowedTypes.includes(file.type), {
      message: `Only ${allowedTypes.map((t) => t.split('/')[1]).join(', ')} files are allowed`,
    })
    .transform((file) => file as File);
};

export const createMultipleFilesSchema = (
  requiredMessage: string,
  allowedTypes: string[],
  maxSizeMB = 1,
  minFiles = 1,
  maxFiles = 5
) => {
  return z
    .array(createFileSchema(requiredMessage, allowedTypes, maxSizeMB))
    .min(minFiles, { message: `At least ${minFiles} file is required` })
    .max(maxFiles, { message: `Maximum ${maxFiles} files are allowed` });
};

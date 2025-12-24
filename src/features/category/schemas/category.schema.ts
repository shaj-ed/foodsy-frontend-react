import { createFileSchema } from "@/lib/validators/fileSchema";
import { z } from "zod";

const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

export const categorySchema = z.object({
  categoryName: z.string().min(1, "Category name is required"),
  description: z.string().min(1, "A short description is required"),
  file: createFileSchema("Category Image is required", allowedTypes),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;

export const initCategoryFormValues: Partial<CategoryFormValues> = {
  categoryName: "",
  description: "",
  file: undefined,
};
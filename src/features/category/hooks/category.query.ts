import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addCategory, deleteCategoryById, getCategoryList, updateCategory, uploadCategoryImage } from "../api/category.api";
import { AddCategoryPayload, AddCatgoryResponse, CategoryResponse, UpdateCategoryPayload } from "../types/category.type";
import { toast } from "sonner";

export const useCategoryList = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getCategoryList,
    })
}

export const useCreateCategory = () => {
    const queryClient = useQueryClient();

    return useMutation<AddCatgoryResponse, unknown, AddCategoryPayload & {file: File}>({
        mutationFn: addCategory,
        onSuccess: async (response, variables) => {
            try {
                await uploadCategoryImage(response.id, variables.file);
            } catch (error) {
                console.log(error)
                toast.error("Category created not image, contact support")
            }
            queryClient.invalidateQueries({queryKey: ["categories"]})
        }
    })
}

export const useUpdateCategory = () => {
    const queryClient = useQueryClient();

    return useMutation<CategoryResponse, unknown, UpdateCategoryPayload & {file: File}>({
        mutationFn: updateCategory,
        onSuccess: async (response, variables) => {
             try {
                await uploadCategoryImage(response.data.id, variables.file);
            } catch (error) {
                console.log(error)
                toast.error("Category created not image, contact support")
            }
            queryClient.invalidateQueries({queryKey: ["categories"]})
        }
    })
}

export const useDeleteCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteCategoryById,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["categories"]})
    })
}
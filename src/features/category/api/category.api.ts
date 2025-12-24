import { api } from "@/lib/axios"
import { AddCategoryPayload, AddCatgoryResponse, CategoryListResponse, CategoryResponse, UpdateCategoryPayload } from "../types/category.type"

const CATEGORY_API_URL = "/category"

export const getCategoryList = async (): Promise<CategoryListResponse[]> => {
    const {data} = await api.get<CategoryListResponse[]>(CATEGORY_API_URL);
    return data;
}

export const getCategoryById = async (id: number): Promise<CategoryResponse> => {
    const {data} = await api.get<CategoryResponse>(`${CATEGORY_API_URL}/${id}`);
    return data;
}

export const addCategory = async (payload: AddCategoryPayload): Promise<AddCatgoryResponse> => {
    const {data} = await api.post<AddCatgoryResponse>(CATEGORY_API_URL, payload);
    return data;
}

export const updateCategory = async (payload: UpdateCategoryPayload): Promise<CategoryResponse> => {
    const {id, ...sendvalues} = payload 
    const {data} = await api.put(`${CATEGORY_API_URL}/${id}`, sendvalues)
    return data;
}

export const uploadCategoryImage = async (id: number, file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    await api.post(`${CATEGORY_API_URL}/${id}/upload`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

export const deleteCategoryById = async (id: number): Promise<void> => {
    await api.delete(`${CATEGORY_API_URL}/${id}`)
}
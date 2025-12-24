export type AddCategoryPayload = {
    categoryName: string
    description: string
}

export type AddCatgoryResponse = AddCategoryPayload & {
    id: number
}

export type UpdateCategoryPayload = AddCatgoryResponse

export type CategoryListResponse = AddCatgoryResponse & {
    image: string
}

export type CategoryResponse = {
    message: string
    data: CategoryListResponse
}
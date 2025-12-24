import { create } from "zustand";
import { CategoryResponse } from "../types/category.type";

interface CategoryStoreStates {
    searchTerm: string
    openModal: boolean
    selectedCategory: CategoryResponse | null

    setSearchTerm: (v: string) => void
    setOpenModal: (v: boolean) => void
    setSelectedCategory: (category: CategoryResponse) => void
    clearSelected: () => void
}

const useCategoryStore = create<CategoryStoreStates>((set) => ({
    searchTerm: "",
    openModal: false,
    selectedCategory: null,

    setSearchTerm: (v) => {
        set({
            searchTerm: v,
        })
    },
    setOpenModal: (v) => {
        set({
            openModal: v
        })
    },
    setSelectedCategory: (category) => {
        set({
            selectedCategory: category
        })
    },
    clearSelected: () => {
        set({
            selectedCategory: null
        })
    }
}))

export default useCategoryStore;
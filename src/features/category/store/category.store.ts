import { create } from "zustand";

interface CategoryStoreStates {
    searchTerm: string;

    setSearchTerm: (v: string) => void
}

const useCategoryStore = create<CategoryStoreStates>((set) => ({
    searchTerm: "",

    setSearchTerm: (v) => {
        set({
            searchTerm: v,
        })
    }
}))

export default useCategoryStore;
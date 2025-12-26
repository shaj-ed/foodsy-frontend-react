import { create } from 'zustand';

interface MenuStore {
  searchTerm: string;
  openModal: boolean;

  setSearchTerm: (v: string) => void;
  setOpenModal: (v: boolean) => void;
}

const useMenuStore = create<MenuStore>((set) => ({
  searchTerm: '',
  openModal: false,

  setSearchTerm: (v) => {
    set({
      searchTerm: v,
    });
  },
  setOpenModal: (v) => {
    set({
      openModal: v,
    });
  },
}));

export default useMenuStore;

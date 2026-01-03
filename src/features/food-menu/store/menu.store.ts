import { create } from 'zustand';
import { MenuResponseList } from '../types/menu.type';

interface MenuStore {
  searchTerm: string;
  openModal: boolean;
  selectedMenu: MenuResponseList | null;
  selectedMenuFiles: File[] | null;

  setSearchTerm: (v: string) => void;
  setOpenModal: (v: boolean) => void;
  setSelectedMenu: (v: MenuResponseList) => void;
  clearSelected: () => void;
  setSelectedMenuFiles: (v: File[]) => void;
}

const useMenuStore = create<MenuStore>((set) => ({
  searchTerm: '',
  openModal: false,
  selectedMenu: null,
  selectedMenuFiles: null,

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
  setSelectedMenu: (v) => {
    set({
      selectedMenu: v,
    });
  },
  clearSelected: () => {
    set({
      selectedMenu: null,
    });
  },
  setSelectedMenuFiles: (v) => {
    set({
      selectedMenuFiles: v,
    });
  },
}));

export default useMenuStore;

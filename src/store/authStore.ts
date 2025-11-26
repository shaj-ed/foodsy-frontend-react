import { UserType } from "@/types/auth";
import { create } from "zustand";

export interface AuthState {
  user: UserType | null;
  setUser: (user: UserType) => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  setUser(user) {
    set({
      user,
      isAuthenticated: !!user,
    });
  },
}));

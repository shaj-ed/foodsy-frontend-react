import { UserType } from "@/types/auth";
import { create } from "zustand";

export interface AuthState {
  accessToken: string | null;
  user: UserType | null;
  setUser: (user: UserType) => void;
  setAccessToken: (token: string | null) => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  isAuthenticated: false,
  isLoading: false,
  setUser(user) {
    set({
      user,
      isAuthenticated: !!user,
    });
  },
  setAccessToken: (token) => {
    set({
      accessToken: token,
    });
  },
}));

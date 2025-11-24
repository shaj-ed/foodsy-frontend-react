import { IUser } from "@/types/auth";
import { create } from "zustand";

export interface AuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  login: (email: string, password: string) => {},
}));

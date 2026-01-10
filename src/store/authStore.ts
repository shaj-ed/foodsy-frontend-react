import { currentUser, logout, refreshAccessToken } from '@/lib/api/auth';
import { UserType } from '@/types/auth';
import { create } from 'zustand';

export interface AuthState {
  accessToken: string | null;
  user: UserType | null;
  setUser: (user: UserType) => void;
  setAccessToken: (token: string | null) => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  initializeAuth: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  isAuthenticated: false,
  isLoading: true,

  setUser: (user) => {
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

  initializeAuth: async () => {
    try {
      const { accessToken } = await refreshAccessToken();
      set({
        accessToken,
      });
      const { data } = await currentUser();
      console.log(data);

      set({
        user: data,
        isAuthenticated: true,
      });
    } catch (error) {
      set({
        accessToken: null,
        user: null,
        isAuthenticated: false,
      });
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    try {
      await logout();
      set({
        accessToken: null,
        user: null,
        isAuthenticated: false,
      });
    } catch (error) {
      console.log(error);
    } finally {
      set({
        isLoading: false,
      });
    }
  },
}));

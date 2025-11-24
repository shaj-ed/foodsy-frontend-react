/* eslint-disable react-refresh/only-export-components */
import { IUser } from "@/types/auth";
import { createContext, ReactNode, useState } from "react";

interface AuthContextType {
  user: IUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = (email: string, password: string) => {};

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, isLoading, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};

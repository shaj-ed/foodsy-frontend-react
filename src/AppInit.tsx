import { ReactNode, useEffect } from "react";
import { useAuthStore } from "./store/authStore";

type AppInitProps = {
  children: ReactNode;
};

const AppInit = ({ children }: AppInitProps) => {
  const { setUser, setAccessToken } = useAuthStore.getState();

  useEffect(() => {
    console.log("hello");
  }, []);

  return <>{children}</>;
};

export default AppInit;

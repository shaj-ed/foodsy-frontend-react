import { ReactNode, useEffect, useRef } from "react";
import { useAuthStore } from "./store/authStore";
import SplashScreen from "./components/ui/splash-screen";

type AppInitProps = {
  children: ReactNode;
};

const AppInit = ({ children }: AppInitProps) => {
  const initialApp = useRef(false);
  const initializeAuth = useAuthStore((s) => s.initializeAuth);
  const isLoading = useAuthStore((s) => s.isLoading);

  useEffect(() => {
    if (initialApp.current) return;
    initialApp.current = true;

    initializeAuth();
  }, []);

  if (isLoading) return <SplashScreen />;

  return <>{children}</>;
};

export default AppInit;

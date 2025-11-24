import useAuth from "@/hooks/useAuth";
import { useAuthStore } from "@/store/authStore";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PublicRouteProps = {
  children: ReactNode;
};

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PublicRoute;

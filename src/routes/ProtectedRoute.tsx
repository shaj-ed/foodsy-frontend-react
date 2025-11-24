import useAuth from "@/hooks/useAuth";
import { useAuthStore } from "@/store/authStore";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtecredRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtecredRouteProps) => {
  const { isLoading, isAuthenticated } = useAuthStore();

  if (isLoading) {
    return <p>Loading..</p>;
  }

  if (!isAuthenticated) {
    // Redirect to login page
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

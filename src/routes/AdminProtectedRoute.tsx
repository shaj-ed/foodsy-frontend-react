import { useAuthStore } from "@/store/authStore";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type AdminProtectedRouteProps = {
  children: ReactNode;
};

const AdminProtectedRoute = ({ children }: AdminProtectedRouteProps) => {
  const { isAuthenticated, isLoading, user } = useAuthStore();

  if (isLoading) {
    return <p>Loading..</p>;
  }

  //   if (!isAuthenticated) {
  //     // Redirect to login page
  //     return <Navigate to="/auth/login" replace />;
  //   }

  //   if (user?.role !== "admin") {
  //     // will redirect to an specific page
  //     return <Navigate to="/" replace />;
  //   }

  return children;
};

export default AdminProtectedRoute;

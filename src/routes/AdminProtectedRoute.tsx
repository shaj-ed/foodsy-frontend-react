import { useAuthStore } from "@/store/authStore";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, user } = useAuthStore();

  // if (!isAuthenticated || user?.role !== "ADMIN") {
  //   return <Navigate to="/auth/login" replace />;
  // }

  return <>{children}</>;
};

export default AdminProtectedRoute;

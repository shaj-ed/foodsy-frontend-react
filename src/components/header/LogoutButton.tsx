import { useAuthStore } from "@/store/authStore";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const logout = useAuthStore((e) => e.logout);
  const isAuthenticated = useAuthStore((e) => e.isAuthenticated);
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();

    navigate("/", { replace: true });
  };

  return (
    <>
      {isAuthenticated && (
        <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
      )}
    </>
  );
};

export default LogoutButton;

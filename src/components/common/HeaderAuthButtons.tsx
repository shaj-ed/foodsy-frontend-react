import { useAuthStore } from "@/store/authStore";
import { UserRoundPlus } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  color: string;
};

const HeaderAuthButtons = ({ color }: Props) => {
  const { isAuthenticated } = useAuthStore.getState();

  if (isAuthenticated) return <></>;

  return (
    <>
      <div className="flex gap-1">
        <UserRoundPlus size="16px" className={`text-sm ${color}`} />
        <Link to="/auth/login" className={`text-sm ${color}`}>
          Login
        </Link>
        <span className={`text-sm ${color}`}>/</span>
        <Link to="/auth/registration" className={`text-sm ${color}`}>
          Registration
        </Link>
      </div>
    </>
  );
};

export default HeaderAuthButtons;

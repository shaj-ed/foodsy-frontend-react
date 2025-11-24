import Logo from "@/components/common/Logo";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-screen min-h-screen bg-neutral-200 py-6">
      <div className="text-center">
        <Logo size="text-4xl" />
        <p className="text-lg font-medium">
          Savor Every Bite, Start Your Journey!
        </p>
        {/* <p className="italic px-2 max-w-xl mx-auto mt-5">
          Discover a world of delicious flavors at your fingertips. Sign in to
          explore mouthwatering dishes, exclusive offers, and a seamless food
          ordering experience.
        </p> */}
      </div>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;

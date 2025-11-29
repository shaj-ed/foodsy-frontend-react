import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import LabelError from "@/components/common/LabelError";
import { useMutation } from "@tanstack/react-query";
import { currentUser, loginUser } from "@/lib/api/auth";
import ButtonLoading from "@/components/ui/button-loading";
import { toast } from "sonner";
import { useAuthStore } from "@/store/authStore";

const LoginSchema = z.object({
  username: z.string().nonempty("Username is required"),
  password: z.string().nonempty("Password field required"),
});

type LoginType = z.infer<typeof LoginSchema>;

const Login = () => {
  const { setAccessToken, setUser } = useAuthStore.getState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutateAsync, isError } = useMutation({
    mutationFn: loginUser,
    onSuccess: async (values) => {
      setAccessToken(values.accessToken);
      const response = await currentUser();
      const user = response.data;
      setUser(user);

      // Navigate
      if (user.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    },
    onError: () => {
      toast.error("Authentication failed, try again");
    },
  });

  const onSubmitLogin: SubmitHandler<LoginType> = async (data) => {
    await mutateAsync(data);
  };

  return (
    <section className="px-2 max-w-sm mx-auto mt-12">
      <h4 className="font-semibold text-2xl mb-6">Log In</h4>

      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <div className="mb-4">
          <Input
            type="text"
            className="py-5"
            placeholder="Enter username.."
            {...register("username")}
          />

          <LabelError message={errors.username?.message} />
        </div>

        <div className="mb-5">
          <Input
            type="password"
            className="py-5"
            placeholder="Password"
            {...register("password")}
          />

          <LabelError message={errors.password?.message} />
        </div>

        {isError && (
          <p className="text-red-500 text-sm font-semibold mb-2">
            Authentication Failed, Try Again
          </p>
        )}

        <div className="flex justify-between items-center">
          <Button
            size="lg"
            className="cursor-pointer uppercase"
            disabled={isSubmitting}
          >
            {isSubmitting ? <ButtonLoading /> : "Login"}
          </Button>

          <Link
            to="/auth/forgot-password"
            className="cursor-pointer pe-0 text-purple-800 hover:text-purple-600 font-medium"
          >
            Forgot password?
          </Link>
        </div>
      </form>

      <Link
        to="/auth/registration"
        className="block w-full bg-gray-900 p-3 text-white text-center font-medium mt-10 hover:bg-gray-800 rounded"
      >
        Create a new Account
      </Link>
    </section>
  );
};

export default Login;

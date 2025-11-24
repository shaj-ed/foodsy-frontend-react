import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import LabelError from "@/components/common/LabelError";

const LoginSchema = z.object({
  email: z.string().email("Provide a valid email"),
  password: z.string().min(1, "Password field required"),
});

type LoginType = z.infer<typeof LoginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmitLogin: SubmitHandler<LoginType> = (data) => {
    console.log(data);
  };

  return (
    <section className="px-2 max-w-sm mx-auto mt-12">
      <h4 className="font-semibold text-2xl mb-6">Log In</h4>

      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <div className="mb-4">
          <Input
            className="py-5"
            placeholder="Enter email.."
            {...register("email")}
          />

          <LabelError message={errors.email?.message} />
        </div>

        <div className="mb-5">
          <Input
            className="py-5"
            placeholder="Password"
            {...register("password")}
          />

          <LabelError message={errors.password?.message} />
        </div>

        <div className="flex justify-between items-center">
          <Button size="lg" className="cursor-pointer uppercase">
            Login
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

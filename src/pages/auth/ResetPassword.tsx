import LabelError from "@/components/common/LabelError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const ResetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be minimum 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

type ResetPassType = z.infer<typeof ResetPasswordSchema>;

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPassType>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const onSubmitReset: SubmitHandler<ResetPassType> = (data) => {
    console.log(data);
  };

  return (
    <section className="px-2 max-w-md mx-auto mt-6">
      <h4 className="font-semibold text-2xl mb-1">Reset your password</h4>
      <p className="mb-8">Type your new password</p>

      <form onSubmit={handleSubmit(onSubmitReset)}>
        <div className="mb-5">
          <Label htmlFor="password" className="mb-2 required">
            Password
          </Label>
          <Input
            className="py-5"
            placeholder="Password"
            {...register("password")}
          />

          <LabelError message={errors.password?.message} />
        </div>

        <div className="mb-5">
          <Label htmlFor="confirmPassword" className="mb-2 required">
            Confirm Password
          </Label>
          <Input
            className="py-5"
            placeholder="Confitm password"
            {...register("confirmPassword")}
          />

          <LabelError message={errors.confirmPassword?.message} />
        </div>

        <Button size="lg" type="submit" className="cursor-pointer uppercase">
          Reset
        </Button>
      </form>

      <Link
        to="/auth/login"
        className="block w-full bg-gray-900 p-3 text-white text-center font-medium mt-10 hover:bg-gray-800 rounded uppercase"
      >
        Back to login
      </Link>
    </section>
  );
};

export default ResetPassword;

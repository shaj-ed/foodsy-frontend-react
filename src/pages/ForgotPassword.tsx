import LabelError from "@/components/common/LabelError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const ResetPasswordSchema = z.object({
  email: z.string().email("Provide a valid email"),
});

type ResetPasswordType = z.infer<typeof ResetPasswordSchema>;

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordType>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const onSubmitResetPass: SubmitHandler<ResetPasswordType> = (data) => {
    console.log(data);
  };

  return (
    <section className="px-2 max-w-sm mx-auto mt-12">
      <h4 className="font-semibold text-2xl mb-1">Reset Password</h4>
      <p className="mb-5">Type registered email to reset password</p>

      <form onSubmit={handleSubmit(onSubmitResetPass)}>
        <div className="mb-4">
          <Input
            className="py-5"
            placeholder="Enter email.."
            {...register("email")}
          />

          <LabelError message={errors.email?.message} />
        </div>

        <Button size="lg" className="cursor-pointer uppercase">
          Next
        </Button>
      </form>

      <Link
        to="/auth/registration"
        className="block w-full bg-gray-900 p-3 text-white text-center font-medium mt-10 hover:bg-gray-800 rounded uppercase"
      >
        back to login
      </Link>
    </section>
  );
};

export default ForgotPassword;

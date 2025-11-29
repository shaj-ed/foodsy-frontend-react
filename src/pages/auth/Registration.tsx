import LabelError from "@/components/common/LabelError";
import { Button } from "@/components/ui/button";
import ButtonLoading from "@/components/ui/button-loading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { registerUser } from "@/lib/api/auth";
import { handleApiError } from "@/lib/axios";
import { UserRegisterPayloadType } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const RegistrationSchema = z
  .object({
    username: z.string().min(3, "Username must be minimum 3 characters"),
    email: z.string().email("Provide a valid email"),
    password: z.string().min(6, "Password must be minimum 6 characters"),
    confirmPassword: z.string(),
    contact: z
      .string()
      .optional()
      .refine((val) => !val || val.length < 11, {
        message: "Provide a valid number",
      }),
    address: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

type RegistrationType = z.infer<typeof RegistrationSchema>;

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationType>({
    resolver: zodResolver(RegistrationSchema),
  });
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("User registration success, please login");
      navigate("/auth/login");
    },
    onError: (error) => {
      const message = handleApiError(error);
      toast.error(message);
    },
  });

  const onSubmitRegistration: SubmitHandler<RegistrationType> = async (
    data
  ) => {
    const { confirmPassword, contact, ...sendvalue } = data;
    const payload: UserRegisterPayloadType = {
      ...sendvalue,
      phoneNumber: contact,
    };

    await mutateAsync({ ...payload });
  };

  return (
    <section className="px-2 max-w-md mx-auto mt-6">
      <h4 className="font-semibold text-2xl mb-6">Sign up</h4>

      <form onSubmit={handleSubmit(onSubmitRegistration)}>
        <div className="mb-5">
          <Label htmlFor="username" className="mb-2 required">
            Username
          </Label>
          <Input
            className="py-5"
            placeholder="Enter username"
            {...register("username")}
          />

          <LabelError message={errors.username?.message} />
        </div>

        <div className="mb-5">
          <Label htmlFor="email" className="mb-2 required">
            Email
          </Label>
          <Input
            className="py-5"
            placeholder="Enter email"
            {...register("email")}
          />

          <LabelError message={errors.email?.message} />
        </div>

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

        <div className="mb-5">
          <Label htmlFor="contact" className="mb-2">
            Contact
          </Label>
          <Input
            className="py-5"
            placeholder="Contact number"
            {...register("contact")}
          />
        </div>

        <div className="mb-5">
          <Label htmlFor="address" className="mb-2">
            Address
          </Label>
          <Textarea placeholder="Enter address" {...register("address")} />
        </div>

        <Button
          size="lg"
          type="submit"
          className="w-full cursor-pointer uppercase"
          disabled={isSubmitting}
        >
          {isSubmitting ? <ButtonLoading /> : "Signup"}
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

export default Registration;

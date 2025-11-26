export type UserType = {
  id: number;
  username: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
};

export type UserRegisterPayloadType = Omit<
  UserType,
  "id" | "createdAt" | "updatedAt"
> & {
  password: string;
};

export type LoginPayloadType = {
  username: string;
  password: string;
};

export type RegisterUserResponse = {
  success: boolean;
  data: UserType;
};

export type LoginResponse = {
  token: string;
  username: string;
  message: string;
};

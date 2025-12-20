export type UserType = {
  id: number;
  username: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type UserRegisterPayloadType = Omit<
  UserType,
  "id" | "createdAt" | "updatedAt" | "role"
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
  accessToken: string;
  refreshToken: string;
  username: string;
  message: string;
};

export type CurrentUserResponse = {
  message: string;
  data: UserType;
};

export type RefreshAccessTokenResponse = {
  accessToken: string;
};

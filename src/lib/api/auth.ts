import {
  CurrentUserResponse,
  LoginPayloadType,
  LoginResponse,
  RefreshAccessTokenResponse,
  RegisterUserResponse,
  UserRegisterPayloadType,
} from "@/types/auth";
import { api } from "../axios";

const AUTH_REGISTER_ENDPOINT = "/auth/register";
const AUTH_LOGIN_ENDPOINT = "/auth/login";
const AUTH_CURRENT_USER_ENDPOINT = "/user/current-user";
const AUTH_REFRESH_ACCESS_TOKEN = "/auth/refresh-token";
const AUTH_LOGOUT = "/auth/logout";

export const registerUser = async (
  payload: UserRegisterPayloadType
): Promise<RegisterUserResponse> => {
  const response = await api.post(AUTH_REGISTER_ENDPOINT, { ...payload });
  return response.data;
};

export const loginUser = async (
  payload: LoginPayloadType
): Promise<LoginResponse> => {
  const response = await api.post(AUTH_LOGIN_ENDPOINT, { ...payload });
  return response.data;
};

export const currentUser = async (): Promise<CurrentUserResponse> => {
  const response = await api.get(AUTH_CURRENT_USER_ENDPOINT);
  return response.data;
};

export const refreshAccessToken =
  async (): Promise<RefreshAccessTokenResponse> => {
    const response = await api.post(AUTH_REFRESH_ACCESS_TOKEN);
    return response.data;
  };

export const logout = async () => {
  await api.post(AUTH_LOGOUT);
};

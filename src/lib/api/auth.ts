import {
  LoginPayloadType,
  LoginResponse,
  RegisterUserResponse,
  UserRegisterPayloadType,
} from "@/types/auth";
import { api } from "../axios";

export const registerUser = async (
  payload: UserRegisterPayloadType
): Promise<RegisterUserResponse> => {
  const response = await api.post("/auth/register", { ...payload });
  return response.data;
};

export const loginUser = async (
  payload: LoginPayloadType
): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", { ...payload });
  return response.data;
};

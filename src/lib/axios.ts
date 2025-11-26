import axios, { AxiosError } from "axios";

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL_LOCAL;

export const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: add request interceptor

// TODO: add response interceptor

// API Error
export const handleApiError = (error: unknown) => {
  let message = "Something went wrong/Bad request";

  if (error instanceof AxiosError) {
    message =
      error.response?.data?.message || "Something gone wrong please try again";
  } else if (error instanceof Error) {
    message = error.message;
  }

  return message;
};

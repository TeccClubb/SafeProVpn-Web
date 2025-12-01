import { AxiosError } from "axios";

export const getErrorMessage = (error: unknown, defaultErrorMessage?: string) =>
  error instanceof AxiosError
    ? error.response
      ? error.response.data.message
      : error.message
    : defaultErrorMessage || "Failed to call api";

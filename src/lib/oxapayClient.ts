import { OXAPAY_MERCHANT_KEY } from "@/lib/constants";
import axios, { AxiosError } from "axios";

const oxapayClient = axios.create({
  baseURL: "https://api.oxapay.com/v1",
  timeout: 5000,
  headers: {
    merchant_api_key: OXAPAY_MERCHANT_KEY,
    "Content-Type": "application/json",
  },
});

oxapayClient.interceptors.response.use(
  (response) => response,
  (error) => {
    let status;
    const message =
      error instanceof AxiosError
        ? error.response
          ? ((status = error.response.status),
            error.response.data?.error.message ||
              `ServerError: ${error.response.statusText}`)
          : error.request
          ? "Network Error: Could not connect to the server."
          : `Request Error: ${error.message}`
        : error instanceof Error
        ? error.message
        : "Failed to reach oxapay";
    return Promise.reject(new Error(message, { cause: { status } }));
  }
);

export default oxapayClient;

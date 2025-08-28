export const PADDLE_API_BASE_URL = process.env.PADDLE_API_BASE_URL!;
export const PADDLE_API_KEY = process.env.PADDLE_API_KEY!;
export const PADDLE_CLIENT_TOKEN = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!;
export const PADDLE_ENVIRONMENT = process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT!;

export const REST_API_BASE_URL = process.env.NEXT_PUBLIC_REST_API_BASE_URL!;
export const AUTH_SECRET = process.env.AUTH_SECRET!;

export const GET_SERVERS_ROUTE = (page: number) =>
  `${REST_API_BASE_URL}/web/servers?page=${page}`;

export const SIGNIN_ROUTE = REST_API_BASE_URL + "/login";
export const SIGNUP_ROUTE = REST_API_BASE_URL + "/signup";
export const LOGOUT_ROUTE = REST_API_BASE_URL + "/logout";
export const FORGOT_PASSWORD_ROUTE = REST_API_BASE_URL + "/forgot-password";
export const RESET_PASSWORD_ROUTE = REST_API_BASE_URL + "/reset-password";
export const LOGIN_WITH_GOOGLE_ROUTE = REST_API_BASE_URL + "/login/google";
export const LOGIN_WITH_APPLE_ROUTE = REST_API_BASE_URL + "/login/apple";

export const getEmailVerificationRoute = (
  id: string,
  hash: string,
  expires: string,
  signature: string
): string =>
  `${REST_API_BASE_URL}/email/verify/${id}/${hash}?expires=${expires}&signature=${signature}`;

export const RESENT_EMAIL_VERIFICATION_ROUTE =
  REST_API_BASE_URL + "/email/resend-verification";

export const GET_PLANS_ROUTE = REST_API_BASE_URL + "/plans";
export const GET_LEGAL_NOTES_ROUTE = REST_API_BASE_URL + "/options";

export const ADD_PURCHASE_PLAN_ROUTE = REST_API_BASE_URL + "/purchase/add";
export const GET_PURCHASE_ACTIVE_PLAN_ROUTE =
  REST_API_BASE_URL + "/subscription/active";
export const GET_PURCHASE_PLAN_ROUTE = (purchaseId: number | string) =>
  `${REST_API_BASE_URL}/purchase/${purchaseId}`;
export const GET_PURCHASE_HISTORY_ROUTE = (page: number) =>
  `${REST_API_BASE_URL}/subscription/history?page=${page}`;

export const GET_CONNECTED_DEVICES_ROUTE = REST_API_BASE_URL + "/devices";
export const REVOKE_CONNECTED_DEVICE_ROUTE = (deviceId: number) =>
  `${REST_API_BASE_URL}/devices/${deviceId}`;
export const REVOKE_ALL_CONNECTED_DEVICES_ROUTE =
  REST_API_BASE_URL + "/devices";

export const UPDATE_USER_INFO_ROUTE = REST_API_BASE_URL + "/user/update";
export const UPDATE_USER_PASSWORD_ROUTE =
  REST_API_BASE_URL + "/user/update-password";

export const DEACTIVATE_ACCOUNT_ROUTE = REST_API_BASE_URL + "/user/deactivate";
export const DELETE_ACCOUNT_ROUTE = REST_API_BASE_URL + "/account/delete/request";
export const REACTIVATE_ACCOUNT_ROUTE =
  REST_API_BASE_URL + "/recover/deactivate";
export const CANCEL_DELETION_ACCOUNT_ROUTE =
  REST_API_BASE_URL + "/recover/delete";

export const GET_BILLING_ADDRESS_ROUTE = REST_API_BASE_URL + "/billing-address";
export const UPDATE_BILLING_ADDRESS_ROUTE =
  REST_API_BASE_URL + "/billing-address/store";

export const GET_SUPPORT_TICKETS_ROUTE = REST_API_BASE_URL + "/tickets";

export const CREATE_SUPPORT_TICKETS_ROUTE =
  REST_API_BASE_URL + "/ticket/create";

export const CLOSE_SUPPORT_TICKETS_ROUTE = (ticketId: number) =>
  `${REST_API_BASE_URL}/ticket/${ticketId}/close`;

export const VIEW_SUPPORT_TICKET_ROUTE = (ticketId: number) =>
  `${REST_API_BASE_URL}/ticket/${ticketId}`;

export const MESSAGE_REPLY_SUPPORT_TICKET_ROUTE = (ticketId: number) =>
  `${REST_API_BASE_URL}/ticket/${ticketId}/reply`;

export const MESSAGE_BROADCASTING_ROUTE =
  REST_API_BASE_URL + "/broadcasting/auth";

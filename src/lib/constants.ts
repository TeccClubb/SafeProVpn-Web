export const USER_COOKIE_KEY = "safe_pro_user";

export const REVERB_APP_ID = +process.env.REVERB_APP_ID!;
export const REVERB_APP_KEY = process.env.REVERB_APP_KEY!;
export const REVERB_APP_SECRET = process.env.REVERB_APP_SECRET!;
export const REVERB_HOST = process.env.REVERB_HOST!;
// export const REVERB_HOST =
//   process.env.NODE_ENV === "production"
//     ? process.env.REVERB_HOST!
//     : "localhost";
export const REVERB_PORT = +process.env.REVERB_PORT!;
export const REVERB_SCHEME = process.env.REVERB_SCHEME!;
// export const REVERB_SCHEME =
//   process.env.NODE_ENV === "production" ? "https" : "http";

export const STRIPE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;

export const REST_API_BASE_URL = process.env.NEXT_PUBLIC_REST_API_BASE_URL!;
export const AUTH_SECRET=process.env.AUTH_SECRET;

export const GET_SERVERS_ROUTE = (page: number) =>
  `${REST_API_BASE_URL}/web/servers?page=${page}`;

export const SIGNIN_ROUTE = REST_API_BASE_URL + "/login";
export const SIGNUP_ROUTE = REST_API_BASE_URL + "/signup";
export const LOGOUT_ROUTE = REST_API_BASE_URL + "/logout";
export const FORGOT_PASSWORD_ROUTE = REST_API_BASE_URL + "/forgot-password";
export const RESET_PASSWORD_ROUTE = REST_API_BASE_URL + "/reset-password";

export const getEmailVerificationRoute = (id: string, hash: string, expires: string, signature: string): string =>
  `${REST_API_BASE_URL}/email/verify/${id}/${hash}?expires=${expires}&signature=${signature}`;

export const RESENT_EMAIL_VERIFICATION_ROUTE =
  REST_API_BASE_URL + "/email/resend-verification";

export const GET_PLANS_ROUTE = REST_API_BASE_URL + "/plans";
export const GET_LEGAL_NOTES_ROUTE = REST_API_BASE_URL + "/options";

export const ADD_PURCHASE_PLAN_ROUTE = REST_API_BASE_URL + "/purchase/add";
export const GET_PURCHASE_ACTIVE_PLAN_ROUTE =
  REST_API_BASE_URL + "/purchase/active";
export const GET_PURCHASE_PLAN_ROUTE = (purchaseId: number | string) =>
  `${REST_API_BASE_URL}/purchase/${purchaseId}`;
export const GET_PURCHASE_HISTORY_ROUTE = (page: number) =>
  `${REST_API_BASE_URL}/purchase/history?page=${page}`;

export const UPDATE_USER_INFO_ROUTE = REST_API_BASE_URL + "/user/update";
export const UPDATE_USER_PASSWORD_ROUTE =
  REST_API_BASE_URL + "/user/update-password";
export const DELETE_USER_ACCOUNT_ROUTE = REST_API_BASE_URL + "/user/delete";

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

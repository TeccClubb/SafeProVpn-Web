export const SIGNIN_PAGE_PATH = "/login";

export const SIGNUP_PAGE_PATH = "/signup";

export const FORGOT_PASSWORD_PAGE_PATH = "/forgetPassword";

export const RESET_PASSWORD_PAGE_PATH = "/reset-password";

export const RESENT_EMAIL_VERIFICATION_PAGE_PATH = "/resend-verification";

export const EMAIL_VERIFY_PAGE_PATH = "/email-verify";

export const HOME_PAGE_PATH = "/";

export const FEATURES_PAGE_PATH = "/feature";

export const SERVERS_PAGE_PATH = "/servers";

export const PRICING_PAGE_PATH = "/pricing";

export const CONTACT_US_PAGE_PATH = "/contact-us";

export const DOWNLOADS_PAGE_PATH = "/downloads";

export const DOWNLOAD_FOR_WINDOWS_PAGE_PATH = "/downloads/Windows";
export const DOWNLOAD_FOR_MACOS_PAGE_PATH = "/downloads/MacOS";
export const DOWNLOAD_FOR_ANDROID_PAGE_PATH = "/downloads/Android";
export const DOWNLOAD_FOR_IOS_PAGE_PATH = "/downloads/iOS";

export const ABOUT_US_PAGE_PATH = "/about-us";
export const REFUND_POLICY_PAGE_PATH = "/refund-policy";
export const PRIVACY_POLICY_PAGE_PATH = "/privacy-policy";
export const TERMS_OF_SERVICES_PAGE_PATH = "/terms-of-services";

export const DASHBOARD_PAGE_PATH = "/Dashboard";
export const BILLING_PAGE_PATH = `${DASHBOARD_PAGE_PATH}/billing`;
export const MY_DEVICES_PAGE_PATH = `${DASHBOARD_PAGE_PATH}/my-devices`;
export const SETTINGS_PAGE_PATH = `${DASHBOARD_PAGE_PATH}/settings`;
export const SUPPORT_TICKETS_PAGE_PATH = `${DASHBOARD_PAGE_PATH}/support-tickets`;

export const CHECKOUT_PAGE_PATH = (planId: number, priceId: string) =>
  `/checkout?planId=${planId}&priceId=${priceId}`;

export const INVOICE_PAGE_PATH = "/invoice";

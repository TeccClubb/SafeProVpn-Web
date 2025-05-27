export type BillingAddress = {
  name: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
};

export type Attachment = {
  id: number;
  uuid: string;
  name: string;
  url: string;
  size: number;
  mime_type: string;
};

export type ChatMessage = {
  id: number;
  user_id: number;
  message: string;
  is_admin: number | boolean;
  attachments: Attachment[];
  created_at: string;
};

export type SupportTicket = {
  id: number;
  subject: string;
  status: string;
  priority: "high" | "medium" | "low";
  created_at: string;
  messages: ChatMessage[];
};

export type AppState = {
  isAppMounted: boolean;
  isLegalNoticeLoadedOnce: boolean;
  termsAndConditions: string;
  privacyPolicy: string;
  isBillingAddressLoadedOnce: boolean;
  billingAddress: BillingAddress | null;
  currentSupportTicketId: number;
  isSupportTicketsLoadedOnce: boolean;
  supportTickets: SupportTicket[];
  isChatDialogOpen: boolean;
};

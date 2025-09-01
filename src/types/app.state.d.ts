declare type BillingAddress = {
  name: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  phone: string;
};

declare type Attachment = {
  id: number;
  uuid: string;
  name: string;
  url: string;
  size: number;
  mime_type: string;
};

declare type ChatMessage = {
  id: number;
  user_id: number;
  message: string;
  is_admin: number | boolean;
  attachments: Attachment[];
  created_at: string;
};

declare type SupportTicket = {
  id: number;
  subject: string;
  status: string;
  priority: "high" | "medium" | "low";
  created_at: string;
  messages: ChatMessage[];
};

declare type AppState = {
  isLogoutModalOpen: boolean;
  isBillingAddressLoadedOnce: boolean;
  billingAddress: BillingAddress | null;
  currentSupportTicketId: number;
  isSupportTicketsLoadedOnce: boolean;
  supportTickets: SupportTicket[];
  currentSupportTicketStatus: string,
  isChatDialogOpen: boolean;
};

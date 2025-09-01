import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AppState = {
  isLogoutModalOpen: false,
  isBillingAddressLoadedOnce: false,
  billingAddress: null,
  isSupportTicketsLoadedOnce: false,
  supportTickets: [],
  currentSupportTicketId: 0,
  currentSupportTicketStatus: "",
  isChatDialogOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLogoutModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isLogoutModalOpen = action.payload;
    },

    setBillingAddress: (
      state,
      action: PayloadAction<BillingAddress | null>
    ) => {
      state.isBillingAddressLoadedOnce = true;
      state.billingAddress = action.payload;
    },

    setSupportTickets: (state, action: PayloadAction<SupportTicket[]>) => {
      state.isSupportTicketsLoadedOnce = true;
      state.supportTickets = action.payload;
    },

    addNewSupportTicket: (state, action: PayloadAction<SupportTicket>) => {
      state.currentSupportTicketId = action.payload.id;
      state.currentSupportTicketStatus = action.payload.status;
      state.supportTickets.unshift(action.payload);
    },

    closeSupportTicket: (state, action: PayloadAction<number>) => {
      const index = state.supportTickets.findIndex(
        (ticket) => ticket.id === action.payload
      );
      state.supportTickets[index].status = "closed";
      state.isChatDialogOpen = false;
      state.currentSupportTicketId = 0;
      state.currentSupportTicketStatus = "";
    },

    setCurrentSupportTicketId: (
      state,
      action: PayloadAction<{ ticketId: number; status: string }>
    ) => {
      state.currentSupportTicketId = action.payload.ticketId;
      state.currentSupportTicketStatus = action.payload.status;
      state.isChatDialogOpen = true;
    },

    setIsChatDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.isChatDialogOpen = action.payload;
    },

    closeChat: (state) => {
      state.isChatDialogOpen = false;
      state.currentSupportTicketId = 0;
      state.currentSupportTicketStatus = "";
    },
  },
});

export const {
  setIsLogoutModalOpen,
  setBillingAddress,
  setSupportTickets,
  addNewSupportTicket,
  closeSupportTicket,
  setCurrentSupportTicketId,
  setIsChatDialogOpen,
  closeChat,
} = appSlice.actions;

export default appSlice.reducer;

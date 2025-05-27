import { AppState, BillingAddress, SupportTicket } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AppState = {
  isAppMounted: false,
  isLegalNoticeLoadedOnce: false,
  termsAndConditions: "",
  privacyPolicy: "",
  isBillingAddressLoadedOnce: false,
  billingAddress: null,
  isSupportTicketsLoadedOnce: false,
  supportTickets: [],
  currentSupportTicketId: 0,
  isChatDialogOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppMounted: (state) => {
      state.isAppMounted = true;
    },

    setLegalNotes: (
      state,
      action: PayloadAction<{
        termsAndConditions: string;
        privacyPolicy: string;
      }>
    ) => {
      state.isLegalNoticeLoadedOnce = true;
      state.termsAndConditions = action.payload.termsAndConditions;
      state.privacyPolicy = action.payload.privacyPolicy;
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
      state.supportTickets.unshift(action.payload);
    },

    closeSupportTicket: (state, action: PayloadAction<number>) => {
      const index = state.supportTickets.findIndex(
        (ticket) => ticket.id === action.payload
      );
      state.supportTickets[index].status = "closed";
      state.isChatDialogOpen = false;
      state.currentSupportTicketId = 0;
    },

    setCurrentSupportTicketId: (state, action: PayloadAction<number>) => {
      state.currentSupportTicketId = action.payload;
      state.isChatDialogOpen = true;
    },

    setIsChatDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.isChatDialogOpen = action.payload;
    },

    closeChat: (state) => {
      state.isChatDialogOpen = false;
      state.currentSupportTicketId = 0;
    },
  },
});

export const {
  setAppMounted,
  setLegalNotes,
  setBillingAddress,
  setSupportTickets,
  addNewSupportTicket,
  closeSupportTicket,
  setCurrentSupportTicketId,
  setIsChatDialogOpen,
  closeChat,
} = appSlice.actions;

export default appSlice.reducer;

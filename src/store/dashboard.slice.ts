import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaymentMethod, Subscription } from "@paddle/paddle-node-sdk";

export type DashboardState = {
  paymentMethods: PaymentMethod[];
  isPaymentMethodsLoadedOnce: boolean;
  subscriptions: Subscription[];
  isSubscriptionsLoadedOnce: boolean;
  devices: Device[];
  isDevicesLoadedOnce: boolean;
};

const initialState: DashboardState = {
  paymentMethods: [],
  isPaymentMethodsLoadedOnce: false,
  subscriptions: [],
  isSubscriptionsLoadedOnce: false,
  devices: [],
  isDevicesLoadedOnce: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setPaymentMethods: (state, action: PayloadAction<PaymentMethod[]>) => {
      state.isPaymentMethodsLoadedOnce = true;
      state.paymentMethods = action.payload;
    },

    removePaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethods = state.paymentMethods.filter(
        (method) => method.id !== action.payload
      );
    },

    setSubscriptions: (state, action: PayloadAction<Subscription[]>) => {
      state.isSubscriptionsLoadedOnce = true;
      state.subscriptions = action.payload;
    },

    removeSubscription: (state, action: PayloadAction<string>) => {
      state.subscriptions = state.subscriptions.filter(
        (subscription) => subscription.id !== action.payload
      );
    },

    setDevices: (state, action: PayloadAction<Device[]>) => {
      state.isDevicesLoadedOnce = true;
      state.devices = action.payload;
    },

    removeDevice: (state, action: PayloadAction<number>) => {
      state.devices = state.devices.filter(
        (device) => device.id !== action.payload
      );
    },
  },
});

export const {
  setPaymentMethods,
  removePaymentMethod,
  setSubscriptions,
  removeSubscription,
  setDevices,
  removeDevice,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;

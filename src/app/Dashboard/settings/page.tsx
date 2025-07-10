import React, { FC } from "react";
import ConnectedDevices from "@/components/dashboard/ConnectedDevices";
import DeleteAccount from "@/components/dashboard/DeleteAccount";
import PasswordChangeForm from "@/components/dashboard/PasswordChangeForm";
import SettingsForm from "@/components/dashboard/SettingsForm";
import TwoFactorAuth from "@/components/dashboard/TwoFactorAuth";

const SettingsPage: FC = () => (
  <>
    <h1 className="text-2xl font-semibold mb-6">Settings</h1>
    <SettingsForm />
    <PasswordChangeForm />
    <TwoFactorAuth />
    <ConnectedDevices />
    <DeleteAccount />
  </>
);

export default SettingsPage;

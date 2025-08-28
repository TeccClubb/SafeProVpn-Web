import React, { FC } from "react";
import DeleteAccount from "@/components/dashboard/DeleteAccount";
import PasswordChangeForm from "@/components/dashboard/PasswordChangeForm";
import SettingsForm from "@/components/dashboard/SettingsForm";

const SettingsPage: FC = () => (
  <>
    <h1 className="text-2xl font-semibold mb-6">Settings</h1>
    <SettingsForm />
    <PasswordChangeForm />
    <DeleteAccount />
  </>
);

export default SettingsPage;

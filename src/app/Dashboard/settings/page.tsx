import ConnectedDevices from "@/components/dashboard/ConnectedDevices";
import DeleteAccount from "@/components/dashboard/DeleteAccount";
import PasswordChangeForm from "@/components/dashboard/PasswordChangeForm";
import SettingsForm from "@/components/dashboard/SettingsForm";
import TwoFactorAuth from "@/components/dashboard/TwoFactorAuth";


export default function SettingsPage() {
  return (
    <div className=" w-full  px-4">
      <div>
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>
      </div>
      <SettingsForm />
      <PasswordChangeForm />
       <TwoFactorAuth />
      <ConnectedDevices />
      <DeleteAccount />
    </div>
  );
}

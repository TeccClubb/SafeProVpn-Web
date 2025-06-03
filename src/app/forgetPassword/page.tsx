// import { MailIcon, LockClosedIcon } from '@heroicons/react/outline';

import AppleICon from "@/icons/AppleIcon";
import GoogleIcon from "@/icons/GoogleIcon";
import { MailIcon } from "@/icons/mailIcon";
import PasswordICon from "@/icons/passwordIcon";
import { Button, Input } from "@heroui/react";

export default function ForgetPassword() {
    return (
        <div className="min-h-screen  py-5 flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Forget Password</h2>
                    <p className="text-sm text-gray-500"> Please enter your your password  reset link to your  emal </p>
                </div>

                <form className="space-y-4">

                    {/* Email Field */}
                    <div className="relative mb-6">
                        <label className="">Email</label>
                        <Input
                            labelPlacement="outside"
                            placeholder="you@example.com"
                            variant="bordered"
                            type="email"
                            size="lg" // Increases padding and height
                            startContent={
                                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                        />

                    </div>

                    {/* Password Field */}
                    

                    {/* Remember Me & Forgot Password */}
                    

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition"
                    >
                        Sign Up →
                    </button>
                </form>
                  <button
                        type="submit"
                        className="w-full   text-black py-2 rounded-md hover:bg-cyan-500 transition"
                    >
                        Back to login ?
                    </button>

                
               
                
            </div>
        </div>
    );
}

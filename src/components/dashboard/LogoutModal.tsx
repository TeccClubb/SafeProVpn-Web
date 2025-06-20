"use client";

import { Button } from "@heroui/react";
import React from "react";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 text-center flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Confirm Logout</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>

        <div className="flex justify-end space-x-3">
          {/* <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </button> */}
          <Button      onClick={onClose} className="bg-red-500 w-[50%]" color="primary">Cancel</Button>

          {/* <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Log Out
          </button> */}
                    <Button    onClick={onConfirm}className="bg-cyan-500 w-[50%]" color="primary">Log Out</Button>

        </div>
      </div>
    </div>
  );
};

export default LogoutModal;

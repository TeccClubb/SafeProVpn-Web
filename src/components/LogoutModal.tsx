"use client";

import React, { FC } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { useLogout } from "@/hooks/useLogout";
import { useAppState } from "@/hooks/use-app-state";

const LogoutModal: FC = () => {
  const { isLogoutModalOpen } = useAppState();
  const { isLoggingOut, handleLogout, openLogoutModal } = useLogout();

  return (
    <Modal
      isOpen={isLogoutModalOpen}
      onOpenChange={openLogoutModal}
      placement="auto"
    >
      <ModalContent>
        <ModalHeader>Confirm Logout</ModalHeader>
        <ModalBody>Are you sure you want to log out?</ModalBody>
        <ModalFooter>
          <Button
            variant="faded"
            onPress={() => openLogoutModal(false)}
            fullWidth
          >
            Cancel
          </Button>
          <Button
            isLoading={isLoggingOut}
            color="danger"
            onPress={handleLogout}
            fullWidth
          >
            {isLoggingOut ? "Logging out..." : "Log Out"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LogoutModal;

"use client";

import React, { FC } from "react";
import {
  addToast,
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { useSession, signOut } from "next-auth/react";
import axios, { AxiosError } from "axios";
import { DELETE_ACCOUNT_ROUTE } from "@/lib/constants";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input";
import z from "zod";
import { passwordSchema } from "@/lib/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const DeleteAccountModal: FC = () => {
  const { data: session } = useSession();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const schema = z.object({
    password: passwordSchema,
    confirmation_text: z
      .string({
        error: "Please type 'PERMANENTLY-DELETE'",
      })
      .min(1, "Please type 'PERMANENTLY-DELETE'")
      .refine((value) => value === "PERMANENTLY-DELETE", {
        error: "Please type 'PERMANENTLY-DELETE'",
        path: ["confirmation_text"],
      }),
  });

  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { password: "", confirmation_text: "" },
  });

  const handleDelete: SubmitHandler<z.infer<typeof schema>> = async (data) => {
    try {
      const res = await axios
        .delete<{ status: boolean; message: string }>(DELETE_ACCOUNT_ROUTE, {
          data,
          headers: {
            Authorization: `Bearer ${session?.user.access_token}`,
            Accept: "application/json",
          },
        })
        .then((res) => res.data);

      reset();

      if (res.status) {
        setError("root", { type: "success", message: res.message });
        addToast({ color: "success", description: res.message });
        await signOut({ redirect: true });
      } else {
        setError("root", { type: "error", message: res.message });
        addToast({ color: "danger", description: res.message });
      }
    } catch (error) {
      reset();
      const message =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : error instanceof Error
          ? error.message
          : "Failed to delete account. Please try again.";

      setError("root", { type: "error", message });
      addToast({ color: "danger", description: message });
    }
  };

  return (
    <>
      <Button color="danger" onPress={onOpen}>
        Delete Account
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="p-4">
          <ModalHeader className="flex flex-col gap-1">
            Permanently delete your account?
            {errors.root && (
              <Alert
                color={errors.root.type === "success" ? "success" : "danger"}
                className="text-base font-normal"
              >
                {errors.root.message}
              </Alert>
            )}
          </ModalHeader>
          <form onSubmit={handleSubmit(handleDelete)}>
            <ModalBody className="gap-6">
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    isRequired
                    label="Type Password"
                    placeholder="Type your password"
                    type="password"
                    size="md"
                    errorMessage={fieldState.error?.message}
                    {...field}
                  />
                )}
              />

              <Controller
                name="confirmation_text"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    isRequired
                    label="Type 'PERMANENTLY-DELETE'"
                    placeholder="Type PERMANENTLY-DELETE"
                    type="text"
                    size="md"
                    classNames={{ label: "select-none" }}
                    errorMessage={fieldState.error?.message}
                    {...field}
                  />
                )}
              />
            </ModalBody>

            <ModalFooter>
              <Button variant="flat" fullWidth onPress={onClose}>
                Close
              </Button>

              <Button
                type="submit"
                color="danger"
                fullWidth
                isLoading={isSubmitting}
              >
                {isSubmitting ? "Deleting" : "Delete"}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

const DeleteAccount: FC = () => (
  <div className="w-full flex justify-start items-start py-6">
    <div className="w-full max-w-3xl space-y-8">
      <h3 className="text-lg font-semibold">Delete Account</h3>
      <p className="text-sm text-default-500">
        Once you delete your account, there is no going back. Please be certain.
      </p>

      <DeleteAccountModal />
    </div>
  </div>
);

export default DeleteAccount;

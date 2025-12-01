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
  Skeleton,
  useDisclosure,
} from "@heroui/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { getErrorMessage } from "@/lib/getErrorMessage";
import axios from "axios";

const PaymentMethods: FC = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const { data, error, isLoading, mutate } = useSWR<{
    success: boolean;
    message: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paymentMethods: any[];
  }>("/api/payment-methods", fetcher);

  const deletePaymentMethod = async (data: {
    customerId: string;
    paymentMethodId: string;
  }) => {
    try {
      const res = await axios
        .delete<{ success: boolean; message: string }>(
          "/api/delete-payment-method",
          { data }
        )
        .then((res) => res.data);

      if (res.success) {
        mutate();
        addToast({ color: "success", description: res.message });
        onClose();
      } else throw new Error(res.message);
    } catch (error) {
      addToast({
        color: "danger",
        description: getErrorMessage(error, "Failed to delete payment method"),
      });
    }
  };

  return (
    <div className="border border-divider rounded-xl p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">Payment Method</h3>
      </div>

      {isLoading && (
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex justify-between items-center rounded-lg px-4 py-3 animate-pulse"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="rounded w-10 h-6" />
                <div>
                  <Skeleton className="h-4 rounded w-32 mb-2" />
                  <Skeleton className="h-3 rounded w-20" />
                </div>
              </div>
              <Skeleton className="w-8 h-8 rounded-full" />
            </div>
          ))}
        </div>
      )}

      {!isLoading && (!data || !data.paymentMethods.length) && (
        <div className="text-center text-default-500 py-8">
          No payment methods found.
        </div>
      )}

      {!isLoading && error && (
        <Alert color="danger">
          {getErrorMessage(error, "Failed to load payment methods")}
        </Alert>
      )}

      {!isLoading &&
        data?.paymentMethods.map(({ id, card, paypal, customerId }) => (
          <div
            key={id}
            className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3"
          >
            <div className="flex items-center gap-3">
              {card && (
                <div className="bg-blue-600 text-white font-semibold text-xs rounded px-2 py-1 uppercase">
                  {card?.type}
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {card
                    ? `${card.type} ending in ${card.last4}`
                    : paypal
                    ? `${paypal.email}`
                    : ""}
                </p>
                <p className="text-xs text-gray-500">
                  {card
                    ? `Expires on ${
                        card.expiryMonth < 10
                          ? `0${card.expiryMonth}`
                          : card.expiryMonth
                      }/${card.expiryYear}`
                    : paypal
                    ? paypal.reference
                    : ""}
                </p>
              </div>
            </div>

            <Button
              onPress={onOpen}
              isIconOnly
              size="sm"
              color="danger"
              variant="flat"
            >
              <TrashIcon className="w-4 h-4" />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="auto">
              <ModalContent>
                <ModalHeader>Delete Payment Method</ModalHeader>
                <ModalBody>
                  Are you sure you want to delete payment method?
                </ModalBody>
                <ModalFooter>
                  <Button variant="faded" onPress={onClose} fullWidth>
                    Cancel
                  </Button>

                  <Button
                    color="danger"
                    onPress={() => {
                      deletePaymentMethod({ customerId, paymentMethodId: id });
                    }}
                    fullWidth
                  >
                    Delete
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        ))}
    </div>
  );
};

export default PaymentMethods;

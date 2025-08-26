"use client";

import React, { FC } from "react";
import { Button } from "@heroui/button";
import { useSubscriptions } from "@/hooks/use-subscriptions";
import { Skeleton } from "@heroui/skeleton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/react";

const Subscriptions: FC = () => {
  const { isSubscriptionsLoading, subscriptions, cancelSubscription } =
    useSubscriptions();

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <div className="border border-divider rounded-xl p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">Subscriptions</h3>
      </div>

      {isSubscriptionsLoading && (
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex justify-between items-center rounded-lg px-4 py-3 animate-pulse bg-default-100"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="rounded w-10 h-6" />
                <div>
                  <Skeleton className="h-4 rounded w-32 mb-2" />
                  <Skeleton className="h-3 rounded w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isSubscriptionsLoading && !subscriptions.length && (
        <div className="text-center text-default-500 py-8">
          No Subscriptions founded.
        </div>
      )}

      {subscriptions.map(({ id, status, nextBilledAt, items }) => (
        <div
          key={id}
          className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3"
        >
          <div className="w-full flex items-center gap-3">
            <div className="flex-grow">
              <p className="text-base font-bold">
                {items[0].product.name}{" "}
                <span className="ml-2 capitalize text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full">
                  {status}
                </span>
              </p>
              <p className="text-sm text-default-500">
                Ends on {new Date(nextBilledAt!).toLocaleString()}
              </p>
            </div>

            <Button onPress={onOpen} size="sm" color="danger" variant="flat">
              Cancel Subscription
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="auto">
              <ModalContent>
                <ModalHeader>Cancel Subscription</ModalHeader>
                <ModalBody>Are you sure to cancel subscription?</ModalBody>
                <ModalFooter>
                  <Button variant="faded" onPress={onClose} fullWidth>
                    Cancel
                  </Button>

                  <Button
                    color="danger"
                    onPress={() => {
                      cancelSubscription(id);
                      onClose();
                    }}
                    fullWidth
                  >
                    Unsubscribe
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subscriptions;

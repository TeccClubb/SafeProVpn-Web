"use client";

import React, { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useBillingAddress } from "@/hooks/useBillingAddress";
import z from "zod";
import {
  citySchema,
  nameSchema,
  phoneSchema,
  postalCodeSchema,
  stateSchema,
  streetAddressSchema,
} from "@/lib/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Divider,
  Alert,
} from "@heroui/react";
import Input from "./Input";

const AddOrUpdateBillingAddress: FC = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const {
    billingAddress,
    updateBillingAddress,
    isBillingAddressLoading,
    error,
  } = useBillingAddress();

  const schema = z.object({
    name: nameSchema,
    address: streetAddressSchema,
    city: citySchema,
    state: stateSchema,
    postal_code: postalCodeSchema,
    phone: phoneSchema,
  });

  const { control, handleSubmit } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    values: {
      name: billingAddress ? billingAddress.name : "",
      address: billingAddress ? billingAddress.address : "",
      city: billingAddress ? billingAddress.city : "",
      state: billingAddress ? billingAddress.state : "",
      postal_code: billingAddress ? billingAddress.postal_code : "",
      phone: billingAddress ? billingAddress.phone : "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) => {
    updateBillingAddress({ address: data, onSuccess: onClose });
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        {billingAddress ? "Update" : "Add"} Billing Address
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="p-4">
          <ModalHeader className="flex flex-col gap-1">
            {billingAddress ? "Update" : "Add"} Billing Address
            {error && <Alert color="danger" title={error} />}
            <Divider />
          </ModalHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody className="gap-4">
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    isRequired
                    label="Name"
                    placeholder="Enter your full name"
                    type="text"
                    size="md"
                    errorMessage={fieldState.error?.message}
                    {...field}
                  />
                )}
              />

              <Controller
                name="city"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    isRequired
                    label="City"
                    placeholder="Enter City"
                    type="text"
                    size="md"
                    errorMessage={fieldState.error?.message}
                    {...field}
                  />
                )}
              />

              <Controller
                name="state"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    isRequired
                    label="State"
                    placeholder="Enter State"
                    type="text"
                    size="md"
                    errorMessage={fieldState.error?.message}
                    {...field}
                  />
                )}
              />

              <Controller
                name="postal_code"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    isRequired
                    label="Postal Code"
                    placeholder="Enter Postal Code"
                    type="text"
                    size="md"
                    errorMessage={fieldState.error?.message}
                    {...field}
                  />
                )}
              />

              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    isRequired
                    label="Phone"
                    placeholder="Enter your phone"
                    type="tel"
                    size="md"
                    errorMessage={fieldState.error?.message}
                    {...field}
                  />
                )}
              />

              <Controller
                name="address"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    isRequired
                    label="Address"
                    placeholder="Enter your Street Address"
                    type="text"
                    size="md"
                    errorMessage={fieldState.error?.message}
                    {...field}
                  />
                )}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                variant="flat"
                fullWidth
                onPress={onClose}
              >
                Close
              </Button>
              <Button
                type="submit"
                color="primary"
                fullWidth
                isLoading={isBillingAddressLoading}
              >
                {billingAddress ? "Update" : "Add"}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddOrUpdateBillingAddress;

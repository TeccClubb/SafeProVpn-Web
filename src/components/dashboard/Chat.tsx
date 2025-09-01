"use client";

import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
// import {
//   BoltIcon,
//   ChatIcon,
//   CloseIcon,
//   PaperClipIcon,
//   PaperPlaneIcon,
//   TickIcon,
//   WarningIcon,
// } from "@/icons";
import {
  addToast,
  Alert,
  Badge,
  Button,
  ButtonProps,
  Chip,
  Divider,
  Image,
  Modal,
  ModalContent,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  ScrollShadow,
  Spinner,
  Textarea,
} from "@heroui/react";
import { cn } from "@/lib/utils";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import {
  CLOSE_SUPPORT_TICKETS_ROUTE,
  CREATE_SUPPORT_TICKETS_ROUTE,
  MESSAGE_REPLY_SUPPORT_TICKET_ROUTE,
} from "@/lib/constants";
import Input from "../Input";
import RadioElement from "@/components/RadioElement";
import { useViewTicket } from "@/hooks/use-view-ticket";
import { useAppState } from "@/hooks/use-app-state";
import { useDispatch } from "react-redux";
import {
  addNewSupportTicket,
  closeChat,
  closeSupportTicket,
  setIsChatDialogOpen,
} from "@/store/app.slice";
import { useSession } from "next-auth/react";
import {
  AlertTriangle,
  BoltIcon,
  CheckIcon,
  MessagesSquareIcon,
  PaperclipIcon,
  XIcon,
} from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";

const CreateTicket: FC = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  type SubmitData = {
    priority: "high" | "medium" | "low";
    subject: string;
    message: string;
  };

  const [isLoading, setLoading] = useState<boolean>(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm<SubmitData>({
    defaultValues: {
      priority: "high",
      subject: "",
      message: "",
    },
  });

  const handleCreateTicket: SubmitHandler<SubmitData> = async (data) => {
    try {
      clearErrors();
      setLoading(true);
      const res = await axios.post<{ ticket: SupportTicket; message: string }>(
        CREATE_SUPPORT_TICKETS_ROUTE,
        data,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session?.user.access_token}`,
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        dispatch(addNewSupportTicket(res.data.ticket));
        addToast({ color: "success", description: res.data.message });
        reset();
      } else {
        addToast({ color: "danger", description: res.data.message });
        setError("root", { type: "manual", message: res.data.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Something Went Wrong";
      addToast({ color: "danger", description: errorMessage });
      setError("root", { type: "manual", message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleCreateTicket)}
      className="max-w-md w-full flex flex-col gap-4 p-6"
    >
      <Controller
        name="priority"
        control={control}
        render={({ field }) => (
          <RadioGroup
            label="Priority Level"
            value={field.value}
            onValueChange={field.onChange}
            classNames={{ label: "text-foreground" }}
          >
            <div className="flex items-center gap-2">
              <RadioElement
                description="High"
                value="high"
                classNames={{
                  base: "bg-danger-100 border-transparent data-[selected=true]:border-danger-500",
                  wrapper: "hidden",
                  labelWrapper:
                    "text-danger-500 ml-0 w-16 h-8 flex flex-col gap-2 items-center justify-center",
                  label: "text-danger-500",
                }}
              >
                <AlertTriangle />
              </RadioElement>
              <RadioElement
                description="Medium"
                value="medium"
                classNames={{
                  base: "bg-warning-100 border-transparent data-[selected=true]:border-warning-500",
                  wrapper: "hidden",
                  labelWrapper:
                    "text-warning-500 ml-0 w-16 h-8 flex flex-col gap-2 items-center justify-center",
                  label: "text-warning-500",
                }}
              >
                <BoltIcon />
              </RadioElement>
              <RadioElement
                description="Low"
                value="low"
                classNames={{
                  base: "bg-success-100 border-transparent data-[selected=true]:border-success-500",
                  wrapper: "hidden",
                  labelWrapper:
                    "text-success-500 ml-0 w-16 h-8 flex flex-col gap-2 items-center justify-center",
                  label: "text-success-500",
                }}
              >
                <CheckIcon />
              </RadioElement>
            </div>
          </RadioGroup>
        )}
      />

      <Input
        label="Subject"
        placeholder="Brief description of issue"
        type="text"
        size="md"
        errorMessage={errors.subject?.message}
        {...register("subject", {
          required: {
            value: true,
            message: "Brief description of issue",
          },
        })}
      />

      <Textarea
        label="Message"
        labelPlacement="outside"
        placeholder="Provide detailed information about your issue"
        type="text"
        classNames={{
          inputWrapper: "bg-transparent border",
          errorMessage: "mt-2 whitespace-pre-line",
        }}
        {...register("message")}
      />

      {errors.root && <Alert color="danger" title={errors.root.message} />}

      <Button
        isLoading={isLoading}
        type="submit"
        fullWidth
        color="primary"
        variant="shadow"
      >
        {isLoading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

const ViewChat: FC<{ ticketId: number; status: string }> = ({
  ticketId,
  status,
}) => {
  const dispatch = useDispatch();
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const { data: session } = useSession();

  type SubmitData = {
    message: string;
  };

  const { isTicketLoading, ticket, setTicket } = useViewTicket(
    ticketId,
    status
  );

  const [isChatClosing, setIsChatClosing] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [attachments, setAttachments] = useState<{ src: string; file: File }[]>(
    []
  );

  const [isImageExpanded, setIsImageExpanded] = useState<boolean>(false);
  const [expandedImageUrl, setExpandedImageUrl] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    setExpandedImageUrl(url);
    setIsImageExpanded(true); // Expand image on click
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setFocus,
    clearErrors,
    watch,
    reset,
  } = useForm<SubmitData>({
    defaultValues: {
      message: "",
    },
  });

  const handleMessageReply: SubmitHandler<SubmitData> = async (data) => {
    try {
      clearErrors();
      setLoading(true);
      const formData = new FormData();
      formData.append("message", data.message.trim());
      attachments.forEach((attachment) =>
        formData.append("attachments[]", attachment.file)
      );

      const res = await axios.post<{ ticket: SupportTicket; message: string }>(
        MESSAGE_REPLY_SUPPORT_TICKET_ROUTE(ticketId),
        formData,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session?.user.access_token}`,
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        setTicket(res.data.ticket);
        setAttachments([]);
        reset();
      } else {
        setError("root", { type: "manual", message: res.data.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Something Went Wrong";
      setError("root", { type: "manual", message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseChat = async () => {
    try {
      setIsChatClosing(true);

      const res = await axios.post<{ message: string }>(
        CLOSE_SUPPORT_TICKETS_ROUTE(ticketId),
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session?.user.access_token}`,
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        addToast({ color: "success", description: res.data.message });
        dispatch(closeSupportTicket(ticketId));
        reset();
      } else {
        addToast({ color: "danger", description: res.data.message });
        setError("root", { type: "manual", message: res.data.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Something Went Wrong";
      addToast({ color: "danger", description: errorMessage });
      setError("root", { type: "manual", message: errorMessage });
    } finally {
      setIsChatClosing(false);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const imageTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    let invalidFile = false;

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        if (!imageTypes.includes(files[i].type)) {
          invalidFile = true;
          break;
        }
      }

      if (invalidFile) {
        setError("root", {
          type: "manual",
          message: "Please select only image files (PNG, JPEG, JPG, WEBP).",
        });
      } else {
        clearErrors("root");
        setAttachments((prev) => [
          ...prev,
          ...Array.from(files).map((file) => ({
            file,
            src: URL.createObjectURL(file),
          })),
        ]);
      }
    }
  };

  useEffect(() => setFocus("message"), [setFocus]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [ticket?.messages]);

  return (
    <div className="w-full h-96 flex flex-col">
      <div className="p-2 text-sm flex items-center">
        <div className="flex-1 flex flex-col gap-2 px-2">
          <div>
            Subject:{" "}
            <span className="capitalize text-default-500">
              {ticket?.subject}
            </span>
          </div>
          <div>
            Priority:{" "}
            <span
              className={cn(
                "capitalize",
                ticket?.priority === "low"
                  ? "text-success-500"
                  : ticket?.priority === "medium"
                  ? "text-warning-500"
                  : ticket?.priority === "high"
                  ? "text-danger-500"
                  : ""
              )}
            >
              {ticket?.priority}
            </span>
          </div>
        </div>

        {ticket && ticket.status === "open" && (
          <Button
            size="sm"
            color="danger"
            isLoading={isChatClosing}
            onPress={handleCloseChat}
          >
            {isChatClosing ? "Closing..." : "Close Chat"}
          </Button>
        )}
      </div>
      <Divider />
      <ScrollShadow
        ref={chatContainerRef}
        className="w-full h-[calc(100%-4.5rem)] px-4 pt-6"
      >
        {isTicketLoading && <Spinner className="w-full h-full" />}

        {ticket &&
          ticket.messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col gap-2 mb-4",
                !message.is_admin ? "items-end" : "items-start"
              )}
            >
              <div
                className={cn(
                  "px-4 py-2 rounded-lg max-w-xs",
                  !message.is_admin
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-black"
                )}
              >
                {message.message}
              </div>
              {message.attachments.map((attachment) => (
                <Image
                  key={attachment.url}
                  alt={attachment.name}
                  src={attachment.url}
                  classNames={{
                    wrapper: "w-2/3 h-auto border-2 p-1 bg-default-100",
                  }}
                  onClick={() => handleImageClick(attachment.url)}
                />
              ))}

              <Modal
                isOpen={isImageExpanded}
                onOpenChange={(isOpen) => {
                  setIsImageExpanded(isOpen);
                  if (!isOpen) setExpandedImageUrl(null);
                }}
                className="pt-8 shadow-none bg-transparent"
                size="2xl"
              >
                <ModalContent>
                  <Image
                    src={expandedImageUrl!}
                    alt="Expanded view"
                    className="max-w-full max-h-full object-contain"
                  />
                </ModalContent>
              </Modal>

              <span className="text-xs text-gray-500">
                {new Date(message.created_at).toLocaleString()}
              </span>
            </div>
          ))}
      </ScrollShadow>
      <Divider />
      {!isTicketLoading && ticket && ticket.status === "open" && (
        <>
          {!!attachments.length && (
            <div className="px-4 py-1 flex flex-wrap gap-2">
              {attachments.map((attachment) => (
                <Chip
                  key={attachment.src}
                  variant="flat"
                  onClose={() =>
                    setAttachments(
                      attachments.filter((file) => file.src !== attachment.src)
                    )
                  }
                >
                  {attachment.file.name}
                </Chip>
              ))}
            </div>
          )}
          <form
            onSubmit={handleSubmit(handleMessageReply)}
            className="w-full flex gap-2 px-4 py-2"
          >
            <input
              id="attachments"
              type="file"
              multiple
              accept="image/png, image/jpeg, image/jpg, image/webp"
              className="hidden"
              onChange={handleFileChange}
            />

            <Input
              placeholder="Message Type Here..."
              type="text"
              size="md"
              radius="full"
              endContent={
                <label
                  htmlFor="attachments"
                  className="text-default-700 hover:opacity-70 active:opacity-50 pointer-events-auto cursor-pointer"
                >
                  <PaperclipIcon />
                </label>
              }
              errorMessage={errors.root?.message}
              {...register("message")}
            />

            <Button
              isIconOnly
              isLoading={isLoading}
              type="submit"
              color="primary"
              variant="shadow"
              radius="full"
              isDisabled={!watch("message").trim()}
            >
              <FaPaperPlane size={16} />
            </Button>
          </form>
        </>
      )}

      {!isTicketLoading && ticket && ticket.status !== "open" && (
        <span className="w-full text-danger-500 py-4 px-6 text-md font-semibold mx-auto bg-danger-100 rounded-b-2xl">
          Chat Closed
        </span>
      )}
    </div>
  );
};

const Chat: FC<ButtonProps> = ({ className, ...props }) => {
  const dispatch = useDispatch();
  const {
    currentSupportTicketId,
    currentSupportTicketStatus,
    isChatDialogOpen,
  } = useAppState();
  return (
    <Popover
      placement="top-end"
      showArrow
      isOpen={isChatDialogOpen}
      onOpenChange={(isOpen) => dispatch(setIsChatDialogOpen(isOpen))}
    >
      <PopoverTrigger>
        <div className="fixed xl:right-12 xl:bottom-12 right-5 bottom-5">
          <Badge
            content={
              <Chip
                color="warning"
                onClose={() => {
                  dispatch(closeChat());
                }}
              >
                Ticket #{currentSupportTicketId}
              </Chip>
            }
            placement="top-left"
            className={cn(
              "bg-transparent border-none",
              !currentSupportTicketId ? "hidden" : ""
            )}
          >
            <Button
              isIconOnly
              variant="shadow"
              color="primary"
              radius="full"
              className={cn("size-14 md:size-16", className)}
              onPress={() => dispatch(setIsChatDialogOpen(true))}
              {...props}
            >
              <MessagesSquareIcon className="size-9 md:size-10" />
            </Button>
          </Badge>
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-96">
        <div className="w-full text-white bg-primary px-6 py-2 rounded-t-xl flex items-center justify-between">
          <h3 className="text-xl">
            {!currentSupportTicketId
              ? "Create Ticket"
              : `Ticket # ${currentSupportTicketId}`}
          </h3>
          <Button
            isIconOnly
            variant="light"
            className="min-w-fit w-auto h-auto rounded-none"
            onPress={() => dispatch(closeChat())}
          >
            <XIcon className="text-white" />
          </Button>
        </div>
        {!currentSupportTicketId ? (
          <CreateTicket />
        ) : (
          <ViewChat
            ticketId={currentSupportTicketId}
            status={currentSupportTicketStatus}
          />
        )}
      </PopoverContent>
    </Popover>
  );
};

export default Chat;

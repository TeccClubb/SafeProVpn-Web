"use client";

import React, { FC } from "react";
import {
  Button,
  getKeyValue,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useDispatch } from "react-redux";
import { setCurrentSupportTicketId } from "@/store/app.slice";
import { useSupportTickets } from "@/hooks/use-support-tickets";
import { MessagesSquareIcon } from "lucide-react";

const ViewChat: FC<{
  supportTicketId: number;
  supportTicketStatus: string;
}> = ({ supportTicketId, supportTicketStatus }) => {
  const dispatch = useDispatch();
  return (
    <Button
      size="sm"
      color="primary"
      variant="shadow"
      startContent={<MessagesSquareIcon />}
      onPress={() =>
        dispatch(
          setCurrentSupportTicketId({
            ticketId: supportTicketId,
            status: supportTicketStatus,
          })
        )
      }
    >
      <span className="hidden md:inline">View Chat</span>
    </Button>
  );
};

const SupportTicketsTable: FC = () => {
  const { supportTickets, isSupportTicketsLoading } = useSupportTickets();
  const loadingState = isSupportTicketsLoading ? "loading" : "idle";

  return (
    <Table
      aria-label="Support Tickets"
      className="max-w-[calc(100vw-3rem)]"
      classNames={{
        th: "text-white bg-primary",
        wrapper: "bg-opacity-60",
      }}
    >
      <TableHeader>
        <TableColumn key="id">Ticket #</TableColumn>
        <TableColumn key="subject">Subject</TableColumn>
        <TableColumn key="priority">Priority Level</TableColumn>
        <TableColumn key="status">Status</TableColumn>
        <TableColumn key="created_at" className="min-w-[9.375rem]">
          Date & Time
        </TableColumn>
        <TableColumn key="view">View Chat</TableColumn>
      </TableHeader>
      <TableBody
        items={supportTickets ?? []}
        loadingContent={<Spinner />}
        loadingState={loadingState}
        emptyContent={"No Support Tickets Found"}
      >
        {(item) => (
          <TableRow key={item?.id}>
            {(columnKey) => (
              <TableCell className="capitalize">
                {columnKey === "id" ? (
                  `#${item.id}`
                ) : columnKey === "priority" ? (
                  <span
                    className={
                      item.priority === "high"
                        ? "text-danger-500"
                        : item.priority === "medium"
                        ? "text-warning-500"
                        : item.priority === "low"
                        ? "text-success-500"
                        : ""
                    }
                  >
                    {item.priority}
                  </span>
                ) : columnKey === "status" ? (
                  <span
                    className={item.status === "open" ? "text-primary" : ""}
                  >
                    {item.status}
                  </span>
                ) : columnKey === "view" ? (
                  <ViewChat
                    supportTicketId={item.id}
                    supportTicketStatus={item.status}
                  />
                ) : (
                  getKeyValue(item, columnKey)
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default SupportTicketsTable;

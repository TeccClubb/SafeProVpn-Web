import React, { FC } from "react";
import SupportTicketsTable from "@/components/dashboard/SupportTicketsTable";
import Chat from "@/components/dashboard/Chat";

const SupportTickets: FC = () => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-3xl mb-6">Support Tickets</h2>
      <SupportTicketsTable />
      <Chat />
    </div>
  );
};

export default SupportTickets;

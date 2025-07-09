"use client";

import React, { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { DASHBOARD_PAGE_PATH, INVOICE_PAGE_PATH } from "@/lib/pathnames";
import Navbar from "./Navbar";
import Footer from "./footer/footer";
import { ToastContainer } from "react-toastify";
import LogoutModal from "./LogoutModal";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <LogoutModal />
      <main className="flex-grow">
        {children}
        <ToastContainer />
      </main>
      {pathname !== INVOICE_PAGE_PATH &&
        !pathname.startsWith(DASHBOARD_PAGE_PATH) && <Footer />}
    </div>
  );
};

export default MainLayout;

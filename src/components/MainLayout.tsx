"use client";

import React, { FC, ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppMounted } from "@/store/app.slice";
import { usePathname } from "next/navigation";
import { INVOICE_PAGE_PATH } from "@/lib/pathnames";
import Navbar from "./Navbar";
import Footer from "./footer/footer";

const MainLayout: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  useEffect(() => {
    dispatch(setAppMounted());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
        <Navbar />
      <main className="flex-grow">{children}</main>
      {pathname !== INVOICE_PAGE_PATH && <Footer />}
    </div>
  );
};

export default MainLayout;

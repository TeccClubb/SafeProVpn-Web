import React, { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AppLogo: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("text-primary flex justify-start items-center gap-1", className)}>
      <Image
        src="/logo.svg"
        alt="SafePro VPN Logo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-10 h-auto"
      />
      <h2 className="text-2xl font-semibold">SafePro VPN</h2>
    </div>
  );
};

export default AppLogo;

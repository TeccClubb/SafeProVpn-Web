import Image from "next/image";
// import { Button } from "@nextui-org/react";
import { Button } from "@heroui/react";
import { Copy } from "lucide-react";
import DownloadIcon from "@/icons/DownloadIcon";
import Link from "next/link";

export default function MacInstallSection() {
  return (
    <section className="bg-gradient-to-r from-cyan-500/10 to-slate-50 px-4 py-8 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <Image
          src="/guidesetup/laptomimg.png" // Use your actual image path
          alt="Mac VPN Illustration"
          width={300}
          height={200}
          className="mx-auto"
        />

        <h2 className="text-2xl md:text-3xl font-bold text-cyan-900">
          SafePro VPN for Mac
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          for macOS 10.13 and above
        </p>

        <Button
            as={Link}
            href="/vpnDownloadHref"
            color="primary"
            variant="shadow"
            startContent={
                <DownloadIcon className=""></DownloadIcon>                
            }
        >
            Download Now
        </Button>

        <div className="text-left space-y-3 mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Installation Steps</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li className="list-none">Download and install the SafePro VPN app for macOS.</li>
            <li className="list-none">Launch the application from your Applications folder.</li>
            <li className="list-none">Enter your activation code when prompted:</li>
            <div className="flex items-center bg-white border border-cyan-300 rounded-md px-3 py-2 w-full md:w-[300px]">
              <span className="text-cyan-700 font-semibold text-sm truncate">
                SP-VPN-2023-XY29
              </span>
              <Copy className="ml-2 w-4 h-4 text-cyan-700 cursor-pointer" />
            </div>
            <li className="list-none">Create or sign in to your SafePro VPN account.</li>
            <li className="list-none">Select a server location and click “Connect.”</li>
            <li className="list-none">Enjoy secure and private browsing!</li>
          </ul>

          <div className="text-sm bg-white p-3     text-gray-600 mt-4  rounded-lg   pt-4">
            For advanced settings and configurations, please refer to our{" "}
            <a href="#" className="text-cyan-700 underline">
              detailed Mac guide.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

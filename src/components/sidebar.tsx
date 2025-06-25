'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
// import LogOutModal from './logoutModal';
import {
  LayoutDashboard,
  CreditCard,
  Monitor,
  BarChart,
  Settings,
  LifeBuoy,
  LogOut,
} from 'lucide-react';
import LogoutModal from './dashboard/LogoutModal';
import { useLogout } from '@/hooks/useLogout';

interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const Sidebar = () => {
  const { handleLogout: logout } = useLogout();
  const pathname = usePathname();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const links: NavLink[] = [
    { name: 'Dashboard', href: '/Dashboard', icon: <LayoutDashboard className="w-5 h-5 mr-2" /> },
    { name: 'Billing', href: '/Dashboard/billing', icon: <CreditCard className="w-5 h-5 mr-2" /> },
    { name: 'My Devices', href: '/Dashboard/my-devices', icon: <Monitor className="w-5 h-5 mr-2" /> },
    { name: 'Data Usage', href: '/#', icon: <BarChart className="w-5 h-5 mr-2" /> },
    { name: 'Setting', href: '/Dashboard/settings', icon: <Settings className="w-5 h-5 mr-2" /> },
    { name: 'Support', href: '/#', icon: <LifeBuoy className="w-5 h-5 mr-2" /> },
    { name: 'Log Out', href: '/logout', icon: <LogOut className="w-5 h-5 mr-2" /> },
  ];

  const handleLogout = () => {
    logout();
    setIsLogoutModalOpen(false);
  };

  return (
   <div className="w-full md:w-[280px]  md:mt-12 flex flex-col items-center md:items-start gap-2 pt-4 border-gray-300 justify-between h-full">
  <div className="w-full flex flex-col gap-2">
    {links
      .filter((link) => link.name !== 'Log Out')
      .map((link) => (
        <div key={link.name} className="w-full p-1 flex justify-center md:justify-start">
          <Link
            href={link.href}
            className={`w-full max-w-[230px] rounded flex items-center px-3 py-2 text-base md:text-lg transition-all duration-200 ...
 ${
              pathname === link.href
                ? 'bg-gray-200 text-slate-600 font-bold'
                : 'text-gray-600 hover:bg-gray-200 hover:text-cyan-500 hover:font-bold'
            }`}
          >
            <span className={`mr-2 transition-colors duration-200 ${
              pathname === link.href
                ? 'text-slate-600'
                : 'group-hover:text-slate-600'
            }`}>
              {link.icon}
            </span>
            {link.name}
          </Link>
        </div>
      ))}
  </div>

  {/* Divider and Log Out Button */}
  <div className="w-full pt-4 border-t border-gray-300 mt-4">
    <button
      onClick={() => setIsLogoutModalOpen(true)}
      className="w-full flex items-center px-4 py-2 text-base md:text-lg text-gray-600 transition-all duration-200 hover:bg-cyan-100 hover:text-cyan-700 font-medium"
    >
      <span className="mr-2 transition-colors duration-200 group-hover:text-cyan-700">
        {links.find((link) => link.name === 'Log Out')?.icon}
      </span>
      Log Out
    </button>
  </div>
   <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
</div>


  );
};

export default Sidebar;

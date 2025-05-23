'use client';

import React, { JSX } from 'react';
import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
// import LogOutModal from '../logoutModal';
// import Cookies from 'js-cookie';
import { Oleo_Script } from 'next/font/google';

const oleoScript = Oleo_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface User {
  [key: string]: any;
}

export default function Navbar(): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
//   const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

//   const handleLogout = () => {
//     console.log("User logged out");
//     localStorage.removeItem("access_token");
//     localStorage.removeItem("user");
//     Cookies.remove("access_token", { path: "/" });
//     window.location.href = "/login";
//     setIsLogoutModalOpen(false);
//   };

//   useEffect(() => {
//     const handleStorageChange = () => {
//       const storedUser = localStorage.getItem("user");
//       setUser(storedUser ? JSON.parse(storedUser) : null);
//     };
//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     setUser(storedUser ? JSON.parse(storedUser) : null);
//   }, [pathname]);

  return (
    <nav className={`w-full sticky z-50 top-0 shadow-sm ${pathname === '/awht-is-vpn' ? 'bg-[#F6F6F6]' : 'bg-white'}`}>
  <div className="w-[85%] mx-auto px-4 py-3 flex items-center justify-between">
    
    {/* Left: Logo */}
    <div className="flex items-center text-cyan-500  text-2xl font-bold leading-normal">
      <img src="/navbar-logo.png" alt="Logo" className="w-10 h-10  mr-2" />
      SafePro VPN
    </div>

    {/* Center: Nav Menu */}
    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-gray-600 items-center">
      <Link href="/pricing" className="hover:text-black">Home</Link>

      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1 hover:text-black"
        >
          Feature
          <ChevronDown className="w-4 h-4" />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-6 left-0 mt-2 w-44 bg-white border rounded shadow-md text-sm z-10">
            <Link href="/what-is-vpn" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Why VPN?</Link>
            <Link href="/vpnFeature" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Feature</Link>
            <Link href="#" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Online Privacy</Link>
            <Link href="#" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">VPN for WFH</Link>
          </div>
        )}
      </div>

      <Link href="/download-device" className="hover:text-black">Download</Link>

      <div className="flex items-center gap-2 hover:text-black">
        <img src="/svg-language.svg" alt="Language" className="w-4 h-4" />
        <Link href="#" className="hover:text-black">English</Link>
      </div>
    </div>

    {/* Right: CTA Buttons */}
    <div className="hidden lg:flex items-center space-x-4">
      {user ? (
        <>
          <span className="px-4 py-2 rounded-full bg-white border border-neutral-300 text-black text-sm hover:bg-teal-500 hover:text-white transition">
            Log Out
          </span>
          <Link
            href="/Dashboard"
            className="px-4 py-2 rounded-full bg-te text-white text-sm hover:bg-teal-500 transition"
          >
            Client Area
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className="px-4 py-2 text-cyan-500 rounded-full bg-white border border-neutral-300  text-sm hover:bg-teal-500 hover:text-white transition"
          >
            Log In
          </Link>
          <Link
            href="/pricing"
            className="px-4 py-2 rounded-full bg-cyan-500  text-white text-sm hover:bg-teal-500 transition">
            Get SafePro
          </Link>
        </>
      )}
    </div>

    {/* Mobile: Toggle Button */}
    <div className="lg:hidden text-black">
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  </div>

  {/* Mobile: Dropdown Menu */}
  {isMobileMenuOpen && (
    <div className="lg:hidden px-6 pb-4 space-y-3 text-gray-700 text-sm">
      <Link href="/pricing" className="block hover:text-black">Home</Link>
      <details className="group">
        <summary onClick={() => setIsDropdownOpen(true)} className="flex items-center justify-between cursor-pointer hover:text-black">
          Feature
        </summary>
        {isDropdownOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <Link href="/what-is-vpn" onClick={() => setIsDropdownOpen(false)} className="block hover:text-black">Why VPN?</Link>
            <Link href="/vpnFeature" onClick={() => setIsDropdownOpen(false)} className="block hover:text-black">Feature</Link>
            <Link href="#" onClick={() => setIsDropdownOpen(false)} className="block hover:text-black">Online Privacy</Link>
            <Link href="#" onClick={() => setIsDropdownOpen(false)} className="block hover:text-black">VPN for WFH</Link>
          </div>
        )}
      </details>
      <Link href="/download-device" className="block hover:text-black">Download</Link>
      <div className="flex items-center gap-2 hover:text-black">
        <img src="/svg-language.svg" alt="Language" className="w-4 h-4" />
        <Link href="#" className="hover:text-black">English</Link>
      </div>
      {user ? (
        <>
          <span className="block hover:text-black">Log Out</span>
          <Link
            href="/Dashboard"
            className="px-4 py-2 rounded-full bg-teal-400 text-white text-sm hover:bg-teal-500 transition"
          >
            Client Area
          </Link>
        </>
      ) : (
        <>
          <Link href="/login" className="block hover:text-black">Log In</Link>
          <Link
            href="/pricing"
            className="inline-block mt-2 px-4 py-2 rounded-full bg-teal-400 text-white text-sm hover:bg-teal-500 transition"
          >
            Get SafePro
          </Link>
        </>
      )}
    </div>
  )}
</nav>

  );
}

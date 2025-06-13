

import Sidebar from '@/components/sidebar';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
        <div className="flex flex-col md:flex-row min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6 border-l border-gray-200 bg-white">
            {children}
          </main>
        </div>
  );
}

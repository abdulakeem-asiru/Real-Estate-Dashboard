import SideNav from "@/app/features/shared/sidenav";
import HeaderComponent from "@/app/features/shared/header";
import { Metadata } from 'next'
import MobileHeader from "@/app/features/shared/MobileHeader";

export const metadata: Metadata = {
  title: 'Safe Home -Dashboard',
  description: '...',
}



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar - fixed width */}
      <div className="hidden md:block md:w-60 flex-shrink-0">
        <SideNav />
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="px-6 py-2 border-b-2 border-[var(--border-color)] hidden md:flex items-center">
          <HeaderComponent />
        </header>
        <header className="md:hidden block">
      <MobileHeader />
        </header>
        <main className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  );
}

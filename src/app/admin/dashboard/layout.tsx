import SideNav from "../navigation/shared/sidenav";
import HeaderComponent from "../navigation/shared/header";
import { Metadata } from 'next'
import MobileHeader from "../navigation/shared/MobileHeader";
import MobileNavigation from "../navigation/shared/MobileNavigation";

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
        <main className="flex-1 overflow-y-auto p-1 md:p-4 scrollbar-hide">
          {children}
        </main>
        <footer className="md:hidden block">
          <MobileNavigation />
        </footer>
      </div>
    </div>
  );
}

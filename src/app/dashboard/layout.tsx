import SideNav from "../parts/shared/sidenav";
import HeaderComponent from "../parts/shared/header";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Safe Home -Dashboard',
  description: '...',
}

 export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden w-full">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div  className="w-full max-md:flex-wrap">
    <header className="h-[90px] px-6 w-full border-b-2 border-[var(--border-color)] hidden md:flex items-center"><HeaderComponent /></header>
      <div className="p-6 overflow-y-scroll md:p-8 h-full md:max-h-[calc(100vh-50px)]">{children}</div>
      </div>
    </div>
  );
}

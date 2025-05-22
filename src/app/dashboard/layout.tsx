import SideNav from "../parts/shared/sidenav";
import HeaderComponent from "../parts/shared/header";

 export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div  className="w-full max-md:flex-wrap">
    <div className="h-[90px] px-6 w-full border-b-2 border-[var(--border-color)] hidden md:flex items-center"><HeaderComponent /></div>
      <div className="p-6 overflow-y-scroll md:p-8 max-h-[calc(100vh-220px)] md:max-h-[calc(100vh-50px)]">{children}</div>
      </div>
    </div>
  );
}

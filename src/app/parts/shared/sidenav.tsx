import NavLinkComponent from '@/app/parts/shared/nav-links';
import Logo from "./logo";

export default function SideNav(){
    return(
        <div className="flex h-full flex-col px-4 py-4 md:px-3 border-r-2 border-[#E0E0E0] overflow-y-scroll scrollbar-hide ">
            <div className="">
            <div className="w-32 text-white md:w-40 mb-10 hidden md:block">
          <Logo />
         </div>
            <NavLinkComponent />
            </div>
        </div>
    )
}